'use client'

import { useEffect, useState } from 'react'
import { FiSearch, FiHome, FiUser, FiMail, FiPhone, FiCalendar, FiDatabase, FiUsers } from 'react-icons/fi'
import { getTumKurumlar } from '@/service/kurumService'
import { toast } from 'react-hot-toast'

interface KurumBilgisi {
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

const SuperadminPage = () => {
  const [kurumlar, setKurumlar] = useState<KurumBilgisi[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchKurumlar = async () => {
      try {
        const result = await getTumKurumlar()
        setKurumlar(result)
      } catch (error) {
        console.error(error)
        toast.error('Kurumlar yüklenirken bir hata oluştu')
      } finally {
        setLoading(false)
      }
    }

    fetchKurumlar()
  }, [])

  const filteredKurumlar = kurumlar.filter(kurum =>
    kurum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kurum.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kurum.isim.toLowerCase().includes(searchTerm.toLowerCase()) ||
    kurum.organization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Kurum Yönetimi</h1>

        {/* Arama Çubuğu */}
        <div className="relative mb-6">
          <FiSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Kurum veya organizasyon ara..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Kurum İstatistikleri */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-lg font-semibold p-4 bg-gray-100">Kurum İstatistikleri</h2>
          {loading ? (
            <div className="text-center p-8 text-amber-600">Yükleniyor...</div>
          ) : filteredKurumlar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
              {filteredKurumlar.map(kurum => {
                const doluluk = kurum.kontejan !== null 
                  ? Math.min(100, (kurum.kullaniciSayisi / kurum.kontejan) * 100)
                  : 0
                
                return (
                  <div key={kurum.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium flex items-center">
                        <FiHome className="mr-2 text-amber-600" />
                        {kurum.isim}
                      </h3>
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        ID: {kurum.id}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Email:</span>
                        <span>{kurum.email}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Yetkili:</span>
                        <span>{kurum.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Telefon:</span>
                        <span>{kurum.phone || 'Belirtilmemiş'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Kontejan:</span>
                        <span>{kurum.kontejan !== null ? kurum.kontejan : 'Sınırsız'}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Kullanıcı Sayısı:</span>
                        <span>{kurum.kullaniciSayisi}</span>
                      </div>
                      {kurum.kontejan !== null && (
                        <div className="pt-2">
                          <div className="flex justify-between text-xs mb-1">
                            <span>Doluluk:</span>
                            <span>{Math.round(doluluk)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-amber-600 h-2 rounded-full"
                              style={{ width: `${doluluk}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span>Oluşturulma:</span>
                        <span>{new Date(kurum.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center p-8 text-gray-500">Kurum bulunamadı</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SuperadminPage