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

// Hook'un döndüreceği veri tipi
type AuthHookReturn = {
  user: User | null; // Giriş yapan kullanıcı bilgisi
  isStudent: boolean; // Öğrenci mi?
  isSuperAdmin: boolean; // Süperadmin mi? (Yeni eklenen)
  kurum: string | null; // Bağlı olduğu kurum adı
  kurumId: string | null; // Kurum ID'si
  kurumKontejan: number | null; // Kurum kontenjanı
  isLoading: boolean; // Yükleniyor durumu
  errorMessage: string | null; // Hata mesajı
  login: (email: string, password: string, rememberMe: boolean) => Promise<User | null>; // Giriş fonksiyonu
  signOut: () => Promise<void>; // Çıkış fonksiyonu
  resetPassword: (email: string) => Promise<void>; // Şifre sıfırlama
  changePassword: (newPassword: string, currentPassword: string) => Promise<void>; // Şifre değiştirme
};

// Hata kodlarını Türkçe'ye çeviren obje
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
  'auth/institution-not-found': 'Kurum bilgisi bulunamadı. Lütfen yapayline@gmail.com ile iletişime geçiniz',
  'auth/unauthorized': 'Bu işlem için yetkiniz bulunmamaktadır',
  'auth/no-current-user': 'Kullanıcı bilgisi bulunamadı',
};

const useAuth = (): AuthHookReturn => {
  // State'ler
  const [user, setUser] = useState<User | null>(null);
  const [isStudent, setIsStudent] = useState<boolean>(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false); // Süperadmin state'i
  const [kurum, setKurum] = useState<string | null>(null);
  const [kurumId, setKurumId] = useState<string | null>(null);
  const [kurumKontejan, setKurumKontejan] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Hata işleme fonksiyonu
  const handleError = (error: unknown) => {
    if (typeof error === 'object' && error !== null && 'code' in error) {
      const errorCode = (error as { code: string }).code;
      return authErrorMessages[errorCode] || `Bir hata oluştu: ${errorCode}`;
    }
    return 'Beklenmeyen bir hata oluştu';
  };

  // Giriş fonksiyonu
  const login = async (email: string, password: string, rememberMe: boolean): Promise<User | null> => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Firebase ile giriş yap
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const currentUser = userCredential.user;

      // Süperadmin kontrolü (sadece yapayline@gmail.com)
      const isSuperAdminUser = currentUser.email === 'yapayline@gmail.com';
      
      // Süperadmin ise özel işlemler
      if (isSuperAdminUser) {
        // Firestore'dan süperadmin bilgisini al
        const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
        const firestoreSuperAdmin = userDoc.data()?.isSuperAdmin || false;
        
        // Çift kontrol: Hem email hem firestore onayı
        if (!firestoreSuperAdmin) {
          await signOut(auth);
          throw { code: 'auth/unauthorized' };
        }
        
        setIsSuperAdmin(true);
        setUser(currentUser);
        
        // Çerez ayarla
        document.cookie = `loggedIn=true; path=/; ${rememberMe ? 'max-age=3600' : ''}`;
        
        // Beni hatırla
        if (rememberMe) {
          localStorage.setItem('saved_email', email);
        } else {
          localStorage.removeItem('saved_email');
        }
        
        return currentUser;
      }

      // Normal kullanıcılar için işlemler
      if (currentUser && !currentUser.emailVerified) {
        await signOut(auth);
        throw { code: 'auth/email-not-verified' };
      }

      // Firestore'dan kullanıcı bilgilerini al
      const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
      
      // Güvenlik kontrolü: Başka bir email süperadmin yapılmışsa
      const firestoreSuperAdmin = userDoc.data()?.isSuperAdmin || false;
      if (firestoreSuperAdmin && !isSuperAdminUser) {
        await signOut(auth);
        throw { code: 'auth/unauthorized' };
      }

      // Kurum kontrolü (süperadmin değilse)
      if (!userDoc.exists() || (!userDoc.data()?.kurum && !firestoreSuperAdmin)) {
        await signOut(auth);
        throw { code: 'auth/institution-not-found' };
      }

      // State'leri güncelle
      setKurum(userDoc.data()?.kurum || null);
      setKurumId(userDoc.data()?.kurumId || null);
      setKurumKontejan(userDoc.data()?.kurumKontejan ?? null);
      setIsStudent(userDoc.data()?.isStudent || false);
      setIsSuperAdmin(false); // Normal kullanıcılar için false

      // Çerez ayarla
      document.cookie = `loggedIn=true; path=/; ${rememberMe ? 'max-age=3600' : ''}`;

      // Beni hatırla
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

  // Kullanıcı rolünü kontrol etme fonksiyonu
  const checkUserRole = async (uid: string) => {
    try {
      setIsLoading(true);
      const userDoc = await getDoc(doc(db, 'users', uid));
      
      if (userDoc.exists()) {
        // Süperadmin kontrolleri
        const isSuperAdminUser = auth.currentUser?.email === 'yapayline@gmail.com';
        const firestoreSuperAdmin = userDoc.data()?.isSuperAdmin || false;
        
        // Güvenlik: Firestore'da süperadmin ama email uymuyorsa
        if (firestoreSuperAdmin && !isSuperAdminUser) {
          await signOut(auth);
          throw { code: 'auth/unauthorized' };
        }
        
        // State'leri güncelle
        setIsSuperAdmin(isSuperAdminUser && firestoreSuperAdmin);
        setIsStudent(userDoc.data()?.isStudent ?? false);
        setKurum(userDoc.data()?.kurum ?? null);
        setKurumId(userDoc.data()?.kurumId ?? null);
        setKurumKontejan(userDoc.data()?.kurumKontejan ?? null);
      } else {
        // Kullanıcı doc yok ama email yapayline ise
        if (auth.currentUser?.email === 'yapayline@gmail.com') {
          setIsSuperAdmin(true);
        } else {
          setIsSuperAdmin(false);
          setIsStudent(false);
          setKurum(null);
          setKurumId(null);
          setKurumKontejan(null);
        }
      }
    } catch (error) {
      setErrorMessage(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  // Çıkış fonksiyonu
  const signOutHandler = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setUser(null);
      setIsStudent(false);
      setIsSuperAdmin(false); // Çıkışta süperadmin durumunu sıfırla
      setKurum(null);
      setKurumId(null);
      setKurumKontejan(null);
      
      // Çerezi sil
      document.cookie = 'loggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      localStorage.removeItem('saved_email');
    } catch (error) {
      setErrorMessage(handleError(error));
    } finally {
      setIsLoading(false);
    }
  };

  // Şifre sıfırlama fonksiyonu
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

  // Şifre değiştirme fonksiyonu
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

  // Auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await checkUserRole(currentUser.uid);
        setUser(currentUser);
      } else {
        setUser(null);
        setIsStudent(false);
        setIsSuperAdmin(false);
        setKurum(null);
        setKurumId(null);
        setKurumKontejan(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Hook'tan döndürülen değerler
  return {
    user,
    isStudent,
    isSuperAdmin, // Süperadmin durumu
    kurum,
    kurumId,
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