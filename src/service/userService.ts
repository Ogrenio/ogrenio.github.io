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
}, kurumKontejan: number | null) => { // kurumKontejan parametresi eklendi
  try {
    // 1. Kontenjan kontrolü (eğer kontenjan null değilse)
    if (kurumKontejan !== null) {
      const currentUsers = await getKurumUsers(userData.kurumId);
      if (currentUsers.length >= kurumKontejan) {
        throw new Error(`Kurum kontenjanı dolu (${currentUsers.length}/${kurumKontejan})`);
      }
    }

    // 2. Kullanıcıyı email ile bul
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', userData.email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Kullanıcı bulunamadı');
    }

    const userDoc = querySnapshot.docs[0];
    const userId = userDoc.id;

    // 3. Kullanıcı zaten bu kuruma kayıtlı mı kontrol et
    const currentUsers = await getKurumUsers(userData.kurumId);
    const isUserAlreadyInKurum = currentUsers.some(user => user.id === userId);
    if (isUserAlreadyInKurum) {
      throw new Error('Bu kullanıcı zaten kuruma kayıtlı');
    }

    // 4. KurumUsers'a ekle
    const kurumUsersRef = collection(db, 'kurumUsers');
    await addDoc(kurumUsersRef, {
      userId,
      kurumId: userData.kurumId,
      email: userData.email,
      joinDate: new Date().toISOString().split('T')[0]
    });

    // 5. Kullanıcının ana kaydını güncelle
    await setDoc(doc(db, 'users', userId), {
      ...userDoc.data(),
      kurumId: userData.kurumId
    }, { merge: true });

    return userId;
  } catch (error) {
    console.error("Error adding user to kurum: ", error);
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
