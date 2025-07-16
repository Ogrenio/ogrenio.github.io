// src/lib/firebase/users.ts
import { db } from './firebase-config'

import { 
  collection, 
  getDocs, 
  query, 
  where, 
  doc, 
  setDoc, 
  getDoc,
  addDoc,
    deleteDoc

} from 'firebase/firestore'

export interface User {
  id: string
  isim: string
  email: string
  joinDate: string
  ogrenciMi: boolean
  studentCode?: string
  teacherCode?: string
  kurumId?: string // Kurum ID'sini ekledik
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const usersCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(usersCollection)
    return usersSnapshot.docs.map(doc => ({
      id: doc.id,
      isim: doc.data().isim || '',
      email: doc.data().email || '',
      joinDate: doc.data().joinDate || new Date().toISOString().split('T')[0],
      ogrenciMi: doc.data().ogrenciMi || false,
      studentCode: doc.data().studentCode || '',
      teacherCode: doc.data().teacherCode || '',
      kurumId: doc.data().kurumId || ''
    }))
  } catch (error) {
    console.error("Error fetching users: ", error)
    throw error
  }
}

// En sade hali
// src/lib/firebase/users.ts
export const addUserToKurum = async (userData: {
  email: string,
  kurumId: string
}, kurumKontejan: number | null) => {
  try {
    // 1. Kontenjan kontrolü
    if (kurumKontejan !== null) {
      const currentUsers = await getKurumUsers(userData.kurumId);
      if (currentUsers.length >= kurumKontejan) {
        throw new Error(`Kurum kontenjanı dolu (${currentUsers.length}/${kurumKontejan})`);
      }
    }

    // 2. Kullanıcıyı email ile bul (case-insensitive)
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userData.email.toLowerCase()));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error(`"${userData.email}" email adresine sahip kullanıcı bulunamadı`);
    }

    const userDoc = querySnapshot.docs[0];
    const userId = userDoc.id;
    const userDataFromDB = userDoc.data();

    // 3. Kullanıcı zaten bu kuruma kayıtlı mı kontrol et
    const currentUsers = await getKurumUsers(userData.kurumId);
    if (currentUsers.some(user => user.id === userId)) {
      throw new Error(`${userDataFromDB.email} zaten bu kuruma kayıtlı`);
    }

    // 4. Premium paket aktivasyonu
    const now = new Date();
    const expirationDate = new Date(now);
    expirationDate.setDate(now.getDate() + 30);

    await addDoc(collection(db, 'purchases'), {
      userId: userId,
      userEmail: userDataFromDB.email,
      productId: 'paket_30_monthly',
      productName: 'Kurum Aylık Paketi',
      purchaseDate: now,
      expirationDate: expirationDate,
      status: 'completed',
      kurumId: userData.kurumId
    });

    // 5. Kuruma ekleme
    await addDoc(collection(db, 'kurumUsers'), {
      userId,
      kurumId: userData.kurumId,
      email: userDataFromDB.email,
      joinDate: new Date().toISOString()
    });

    // 6. Kullanıcı kaydını güncelle
    await setDoc(doc(db, 'users', userId), {
      kurumId: userData.kurumId
    }, { merge: true });

    return { userId, email: userDataFromDB.email };

  } catch (error) {
    console.error("Kuruma kullanıcı ekleme hatası:", {
      error,
      inputEmail: userData.email,
      kurumId: userData.kurumId
    });
    throw error;
  }
}
// Kurumdaki kullanıcıları getirme
export const getKurumUsers = async (kurumId: string): Promise<User[]> => {
  try {
    const kurumUsersRef = collection(db, 'kurumUsers')
    const q = query(kurumUsersRef, where('kurumId', '==', kurumId))
    const querySnapshot = await getDocs(q)

    const userIds = querySnapshot.docs.map(doc => doc.data().userId)
    
    if (userIds.length === 0) return []

    // Kullanıcı detaylarını alalım
    const usersPromises = userIds.map(async (userId) => {
      const userDoc = await getDoc(doc(db, 'users', userId))
      return {
        id: userId,
        ...userDoc.data()
      } as User
    })

    return await Promise.all(usersPromises)
  } catch (error) {
    console.error("Error fetching kurum users: ", error)
    throw error
  }
}
// src/lib/firebase/users.ts

// Kurumdan kullanıcı çıkarma fonksiyonu
export const removeUserFromKurum = async (userId: string, kurumId: string) => {
  try {
    // 1. kurumUsers koleksiyonundan ilgili kaydı bul ve sil
    const kurumUsersRef = collection(db, 'kurumUsers');
    const q = query(kurumUsersRef, where('userId', '==', userId), where('kurumId', '==', kurumId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Kurum-kullanıcı ilişkisi bulunamadı');
    }

    // Tüm eşleşen belgeleri sil (normalde bir tane olmalı)
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);

    // 2. Kullanıcının ana kaydından kurumId'yi kaldır
    await setDoc(doc(db, 'users', userId), {
      kurumId: null
    }, { merge: true });

    return true;
  } catch (error) {
    console.error("Error removing user from kurum: ", error);
    throw error;
  }
}
