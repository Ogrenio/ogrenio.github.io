import {
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  User,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { auth, db } from '@/service/firebase-config';

type AuthHookReturn = {
  user: User | null;
  isStudent: boolean;
  kurum: string | null; // Kurum adı
  kurumId: string | null; // Yeni eklenen kurum ID alanı
    kurumKontejan: number | null; // Yeni eklenen alan

  isLoading: boolean;
  errorMessage: string | null;
  login: (email: string, password: string, rememberMe: boolean) => Promise<User | null>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  changePassword: (newPassword: string, currentPassword: string) => Promise<void>;
};

const authErrorMessages: Record<string, string> = {
  'auth/user-not-found': 'Bu email adresiyle kayıtlı kullanıcı bulunamadı',
  'auth/wrong-password': 'Yanlış şifre, lütfen tekrar deneyin',
  'auth/too-many-requests': 'Çok fazla başarısız giriş denemesi. Lütfen bir süre sonra tekrar deneyin',
  'auth/user-disabled': 'Bu hesap devre dışı bırakılmış',
  'auth/invalid-email': 'Geçersiz email formatı',
  'auth/operation-not-allowed': 'Email/şifre ile giriş izni verilmemiş',
  'auth/network-request-failed': 'İnternet bağlantınız yok, lütfen bağlantınızı kontrol edip tekrar deneyiniz',
  'auth/requires-recent-login': 'Bu işlem için son zamanlarda giriş yapmış olmanız gerekiyor',
  'auth/email-not-verified': 'Lütfen email adresinizi doğrulayın',
  'auth/institution-not-found': 'Kurum bilgisi bulunamadı. Giriş yapamazsınız. Lütfen kurum paketi anlaşması sağlamak için iletişime geçiniz: yapayline@gmail.com',
};

const useAuth = (): AuthHookReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [kurum, setKurum] = useState<string | null>(null);
  const [kurumId, setKurumId] = useState<string | null>(null); // Yeni state
    const [kurumKontejan, setkurumKontejan] = useState<number | null>(null); // Yeni state

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleError = (error: unknown) => {
    if (typeof error === 'object' && error !== null && 'code' in error) {
      const errorCode = (error as { code: string }).code;
      return authErrorMessages[errorCode] || `Bir hata oluştu: ${errorCode}`;
    }
    return 'Beklenmeyen bir hata oluştu';
  };

  const login = async (email: string, password: string, rememberMe: boolean): Promise<User | null> => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const currentUser = userCredential.user;

      if (currentUser && !currentUser.emailVerified) {
        await signOut(auth);
        throw { code: 'auth/email-not-verified' };
      }

      // Token'ı al ve cookie'ye kaydet
    document.cookie = `loggedIn=true; path=/; ${rememberMe ? 'max-age=3600' : ''}`

      // Kullanıcı dokümanını getir
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      if (!userDoc.exists() || !userDoc.data()?.kurum) {
        await signOut(auth);
        throw { code: 'auth/institution-not-found' };
      }

      // Kurum bilgilerini ayarla
      setKurum(userDoc.data()?.kurum || null);
      setKurumId(userDoc.data()?.kurumId || null); // Kurum ID'yi ayarla
              setkurumKontejan(userDoc.data()?.kurumKontejan ?? null); // Yeni eklenen satır

      setIsStudent(userDoc.data()?.isStudent || false);

      if (rememberMe) {
        localStorage.setItem('saved_email', email);
      } else {
        localStorage.removeItem('saved_email');
      }

      setUser(currentUser);
      return currentUser;
    } catch (error) {
      const message = handleError(error);
      setErrorMessage(message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const checkUserRole = async (uid: string) => {
    try {
      setIsLoading(true);
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        setIsStudent(userDoc.data()?.isStudent ?? false);
        setKurum(userDoc.data()?.kurum ?? null);
        setKurumId(userDoc.data()?.kurumId ?? null); // Kurum ID'yi güncelle
              setkurumKontejan(userDoc.data()?.kurumKontejan ?? null); // Yeni eklenen satır

      } else {
        setIsStudent(false);
        setKurum(null);
        setKurumId(null);
        setkurumKontejan(null);

      }
    } catch (error) {
      setErrorMessage('Kullanıcı bilgileri alınırken hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  const signOutHandler = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setIsStudent(false);
      setKurum(null);
      setKurumId(null); // Çıkış yapınca kurumId'yi de temizle
      // Çerezi sil
    document.cookie = 'loggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
      localStorage.removeItem('saved_email');
    } catch (error) {
      setErrorMessage(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
    } catch (error) {
      setErrorMessage(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  const changePassword = async (newPassword: string, currentPassword: string) => {
    setIsLoading(true);
    try {
      if (!user || !user.email) throw { code: 'auth/no-current-user' };

      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    } catch (error) {
      setErrorMessage(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await checkUserRole(currentUser.uid);
        setUser(currentUser);
      } else {
        setUser(null);
        setIsStudent(false);
        setKurum(null);
        setKurumId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    isStudent,
    kurum,
    kurumId, // Yeni eklenen kurumId'yi döndür
    kurumKontejan,
    isLoading,
    errorMessage,
    login,
    signOut: signOutHandler,
    resetPassword,
    changePassword,
  };
};

export default useAuth;