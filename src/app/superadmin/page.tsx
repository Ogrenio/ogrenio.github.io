'use client'

import { useEffect, useState } from 'react'
import { 
  FiSearch, FiHome, FiUser, FiMail, FiPhone, 
  FiCalendar, FiDatabase, FiUsers, FiEdit, 
  FiSave, FiX, FiPlus, FiTrash2 
} from 'react-icons/fi'
import { getTumKurumlar, updateKurum } from '@/service/kurumService'
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
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<Partial<KurumBilgisi>>({})
  const [isAdding, setIsAdding] = useState(false)
  const [newKurum, setNewKurum] = useState<Omit<KurumBilgisi, 'id' | 'kullaniciSayisi' | 'createdAt'>>({
    isim: '',
    kontejan: null,
    email: '',
    name: '',
    phone: '',
    organization: ''
  })

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

  const handleEdit = (kurum: KurumBilgisi) => {
    setEditingId(kurum.id)
    setEditData({
      isim: kurum.isim,
      kontejan: kurum.kontejan,
      email: kurum.email,
      name: kurum.name,
      phone: kurum.phone,
      organization: kurum.organization
    })
  }

  const handleSave = async (kurumId: string) => {
    try {
      await updateKurum(kurumId, editData)
      
      setKurumlar(kurumlar.map(k => 
        k.id === kurumId ? { ...k, ...editData } : k
      ))
      
      setEditingId(null)
      toast.success('Kurum bilgileri güncellendi')
    } catch (error) {
      console.error(error)
      toast.error('Güncelleme sırasında hata oluştu')
    }
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditData({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditData(prev => ({
      ...prev,
      [name]: name === 'kontejan' ? (value ? parseInt(value) : null) : value
    }))
  }

  const handleNewKurumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewKurum(prev => ({
      ...prev,
      [name]: name === 'kontejan' ? (value ? parseInt(value) : null) : value
    }))
  }

  const handleAddKurum = () => {
    setIsAdding(true)
  }

  const handleCancelAdd = () => {
    setIsAdding(false)
    setNewKurum({
      isim: '',
      kontejan: null,
      email: '',
      name: '',
      phone: '',
      organization: ''
    })
  }

  const handleSaveNewKurum = async () => {
    // Burada yeni kurum ekleme işlemini gerçekleştirebilirsiniz
    // Örnek olarak:
    try {
      // Bu kısımda Firebase'e yeni kurum ekleme işlemi yapılacak
      // Şimdilik sadece state'i güncelliyoruz
      const fakeId = `new-${Date.now()}`
      setKurumlar([...kurumlar, {
        ...newKurum,
        id: fakeId,
        kullaniciSayisi: 0,
        createdAt: new Date().toISOString()
      }])
      
      setIsAdding(false)
      setNewKurum({
        isim: '',
        kontejan: null,
        email: '',
        name: '',
        phone: '',
        organization: ''
      })
      toast.success('Yeni kurum eklendi (demo)')
    } catch (error) {
      console.error(error)
      toast.error('Kurum eklenirken hata oluştu')
    }
  }

  const handleDelete = async (kurumId: string) => {
    if (confirm('Bu kurumu silmek istediğinize emin misiniz? Bu işlem geri alınamaz!')) {
      try {
        // Burada kurum silme işlemi yapılacak
        // Şimdilik sadece state'den kaldırıyoruz
        setKurumlar(kurumlar.filter(k => k.id !== kurumId))
        toast.success('Kurum silindi (demo)')
      } catch (error) {
        console.error(error)
        toast.error('Kurum silinirken hata oluştu')
      }
    }
  }

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

        <div className="flex justify-between items-center mb-6">
          <div className="relative w-3/4">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Kurum veya organizasyon ara..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            onClick={handleAddKurum}
            className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md"
          >
            <FiPlus className="mr-2" />
            Yeni Kurum
          </button>
        </div>

        {isAdding && (
          <div className="bg-white shadow rounded-lg overflow-hidden mb-6 p-6">
            <h2 className="text-lg font-semibold mb-4">Yeni Kurum Ekle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kurum Adı</label>
                <input
                  type="text"
                  name="isim"
                  value={newKurum.isim}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kontejan</label>
                <input
                  type="number"
                  name="kontejan"
                  value={newKurum.kontejan || ''}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Sınırsız için boş bırakın"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Yetkili Adı</label>
                <input
                  type="text"
                  name="name"
                  value={newKurum.name}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Yetkili Email</label>
                <input
                  type="email"
                  name="email"
                  value={newKurum.email}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  name="phone"
                  value={newKurum.phone}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Organizasyon</label>
                <input
                  type="text"
                  name="organization"
                  value={newKurum.organization}
                  onChange={handleNewKurumChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={handleCancelAdd}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                <FiX className="inline mr-2" />
                İptal
              </button>
              <button
                onClick={handleSaveNewKurum}
                className="px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
              >
                <FiSave className="inline mr-2" />
                Kaydet
              </button>
            </div>
          </div>
        )}

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <h2 className="text-lg font-semibold p-4 bg-gray-100 flex justify-between items-center">
            <span>Kurum İstatistikleri</span>
            <span className="text-sm font-normal">{filteredKurumlar.length} kurum bulundu</span>
          </h2>
          {loading ? (
            <div className="text-center p-8 text-amber-600">Yükleniyor...</div>
          ) : filteredKurumlar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              {filteredKurumlar.map(kurum => {
                const doluluk = kurum.kontejan !== null 
                  ? Math.min(100, (kurum.kullaniciSayisi / kurum.kontejan) * 100)
                  : 0
                
                return (
                  <div key={kurum.id} className="border rounded-lg p-4 relative hover:shadow-md transition-shadow">
                    {editingId === kurum.id ? (
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <h3 className="font-medium flex items-center">
                            <FiHome className="mr-2 text-amber-600" />
                            <input
                              type="text"
                              name="isim"
                              value={editData.isim || ''}
                              onChange={handleChange}
                              className="border-b border-gray-300 focus:outline-none focus:border-amber-500"
                            />
                          </h3>
                          <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            ID: {kurum.id}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-xs text-gray-500">Email</label>
                            <input
                              type="email"
                              name="email"
                              value={editData.email || ''}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500">Yetkili</label>
                            <input
                              type="text"
                              name="name"
                              value={editData.name || ''}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500">Telefon</label>
                            <input
                              type="tel"
                              name="phone"
                              value={editData.phone || ''}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500">Kontejan</label>
                            <input
                              type="number"
                              name="kontejan"
                              value={editData.kontejan || ''}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded text-sm"
                              placeholder="Sınırsız"
                            />
                          </div>
                          <div className="col-span-2">
                            <label className="block text-xs text-gray-500">Organizasyon</label>
                            <input
                              type="text"
                              name="organization"
                              value={editData.organization || ''}
                              onChange={handleChange}
                              className="w-full p-1 border border-gray-300 rounded text-sm"
                            />
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 pt-2">
                          <button
                            onClick={handleCancel}
                            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100"
                          >
                            İptal
                          </button>
                          <button
                            onClick={() => handleSave(kurum.id)}
                            className="px-3 py-1 text-sm bg-amber-600 text-white rounded hover:bg-amber-700"
                          >
                            Kaydet
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex justify-between items-start mb-2">
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
                            <span className="text-gray-600">Email:</span>
                            <span>{kurum.email}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Yetkili:</span>
                            <span>{kurum.name}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Telefon:</span>
                            <span>{kurum.phone || 'Belirtilmemiş'}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Kontejan:</span>
                            <span>{kurum.kontejan !== null ? kurum.kontejan : 'Sınırsız'}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Kullanıcı Sayısı:</span>
                            <span>{kurum.kullaniciSayisi}</span>
                          </div>
                          
                          {kurum.kontejan !== null && (
                            <div className="pt-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-600">Doluluk:</span>
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
                            <span className="text-gray-600">Organizasyon:</span>
                            <span>{kurum.organization}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Oluşturulma:</span>
                            <span>{new Date(kurum.createdAt).toLocaleDateString()}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 mt-4">
                          <button
                            onClick={() => handleDelete(kurum.id)}
                            className="p-1 text-red-600 hover:text-red-800"
                            title="Sil"
                          >
                            <FiTrash2 />
                          </button>
                          <button
                            onClick={() => handleEdit(kurum)}
                            className="p-1 text-amber-600 hover:text-amber-800"
                            title="Düzenle"
                          >
                            <FiEdit />
                          </button>
                        </div>
                      </>
                    )}
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