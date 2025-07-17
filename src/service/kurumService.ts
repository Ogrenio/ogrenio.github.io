import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

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
}

export const getTumKurumlar = async (): Promise<KurumBilgisi[]> => {
  try {
    const usersSnapshot = await getDocs(collection(db, 'users'))
    
    const kurumMap = new Map<string, {
      isim: string
      kontejan: number | null
      kullaniciSayisi: number
      email: string
      name: string
      phone: string
      createdAt: string
      organization: string
    }>()

    usersSnapshot.forEach(doc => {
      const userData = doc.data()
      if (userData.kurumId) {
        const kurumId = userData.kurumId
        const existing = kurumMap.get(kurumId) || {
          isim: userData.kurum || 'Bilinmeyen Kurum',
          kontejan: userData.kurumKontejan || null,
          kullaniciSayisi: 0,
          email: userData.email || '',
          name: userData.name || '',
          phone: userData.phone || '',
          createdAt: userData.createdAt || '',
          organization: userData.organization || ''
        }
        
        kurumMap.set(kurumId, {
          ...existing,
          kullaniciSayisi: existing.kullaniciSayisi + 1,
          // Keep the first user's contact info as representative
          email: existing.email || userData.email || '',
          name: existing.name || userData.name || '',
          phone: existing.phone || userData.phone || '',
          createdAt: existing.createdAt || userData.createdAt || '',
          organization: existing.organization || userData.organization || ''
        })
      }
    })

    const kurumlar: KurumBilgisi[] = Array.from(kurumMap.entries()).map(([kurumId, data]) => ({
      id: kurumId,
      ...data
    }))

    return kurumlar
  } catch (error) {
    console.error("Tüm kurumlar alınırken hata oluştu:", error)
    throw error
  }
}