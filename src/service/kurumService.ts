import { db } from './firebase-config'
import { collection, getDocs, doc, updateDoc, query, where } from 'firebase/firestore'

export interface KurumBilgisi {
  id: string
  isim: string
  kontejan: number | null
  kullaniciSayisi: number
  email: string
  name: string
  phone: string
  createdAt: string
  organization: string
  premium: boolean // Yeni eklenen alan
}

export const getTumKurumlar = async (): Promise<KurumBilgisi[]> => {
  try {
    const usersSnapshot = await getDocs(collection(db, 'users'));
    
    const kurumMap = new Map<string, {
      isim: string;
      kontejan: number | null;
      kullaniciSayisi: number;
      email: string;
      name: string;
      phone: string;
      createdAt: string;
      organization: string;
      premium: boolean;
    }>();

    usersSnapshot.forEach(doc => {
      const userData = doc.data();
      
      const kurumId = userData.kurumId || userData.organization;
      
      if (kurumId) {
        const existing = kurumMap.get(kurumId) || {
          isim: userData.kurum || userData.organization || 'Bilinmeyen Kurum',
          kontejan: userData.kurumKontejan || null,
          kullaniciSayisi: 0,
          email: userData.email || '',
          name: userData.name || '',
          phone: userData.phone || '',
          createdAt: userData.createdAt || '',
          organization: userData.organization || '',
          premium: userData.kurumPremium || false // Varsayılan false
        };
        
        kurumMap.set(kurumId, {
          ...existing,
          kullaniciSayisi: existing.kullaniciSayisi + 1,
          email: existing.email || userData.email || '',
          name: existing.name || userData.name || '',
          phone: existing.phone || userData.phone || '',
          createdAt: existing.createdAt || userData.createdAt || '',
          organization: existing.organization || userData.organization || '',
          premium: existing.premium || userData.kurumPremium || false
        });
      }
    });

    const kurumlar: KurumBilgisi[] = Array.from(kurumMap.entries()).map(([kurumId, data]) => ({
      id: kurumId,
      ...data
    }));

    return kurumlar;
  } catch (error) {
    console.error("Tüm kurumlar alınırken hata oluştu:", error);
    throw error;
  }
};

export const updateKurum = async (kurumId: string, updatedData: Partial<KurumBilgisi>): Promise<void> => {
  try {
    const usersQuery = query(collection(db, 'users'), where('kurumId', '==', kurumId))
    const usersSnapshot = await getDocs(usersQuery)
    
    const batchUpdates: Promise<void>[] = []
    
    usersSnapshot.forEach(userDoc => {
      const userRef = doc(db, 'users', userDoc.id)
      const userUpdates: Record<string, any> = {}
      
      if (updatedData.isim !== undefined) {
        userUpdates.kurum = updatedData.isim
      }
      if (updatedData.kontejan !== undefined) {
        userUpdates.kurumKontejan = updatedData.kontejan
      }
      if (updatedData.email !== undefined) {
        userUpdates.email = updatedData.email
      }
      if (updatedData.name !== undefined) {
        userUpdates.name = updatedData.name
      }
      if (updatedData.phone !== undefined) {
        userUpdates.phone = updatedData.phone
      }
      if (updatedData.organization !== undefined) {
        userUpdates.organization = updatedData.organization
      }
      if (updatedData.premium !== undefined) {
        userUpdates.kurumPremium = updatedData.premium
      }
      
      if (Object.keys(userUpdates).length > 0) {
        batchUpdates.push(updateDoc(userRef, userUpdates))
      }
    })
    
    await Promise.all(batchUpdates)
  } catch (error) {
    console.error("Kurum güncellenirken hata oluştu:", error)
    throw error
  }
}