"use client"

import { useState, useEffect } from 'react'
import { FiPlus, FiTrash2,  FiSearch, FiUser, FiMail, FiChevronLeft, FiChevronRight, FiHome, FiBook, FiUsers, FiShield } from 'react-icons/fi'
import { User, addUserToKurum, getKurumUsers,  removeUserFromKurum // Bu satırı ekleyin
 } from '@/service/userService'
import useAuth from "@/service/auth"
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const DashboardPage = () => {
    const router = useRouter() // useRouter'ı kullanıma aldık

  const [isMounted, setIsMounted] = useState(false)
  const [users, setUsers] = useState<User[]>([])
  const { user,kurumKontejan, isStudent, kurum, kurumId,isSuperAdmin  } = useAuth()
  const [loading, setLoading] = useState(true)
  const [newUser, setNewUser] = useState({
    email: '',
    ogrenciMi: true,
    studentCode: '',
    teacherCode: ''
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5

  const handleRemoveUser = async (userId: string) => {
  if (!kurumId) {
    toast.error('Kurum bilgisi bulunamadı');
    return;
  }

  if (window.confirm('Bu kullanıcıyı kurumdan çıkarmak istediğinize emin misiniz?')) {
    try {
      await removeUserFromKurum(userId, kurumId);
      const updatedUsers = await getKurumUsers(kurumId);
      setUsers(updatedUsers);
      toast.success('Kullanıcı kurumdan başarıyla çıkarıldı');
    } catch (error) {
      console.error("Error removing user: ", error);
      toast.error('Kullanıcı çıkarılırken hata oluştu: ' + (error as Error).message);
    }
  }
};
// Süperadmin paneline yönlendirme fonksiyonu
  const navigateToSuperAdminPanel = () => {
    router.push('/superadmin')
  }
  useEffect(() => {
    setIsMounted(true)
    const fetchUsers = async () => {
      try {
        if (kurumId) {
          const kurumUsers = await getKurumUsers(kurumId)
          setUsers(kurumUsers)
        } else {
          toast.error('Kurum bilgisi bulunamadı')
        }
      } catch (error) {
        console.error("Error fetching users: ", error)
        toast.error('Kullanıcılar yüklenirken hata oluştu')
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [kurumId])

  const handleAddUser = async () => {
    if (!newUser.email || !kurumId) {
      toast.error('Email alanı boş bırakılamaz')
      return
    }

    

    try {
      // Kontenjan kontrolü
    if (kurumKontejan !== null && users.length >= kurumKontejan) {
      toast.error(`Kurum kontenjanı dolu (${users.length}/${kurumKontejan}). Daha fazla kullanıcı ekleyemezsiniz.`);
      return;
    }

      await addUserToKurum({
        email: newUser.email,
        kurumId: kurumId,
      }, kurumKontejan);

      const updatedUsers = await getKurumUsers(kurumId)
      setUsers(updatedUsers)

      setNewUser({
        email: '',
        ogrenciMi: true,
        studentCode: '',
        teacherCode: ''
      })

      toast.success('Kullanıcı başarıyla eklendi')
    } catch (error) {
      console.error("Error adding user: ", error)
      toast.error('Kullanıcı eklenirken hata oluştu: ' + (error as Error).message)
    }
  }

  const filteredUsers = users.filter(user => {
  const searchTermLower = searchTerm.toLowerCase();
  return (
    (user.isim && user.isim.toLowerCase().includes(searchTermLower)) || 
    (user.email && user.email.toLowerCase().includes(searchTermLower)) ||
    (user.ogrenciMi && user.studentCode && user.studentCode.toLowerCase().includes(searchTermLower)) ||
    (!user.ogrenciMi && user.teacherCode && user.teacherCode.toLowerCase().includes(searchTermLower))
  );
});
  
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  if (!isMounted || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-amber-600 text-lg">Yükleniyor...</div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Süperadmin butonu - sadece isSuperAdmin true ise göster */}
        {isSuperAdmin && (
          <div className="mb-4 flex justify-end">
            <button
              onClick={navigateToSuperAdminPanel}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <FiShield className="mr-2 h-4 w-4" />
              Süperadmin Paneli
            </button>
          </div>
        )}
        {user && (
          <div className="bg-white shadow rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <FiUser className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h2 className="text-lg font-medium text-gray-900">{user.email}</h2>
                  <p className="text-sm text-gray-500">{isStudent ? 'Öğrenci' : 'Öğretmen'}</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center space-x-2">
                  <FiHome className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Kurum</p>
                    <p className="text-sm text-gray-900">{kurum || 'Bilinmiyor'}</p>
                  </div>
                </div>
                
 <div className="flex items-center space-x-2">
  <FiUsers className="h-5 w-5 text-gray-400" />
  <div>
    <p className="text-sm font-medium text-gray-500">Kurum Üye Kontenjanı</p>
    <p className="text-sm text-gray-900">
      {kurumKontejan !== null ? (
        <span>
          {users.length}/{kurumKontejan} (Kalan: {kurumKontejan - users.length})
        </span>
      ) : 'Sınırsız'}
    </p>
    {kurumKontejan !== null && (
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
        <div 
          className="bg-amber-600 h-1.5 rounded-full" 
          style={{ width: `${Math.min(100, (users.length / kurumKontejan) * 100)}%` }}
        ></div>
      </div>
    )}
  </div>
</div>
                
                <div className="flex items-center space-x-2">
                  <FiBook className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-500">Durum</p>
                    <p className="text-sm text-gray-900">{isStudent ? 'Öğrenci' : 'Öğretmen'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Kurum Yönetimi</h1>
          
          <div className="relative mt-4 md:mt-0 w-full md:w-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Kullanıcı ara..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Yeni Kullanıcı Ekle</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  placeholder="email@example.com"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                />
              </div>
              
              

              <div className="flex items-end space-x-4">
                

                <button
                  type="button"
                  onClick={handleAddUser}
                  disabled={!newUser.email }
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiPlus className="mr-2 h-4 w-4" />
                  Kullanıcı Ekle
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kullanıcı
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tür
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kod
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Katılım Tarihi
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    İşlemler
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <FiUser className="h-5 w-5 text-amber-600" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{user.isim || 'İsim belirtilmemiş'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <FiMail className="flex-shrink-0 mr-2 h-4 w-4 text-gray-400" />
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.ogrenciMi ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {user.ogrenciMi ? 'Öğrenci' : 'Öğretmen'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.ogrenciMi ? user.studentCode : user.teacherCode}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {new Date(user.joinDate).toLocaleDateString('tr-TR')}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        
                        <button 
  className="text-red-600 hover:text-red-900"
  onClick={() => handleRemoveUser(user.id)}
>
  <FiTrash2 className="h-5 w-5" />
</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                      {searchTerm ? "Aradığınız kriterlere uygun kullanıcı bulunamadı" : "Henüz kullanıcı eklenmedi"}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {filteredUsers.length > usersPerPage && (
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Toplam <span className="font-medium">{filteredUsers.length}</span> kullanıcıdan{' '}
                    <span className="font-medium">{indexOfFirstUser + 1}-{Math.min(indexOfLastUser, filteredUsers.length)}</span> arası gösteriliyor
                  </p>
                </div>
                <div>
                  <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiChevronLeft className="h-5 w-5" />
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page ? 'z-10 bg-amber-50 border-amber-500 text-amber-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                      >
                        {page}
                      </button>
                    ))}
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiChevronRight className="h-5 w-5" />
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage