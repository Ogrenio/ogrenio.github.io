"use client";

import { 
  FiMenu, 
  FiLogOut, 
} from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import useAuth from "@/service/auth";


// Type-safe client-side only wrapper
const ClientSideOnly = dynamic(
  () => Promise.resolve(({ children }: { children: React.ReactNode }) => <>{children}</>),
  { 
    ssr: false,
    loading: () => (
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg h-16" />
    )
  }
);

const HeaderDashboard = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { user ,signOut} = useAuth()


  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleLogout = () => {
    // Add actual logout logic here
       signOut(); // useAuth'tan gelen signOut fonksiyonunu çağır

    console.log("Logging out...");
    setIsProfileOpen(false);
    router.push("/");
  };

  if (!isMounted) {
    return (
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="h-8 w-8 rounded-md bg-white/20 animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <ClientSideOnly>
      <header className="bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Left section - Logo and mobile menu */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-white hover:text-amber-100 hover:bg-amber-600 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <FiMenu className="h-6 w-6" />
              </button>
              
              <Link href="/dashboard" className="flex items-center" aria-label="Dashboard">
                <div className="h-8 w-8 rounded-md bg-white flex items-center justify-center shadow-md overflow-hidden">
                  <Image
                    src="/images/icon.png"
                    alt="Öğrenio Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="ml-3 text-xl font-bold text-white hidden md:block">
                  Öğrenio Kurum Paneli
                </h1>
              </Link>
            </div>

            {/* Right section - Navigation and user */}
            <div className="flex items-center space-x-4">
              {/*
              <button 
                className="p-2 rounded-full text-white hover:text-amber-100 hover:bg-amber-600 relative transition-colors"
                aria-label="Notifications"
              >
                <FiBell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-gray-100" />
              </button>
              */}
              

              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 p-1 rounded-full hover:bg-amber-600 focus:outline-none transition-colors"
                  aria-label="User menu"
                >
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center text-amber-600 font-medium shadow-md overflow-hidden">
                    <Image
                      src="/images/icon.png"
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="hidden md:inline text-sm font-medium text-white">
                    Kurum Admin
                  </span>
                </button>

                {/* Profile dropdown */}
                {isProfileOpen && (
                  <div 
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 py-1 z-20 overflow-hidden"
                    onMouseLeave={() => setIsProfileOpen(false)}
                  >
                    <div className="px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                      <p className="text-sm font-medium text-gray-900">Kurum Admin</p>
                      <p className="text-xs text-amber-600">{user?.email}</p>
                    </div>
                    {/*  
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiUser className="mr-3 h-4 w-4 text-amber-500" />
                      Profil
                    </Link>
                    
                    <Link
                      href="/dashboard/settings"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiSettings className="mr-3 h-4 w-4 text-amber-500" />
                      Ayarlar
                    </Link>
                    
                    <Link
                      href="/help"
                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-amber-50 transition-colors"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      <FiHelpCircle className="mr-3 h-4 w-4 text-amber-500" />
                      Yardım
                    </Link>
                    */}
                    
                    
                    <div className="border-t border-amber-100" />
                    
                    <button
                      onClick={handleLogout}
                      className="w-full text-left flex items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <FiLogOut className="mr-3 h-4 w-4" />
                      Çıkış Yap
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu (example implementation) */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-600">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/dashboard" 
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              <Link
                href="/dashboard/courses"
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Kurslar
              </Link>
              <Link
                href="/dashboard/students"
                className="block px-3 py-2 rounded-md text-white font-medium hover:bg-amber-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Öğrenciler
              </Link>
            </div>
          </div>
        )}
      </header>
    </ClientSideOnly>
  );
};

export default HeaderDashboard;