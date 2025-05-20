"use client";

import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Link from "next/link";

const AccountInfoPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        <Container>
          <div className="py-20 md:py-28 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-800">
              Hesap Bilgileri ve Veri Politikası
            </h1>
            
            <section className="mb-12">  
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Hesap Silme İşlemi</h2>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                <h3 className="text-xl font-medium mb-4 flex items-center">
                  <span className="h-8 w-8 bg-secondary text-white rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                  Hesap Silme Adımları
                </h3>
                <ol className="list-none pl-5 mb-6 space-y-3">
                  <li className="flex items-start">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium text-gray-700">1</div>
                    <span>Uygulama ana ekranından "Ayarlar" menüsüne girin.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium text-gray-700">2</div>
                    <span>"Hesabımı Sil" seçeneğine dokunun.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 text-sm font-medium text-gray-700">3</div>
                    <span>Karşınıza çıkan onay penceresinden "Evet" seçeneğini seçin.</span>
                  </li>
                </ol>
                
                <h3 className="text-xl font-medium mt-8 mb-4 flex items-center">
                  <span className="h-8 w-8 bg-secondary text-white rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                  Silinecek Veriler
                </h3>
                <p className="mb-3 text-gray-700">Hesabınızı sildiğinizde aşağıdaki veriler tamamen silinir:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Kişisel bilgileriniz (ad, soyad, e-posta, telefon)</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Eğitim performans verileriniz</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Tercihleriniz ve ayarlarınız</span>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Oluşturduğunuz içerikler</span>
                  </li>
                </ul>
                
                <div className="mt-8 p-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                  <p className="font-medium text-amber-800 mb-1 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Önemli Uyarı
                  </p>
                  <p className="text-amber-800">Hesap silme işlemi geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir.</p>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Veri Saklama Politikası</h2>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                <div className="space-y-4 text-gray-700">
                  <p>
                    ÖĞRENİO olarak kullanıcılarımızın gizliliğine saygı duyuyor ve verilerinizi korumak için 
                    en üst düzey güvenlik önlemlerini alıyoruz.
                  </p>
                  <p>
                    Kişisel verileriniz, hizmetlerimizi sunmak ve geliştirmek amacıyla, yalnızca hesabınız 
                    aktif olduğu sürece saklanmaktadır.
                  </p>
                  <p>
                    Hesap silme işlemi tamamlandıktan sonra, yasal zorunluluklar dışında hiçbir veri 
                    sistemlerimizde tutulmaz.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 border-b pb-2 border-gray-200">Yardım ve Destek</h2>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                <p className="mb-6 text-gray-700">
                  Hesap silme veya veri politikaları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                </p>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <span className="block text-sm text-gray-500 mb-1">E-posta adresi:</span>
                    <a href="mailto:ogrenioapp@gmail.com" className="text-secondary text-lg font-medium hover:underline">ogrenioapp@gmail.com</a>
                  </div>
                </div>
              </div>
            </section>
            
            <div className="mt-12 pt-6 border-t border-gray-200 text-center">
              <Link href="/" className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AccountInfoPage; 