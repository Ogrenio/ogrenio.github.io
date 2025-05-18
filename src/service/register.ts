// src/services/register.ts
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  User,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/service/firebase-config';

// Hata mesajları Türkçe olarak tanımlanıyor
const errorMessages: Record<string, string> = {
  'auth/email-already-in-use': 'Bu email adresi zaten kullanılıyor',
  'auth/invalid-email': 'Geçersiz email formatı',
  'auth/operation-not-allowed': 'Email/şifre ile kayıt izni verilmemiş',
  'auth/weak-password': 'Şifre en az 6 karakter olmalıdır',
  'auth/network-request-failed': 'İnternet bağlantısı yok, lütfen bağlantınızı kontrol edin',
  'auth/too-many-requests': 'Çok fazla deneme yaptınız, lütfen bir süre sonra tekrar deneyin',
};

// Kullanıcı kayıt bilgileri için tip tanımı
interface RegisterData {
  name: string;
  phone: string;
  organization: string;
  email: string;
  password: string;
  isStudent?: boolean;
    kurumKisiSayisi?: number; // Yeni eklenen alan

}

// Kayıt fonksiyonu
export const registerWithEmailAndPassword = async ({
  name,
  phone,
  organization,
  email,
  password,
  isStudent = false,
    kurumKisiSayisi = 2, // Varsayılan değer 2 olarak ayarlandı

}: RegisterData): Promise<{ user: User | null; error: string | null }> => {
  try {
    // 1. Firebase Authentication ile kullanıcı oluştur
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.trim(),
      password
    );
    const user = userCredential.user;

    // 2. Kullanıcı profilini güncelle (displayName)
    await updateProfile(user, {
      displayName: name,
    });

    // 3. Email doğrulama maili gönder
    await sendEmailVerification(user);

    // 4. Firestore'da kullanıcı dokümanı oluştur
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      name,
      phone,
      email: email.trim(),
      organization,
      isStudent,
    kurumKisiSayisi, // Firestore'a kaydediliyor

      emailVerified: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return { user, error: null };
  } catch (error: any) {
    // Hata durumunda uygun Türkçe mesajı döndür
    const errorCode = error.code;
    const errorMessage = errorMessages[errorCode] || 'Kayıt sırasında bir hata oluştu';
    return { user: null, error: errorMessage };
  }
};

// Kurum kontrol fonksiyonu (opsiyonel)
export const checkOrganizationExists = async (organizationName: string): Promise<boolean> => {
  // Burada kurumun veritabanında olup olmadığını kontrol edebilirsiniz
  // Örnek implementasyon için firestore sorgusu gerekli
  return true; // Şimdilik her zaman true dönüyor
};