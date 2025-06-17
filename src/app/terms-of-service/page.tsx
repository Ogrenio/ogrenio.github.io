import React from 'react';
import Container from '@/components/Container';
import { footerDetails } from '@/data/footer';

const TermsOfServicePage = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-12 text-center mt-8">Hizmet Şartları</h1>
        
        <div className="space-y-8">
          {/* 1. Şartların Kabulü */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary mt-4">1. Şartların Kabulü</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Bu Kullanım Şartları ("Şartlar"), Öğrenio mobil uygulamasının ("Uygulama") tüm kullanıcıları için geçerlidir ve uygulamanın kullanımıyla ilgili kuralları, hakları ve yükümlülükleri düzenler. Uygulamayı indirmeniz, kurmanız veya kullanmaya başlamanız, bu Şartlar'ı okuduğunuz, anladığınız ve kabul ettiğiniz anlamına gelir. Bu şartları kabul etmiyorsanız, uygulamayı kullanmamanız gerekmektedir.
              </p>
              <p className="mb-4">
                Bazı durumlarda, Öğrenio tarafından sunulan belirli hizmetler, özellikler veya kampanyalar için ek koşullar ("Ek Şartlar") uygulanabilir. Bu tür Ek Şartlar, ilgili hizmet veya içeriğe erişmeden önce kullanıcıya sunulur. Ek Şartlar ile bu Şartlar arasında herhangi bir çelişki olması durumunda ve aksi açıkça belirtilmediği sürece, ilgili hizmet veya içeriğe özel Ek Şartlar geçerli olacaktır.
              </p>
              <p>
                Kullanıcı, bu Şartlar'ı ve yürürlükteki mevzuata uygun davranacağını kabul ve taahhüt eder.
              </p>
            </div>
          </div>

          {/* 2. Bu Şartlarda Yapılacak Değişiklikler */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Bu Şartlarda Yapılacak Değişiklikler</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio uygulamasının kullanım koşullarını oluşturan bu Şartları, tamamen kendi takdirimize bağlı olarak, herhangi bir zamanda değiştirme veya güncelleme hakkını saklı tutarız. Yapılan değişiklikler uygulama içerisinde veya ilgili platformda (örneğin, App Store veya Google Play) yayımlanarak kullanıcıların erişimine sunulur. Şartlar güncellendiğinde, belgenin en üstünde yeni yürürlük tarihi belirtilir.
              </p>
              <p className="mb-4">
                Yürürlükteki mevzuat gereği gerekli olduğu durumlarda, kullanıcıya ek bildirim yolları da sağlanabilir (uygulama içi bildirim, e-posta vb.).
              </p>
              <p className="mb-4">
                Kullanıcıların, değişikliklerin yürürlüğe girmesinden sonra Öğrenio hizmetlerini kullanmaya devam etmesi, yeni Şartları kabul ettikleri anlamına gelir. Değişiklikleri kabul etmemeniz durumunda, uygulamayı kullanmayı bırakmanız gerekmektedir.
              </p>
              <p>
                Ayrıca Öğrenio uygulaması zamanla gelişip değişebileceğinden, sunulan hizmetlerin tamamını veya herhangi bir bölümünü, herhangi bir zamanda ve önceden bildirimde bulunmaksızın değiştirme, geçici olarak askıya alma veya tamamen durdurma hakkımız da saklıdır.
              </p>
            </div>
          </div>

          {/* 3. Hesap Oluşturma ve Kullanım */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Hesap Oluşturma ve Kullanım</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio uygulamasının sunduğu belirli özelliklere ve hizmetlere erişim sağlamak için bir kullanıcı hesabı ("Hesap") oluşturmanız ve bu Kullanım Şartları ile Gizlilik Politikası'nı okuduğunuzu ve kabul ettiğinizi onaylamanız gerekmektedir. Yalnızca 18 yaş ve üzerindeki yetişkin kullanıcılar hesap oluşturabilir. Çocuk kullanıcılar (öğrenciler), yalnızca velileri veya öğretmenleri tarafından oluşturulan hesaplar aracılığıyla uygulamayı kullanabilir.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Abonelik ve Erişim</h3>
              <p className="mb-4">
                Öğrenio uygulaması, temel özelliklerin yanı sıra bazı gelişmiş içeriklere, raporlara ve kişiselleştirilmiş hizmetlere erişim sunan ücretli abonelik seçenekleri içerebilir. Bu içeriklere erişim, yalnızca geçerli ve aktif bir abonelik süresince mümkündür. Abonelik şartları ve ücretlendirme ayrı sözleşmelere veya uygulama içi açıklamalara tabidir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Parolalar ve Hesap Güvenliği</h3>
              <p className="mb-4">
                Her hesap için, uygulamayı kullanan kişinin:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>En az 18 yaşında olması,</li>
                <li>Gerçek ve doğru bilgilerle kayıt yaptırması,</li>
                <li>Hesap bilgilerini güncel tutması gerekmektedir.</li>
              </ul>
              <p className="mb-4">
                Kullanıcı, hesabı altındaki tüm faaliyetlerden yalnızca kendisinin sorumlu olduğunu kabul eder. Şifrenizin ve hesap bilgilerinizin gizliliğini korumak sizin sorumluluğunuzdadır.
              </p>
              <p>
                Kullanıcı aşağıdakileri kabul ve taahhüt eder:
              </p>
              <ul className="list-disc pl-6">
                <li>Hesabına yalnızca kendisinin ve izin verdiği kişilerin erişmesini sağlayacağını,</li>
                <li>Hesabının izinsiz kullanımını derhal bize bildireceğini,</li>
                <li>Yetkisiz erişim veya paylaşım nedeniyle oluşabilecek kayıplardan Öğrenio'nun sorumlu olmadığını,</li>
                <li>Hesabını, bir başkasına satmayacağını, devretmeyeceğini veya başka bir şekilde aktarmayacağını.</li>
              </ul>
              <p className="mt-4">
                Uygun olmayan şekilde oluşturulmuş hesaplar tespit edilirse, ilgili hesabın askıya alınması veya kalıcı olarak devre dışı bırakılması hakkımız saklıdır.
              </p>
            </div>
          </div>

          {/* 4. Satın Almalar */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Satın Almalar</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">4.1. Abonelikler, Ücretlendirme ve Faturalama</h3>
              <p className="mb-4">
                Öğrenio'nun bazı gelişmiş özellikleri, içerikleri veya raporlama araçları yalnızca ücretli abonelik yoluyla erişilebilen hizmetlerdir. Bu tür özelliklere erişmek için bir hesap oluşturmanız ve ilgili abonelik ücretini ödemeniz gerekmektedir. Tüm ücretler, ödeme sırasında geçerli olan koşullara ve fiyatlara tabidir.
              </p>
              <p className="mb-4">
                Abonelikler, uygulama içinden, Google Play Store, Apple App Store platformları üzerinden satın alınabilir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.1. Ödeme Yetkisi ve Sorumluluk</h3>
              <p className="mb-4">
                Bir abonelik satın aldığınızda, geçerli bir ödeme yöntemi (kredi kartı, banka kartı, mobil ödeme, Google Play/Apple ödeme sistemi vb.) sunmalı ve bu yöntemle sizden ücret tahsil edilmesine açıkça onay vermelisiniz. Uygulama üzerinden sunulan tüm ücretli hizmetler için ödeme yükümlülüğü kullanıcıya aittir. Ödeme yönteminizle ilgili bir sorun olması durumunda, ilgili ücretlerin tahsil edilebilmesi adına alternatif tahsilat yollarını kullanma hakkımızı saklı tutarız.
              </p>
              <p className="mb-4">
                Ödeme bilgilerinizin doğruluğu ve güncelliği tamamen sizin sorumluluğunuzdadır. Yetkisiz kullanımlardan doğan zararlar konusunda Öğrenio sorumlu tutulamaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.2. Tekrarlayan Abonelikler</h3>
              <p className="mb-4">
                Öğrenio'da sunulan bazı hizmetler tekrarlayan abonelik modeli ile çalışır. Bu durumda, aboneliğiniz seçtiğiniz süre (aylık/yıllık) sonunda otomatik olarak yenilenir ve abonelik ücretiniz kayıtlı ödeme yönteminiz üzerinden tahsil edilir. Aboneliğinizi yenileme tarihinden önce iptal etmediğiniz sürece, sistem aboneliği otomatik olarak uzatır.
              </p>
              <p className="mb-4">
                Yenileme döneminden önce iptal etmediğiniz sürece sizden yeni dönem ücreti tahsil edilir. Ödeme alınamaması halinde, hizmete erişiminiz geçici veya kalıcı olarak askıya alınabilir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.3. Tek Seferlik Abonelikler</h3>
              <p className="mb-4">
                Bazı durumlarda, belirli bir süre boyunca geçerli olacak şekilde tek seferlik abonelik paketleri sunabiliriz. Bu paketler peşin ödeme ile satılır, iade edilemez ve iptal edilemez. Satın alınan sürenin sonunda erişim sona erer.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.4. Deneme Süreleri ve Promosyonlar</h3>
              <p className="mb-4">
                Zaman zaman promosyonlar kapsamında sınırlı süreli ücretsiz veya indirimli deneme abonelikleri sunabiliriz. Bu tür denemeler, belirtilen sürenin sonunda otomatik olarak ücretli aboneliğe dönüşebilir. Ücretlendirilmek istemiyorsanız, deneme süresi sona ermeden önce aboneliğinizi iptal etmeniz gerekir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.5. Ücret ve Özellik Değişiklikleri</h3>
              <p className="mb-4">
                Öğrenio, abonelik ücretlerini veya hizmete dahil edilen özellikleri önceden bildirmek suretiyle değiştirme hakkını saklı tutar. Abonelik ücretlerinde yapılacak bir artış öncesinde sizi bilgilendireceğiz ve iptal seçeneği sunabiliriz. Değişiklik sonrası hizmeti kullanmaya devam etmeniz, yeni şartları kabul ettiğiniz anlamına gelir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.6. Abonelik İptali</h3>
              <p className="mb-4">
                Aboneliğinizi iptal etmek isterseniz, bunu uygulama içinden "Paketler > Geçmiş Satın Alımlarım > Aboneliği İptal Et" bölümüne girerek veya aboneliği gerçekleştirdiğiniz platformun iptal süreciyle (örneğin App Store veya Google Play) yapabilirsiniz. İptal işlemi, bir sonraki faturalama dönemine kadar geçerli olur; o dönem sona erene kadar hizmetten faydalanmaya devam edebilirsiniz.
              </p>
              <p className="mb-4">
                İptal edilen abonelikler için, yasal zorunluluklar dışında iade yapılmaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.1.7. Yetkisiz Ödemeler</h3>
              <p className="mb-4">
                Yasal sınırlar çerçevesinde, ödeme bilgilerinizin izniniz dışında kullanılması sonucunda oluşan kayıplardan Öğrenio sorumlu tutulamaz. Ancak, söz konusu durum bize 5 iş günü içinde bildirilirse, gerekli araştırmaları yaparak çözüm sunmaya çalışabiliriz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">4.2. Uygulama Mağazaları ve Yetkili Satıcılar</h3>
              <p className="mb-4">
                Öğrenio hizmetleri, Apple App Store ve Google Play gibi uygulama mağazaları üzerinden sunulabilir. Bu mağazalardan yapılan satın alma işlemleri, ilgili mağazaların hizmet ve iade politikalarına da tabidir.
              </p>
              <p>
                Ürün/hizmet satış hakkımızı, coğrafi bölgelere, kullanıcı profiline veya sipariş miktarına göre sınırlama hakkımız saklıdır. Ayrıca fiyat ve içeriklerde herhangi bir zamanda değişiklik yapma hakkımızı da saklı tutarız.
              </p>
            </div>
          </div>

          {/* 5. Promosyon Kodları */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Promosyon Kodları, Hediye Kartları ve Hediyeli Abonelikler</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio, zaman zaman doğrudan veya iş ortakları aracılığıyla, belirli ücretli hizmetlere erişim sağlamak amacıyla promosyon kodları, hediye kartları veya hediye abonelikleri sunabilir. Bu promosyonlar, sınırlı süreli veya kullanım koşullarına bağlı olabilir.
              </p>
              <p className="mb-4">
                Söz konusu promosyonlar, sunuldukları anda geçerli olacak Ek Şartlara tabidir. Promosyon kodlarının kullanım süresi, geçerlilik şartları ve hangi hizmetlerde geçerli olduğu gibi detaylar kullanıcıya açıkça belirtilir.
              </p>
              <p className="mb-4">
                Promosyon kodları veya hediye kartları:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Paraya çevrilemez, devredilemez ve satılamaz,</li>
                <li>Belirtilen süre ve kapsam dışında kullanılamaz,</li>
                <li>Uygulamanın belirli bölgelerinde veya hesap türlerinde geçerli olmayabilir.</li>
              </ul>
              <p>
                Öğrenio, kötüye kullanım, sahtekârlık ya da izinsiz çoğaltım durumlarında bu tür promosyonları askıya alma veya iptal etme hakkını saklı tutar.
              </p>
            </div>
          </div>

          {/* 6. Gizlilik */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Gizlilik</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Kullanıcılarımızın ve özellikle çocuk kullanıcıların gizliliğini korumak bizim için büyük önem taşımaktadır. Sizden ve çocuğunuzdan topladığımız kişisel verilerin nasıl işlendiği, kullanıldığı ve kimlerle hangi koşullarda paylaşıldığı hakkında detaylı bilgiye ulaşmak için lütfen Gizlilik Politikamızı inceleyin.
              </p>
              <p className="mb-4">
                Gizlilik Politikasına şu adresten erişebilirsiniz:
                <br />
                <a href="/privacy-policy" className="text-primary hover:underline">🔗 https://ogrenio.github.io/privacy-policy</a>
              </p>
              <p>
                Öğrenio, Türkiye Cumhuriyeti Kişisel Verilerin Korunması Kanunu (KVKK) ve geçerli diğer veri koruma mevzuatına uygun olarak hareket eder. Uygulamamızı kullanarak, bu politikada belirtilen şartları kabul etmiş sayılırsınız.
              </p>
            </div>
          </div>

          {/* 7. Hizmetlerin Sahipliği ve Lisansı */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Hizmetlerin Sahipliği ve Lisansı</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">7.1. Mülkiyet</h3>
              <p className="mb-4">
                Öğrenio mobil uygulaması, içeriği ve altyapısı (geçmiş, mevcut ve gelecekteki tüm sürümleri dâhil olmak üzere), yalnızca Öğrenio projesi tarafından geliştirilmiş ve sahiplenilmiştir. Uygulama kapsamında sunulan tüm içerikler – eğitim materyalleri, etkileşimli oyunlar, sesler, videolar, grafikler, karakterler, simgeler, uygulama arayüzleri, yazılım kodları ve diğer dijital öğeler – yerel ve uluslararası telif hakkı, marka, patent ve diğer fikri mülkiyet yasaları ile korunmaktadır.
              </p>
              <p className="mb-4">
                Bu içerikler arasında şunlar yer almaktadır:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Etkileşimli ders planları ve öğrenme senaryoları,</li>
                <li>Yapay zekâ destekli eğitim modelleri,</li>
                <li>Görseller, animasyonlar, ses dosyaları, müzikler ve videolar,</li>
                <li>Uygulamaya özel karakterler ve öğretici içerikler,</li>
                <li>Öğrenio'ya veya üçüncü taraflara ait ticari markalar, logolar ve tasarımlar.</li>
              </ul>
              <p>
                Tüm bu materyaller üzerindeki fikri ve sınai mülkiyet hakları Öğrenio'ya ve/veya ilgili lisans sahiplerine aittir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">7.2. Sınırlı Kullanım Lisansı</h3>
              <p className="mb-4">
                Bu Kullanım Şartları'na uygun hareket etmeniz ve varsa geçerli abonelik ücretini ödemeniz koşuluyla, size yalnızca kişisel, ticari olmayan amaçlarla Öğrenio uygulamasını kullanma hakkı veren sınırlı, devredilemez, geri alınabilir bir lisans veriyoruz.
              </p>
              <p className="mb-4">
                Bu lisans kapsamında şunlara izin verilir:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uygulamanın yalnızca bireysel eğitim amacıyla, bir mobil cihaz üzerinden kullanılması,</li>
                <li>Öğretmenlerin, içerikleri yalnızca öğrencilerini desteklemek amacıyla kullanması,</li>
                <li>Erişilen materyallerin ticari olmayan, özel kullanım için görüntülenmesi.</li>
              </ul>
              <p className="mb-4">
                Bu lisans, kullanıcıya herhangi bir içerik üzerinde mülkiyet hakkı veya fikri mülkiyet hakkı devri sağlamaz.
              </p>
              <p className="mb-4">
                Yasaktır:
              </p>
              <ul className="list-disc pl-6">
                <li>İçeriği izinsiz şekilde çoğaltmak, dağıtmak, satmak, alt lisanslamak veya ticari olarak kullanmak,</li>
                <li>Öğrenio içeriklerini başka bir platformda yayınlamak,</li>
                <li>İçeriği değiştirmek, tersine mühendislik uygulamak veya kaynak koda erişmeye çalışmak.</li>
              </ul>
              <p className="mt-4">
                Yukarıda açıkça izin verilmeyen her türlü kullanım hakkı, Öğrenio ve ilgili hak sahipleri tarafından saklı tutulur.
              </p>
            </div>
          </div>

          {/* 8. Kullanıcı Tarafından Oluşturulan İçerik */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Kullanıcı Tarafından Oluşturulan İçerik</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio, kullanıcıların uygulama içerisinde çeşitli içerikler oluşturmasına, göndermesine veya paylaşmasına olanak sağlayabilir. Bu içerikler; çizimler, metin yanıtları, ses kayıtları, yorumlar, uygulama içi geri bildirimler veya diğer benzeri dijital üretimler olabilir ("Kullanıcı Tarafından Oluşturulan İçerik").
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Çocuk Kullanıcılar ile İlgili Not</h3>
              <p className="mb-4">
                Öğrenio, çocuk kullanıcılar tarafından oluşturulan içeriklerin herhangi bir kişisel bilgi veya tanımlayıcı unsur (örneğin tam ad, yüz görüntüsü, konum bilgisi vb.) içermemesi için gerekli önlemleri alır. Yetişkin kullanıcılar (veli veya öğretmen), çocuk adına oluşturulan içeriklerin anonimleştirilmiş biçimde kullanılmasına izin vermiş sayılır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">İzin Verilen Kullanım Örnekleri:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Öğrencilerin çizimlerinin veya başarı istatistiklerinin anonim örnek olarak paylaşılması,</li>
                <li>Uygulama içi yarışma veya etkinliklere gönderilen içeriklerin isimsiz biçimde, takma isim kullanılarak sergilenmesi,</li>
                <li>Kullanıcı yorumlarının uygulama tanıtım materyallerinde kullanılması (örneğin: "Bir veli yorumu: Bu uygulama oğlumun okuma hızını artırdı").</li>
              </ul>
              <p>
                Kullanıcı olarak, Öğrenio'ya gönderdiğiniz içeriklerin bu şartlarda kullanılabileceğini ve içeriklerde size ait tanımlayıcı bilgi varsa bunların yalnızca açık onayınızla paylaşılacağını kabul etmiş olursunuz.
              </p>
            </div>
          </div>

          {/* 9. Hizmetlerin ve İçeriklerin Kullanım Kısıtlamaları */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">9. Hizmetlerin ve İçeriklerin Kullanım Kısıtlamaları</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio uygulamasını kullanırken hem sizin hem de çocuğunuzun güvenliği ve haklarının korunması amacıyla bazı kullanım kısıtlamaları getirilmiştir. Aşağıda belirtilen eylemleri gerçekleştirmeyeceğinizi, bu tür faaliyetlerde bulunanları teşvik etmeyeceğinizi ve kolaylaştırmayacağınızı kabul etmiş olursunuz:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">9.1. Yasaklanmış İçerik ve Davranışlar</h3>
              <p className="mb-4">
                Aşağıdaki türde Kullanıcı Tarafından Oluşturulan İçeriği uygulamaya yüklemek, paylaşmak, iletmek veya yayınlamak kesinlikle yasaktır:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Başkalarına zarar vermeyi amaçlayan veya zarar veren;</li>
                <li>Hukuka aykırı, yanlış, yanıltıcı, hakaret içeren, müstehcen, şiddet içeren, taciz edici, tehditkâr, ayrımcı, iftira niteliğinde veya kişilik haklarını zedeleyici;</li>
                <li>Başka bir kişinin fikri mülkiyet haklarını, gizliliğini, ticari sırlarını ya da diğer yasal haklarını ihlal eden;</li>
                <li>Uygulamanın amacıyla bağdaşmayan, küçük düşürücü ya da topluluk kurallarına aykırı içerikler.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">9.2. Teknik Kısıtlamalar</h3>
              <p className="mb-4">
                Aşağıdaki teknik müdahaleler de kesin olarak yasaktır:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uygulama veya içeriklerine ait yazılımları tersine mühendislik uygulamak, kaynak kodunu çözmeye çalışmak, değiştirmek veya parçalamak,</li>
                <li>Yetkisiz şekilde uygulamaya dosya, kod, komut veya dış kaynaklı yazılım yüklemek veya çalıştırmak,</li>
                <li>Uygulamanın işleyişini bozan, yavaşlatan ya da kullanıcıların erişimini engelleyen herhangi bir eylemde bulunmak,</li>
                <li>Botlar, kazıyıcılar (scraper), otomatik araçlar veya script'ler ile veri çekmek, kullanıcı verisi toplamak ya da sistemleri manipüle etmek.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">9.3. Ticari veya Yetkisiz Kullanım</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Öğrenio'da yer alan içerikleri veya uygulama arayüzünü ticari amaçlarla izinsiz kullanmak,</li>
                <li>Öğrenio'ya ait marka, logo, içerik ya da metinleri izinsiz şekilde çoğaltmak, gizli şekilde meta etiket olarak kullanmak,</li>
                <li>Uygulamanın güvenlik sistemlerini, erişim kısıtlamalarını veya diğer koruma mekanizmalarını devre dışı bırakmaya çalışmak,</li>
                <li>Üçüncü kişilere ait iletişim bilgilerini (e-posta, telefon, adres vb.) izinsiz şekilde toplamak veya paylaşmak.</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">9.4. Genel Yükümlülük</h3>
              <p>
                Bu Şartlar'ın veya geçerli herhangi bir Ek Şartın ihlali ya da başka bir kullanıcıyı benzer şekilde ihlale teşvik edecek veya kolaylaştıracak davranışlarda bulunmak da yasaktır.
              </p>
            </div>
          </div>

          {/* 10. Uygulamaya Verilen ve Uygulamadan Verilen Bağlantılar */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">10. Uygulamaya Verilen ve Uygulamadan Verilen Bağlantılar</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">10.1. Öğrenio Uygulamasına Bağlantı Verme veya Uygulamayı Çerçeveleme</h3>
              <p className="mb-4">
                Öğrenio'ya başka bir web sitesinden, platformdan ya da sosyal medya hesabından bağlantı (link) verirken, Öğrenio'nun o siteyi desteklediği, onayladığı ya da o siteyle doğrudan ilişkili olduğu izlenimini verecek şekilde davranılamaz. Link veren platformlar, kullanıcıları yanlış yönlendirecek, aldatıcı ya da yanıltıcı içerikler içermemelidir.
              </p>
              <p className="mb-4">
                Bağlantının teknik olarak uygun olsa bile, Öğrenio ekibi olarak tamamen kendi takdirimize bağlı olarak herhangi bir platformdan gelen bağlantıyı reddetme veya kaldırılmasını talep etme hakkımız saklıdır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">10.2. Üçüncü Taraf Bağlantıları</h3>
              <p className="mb-4">
                Öğrenio uygulaması, zaman zaman üçüncü taraflara ait web sitelerine veya hizmetlere yönlendiren bağlantılar içerebilir. Bu bağlantılar bilgi, kaynak veya ödeme sistemi gibi nedenlerle eklenmiş olabilir. Ancak bu sitelerin içeriği, güvenliği, güncelliği veya doğruluğu üzerinde hiçbir kontrolümüz bulunmamaktadır.
              </p>
              <p className="mb-4">
                Bu nedenle:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Üçüncü taraf içerikleri, ürünleri veya hizmetleriyle ilgili herhangi bir garanti veremeyiz,</li>
                <li>Bu tür sitelerde yaşanabilecek sorunlar veya veri ihlalleri nedeniyle herhangi bir sorumluluk kabul etmeyiz,</li>
                <li>Herhangi bir işlem yapmadan önce ilgili sitenin gizlilik politikası ve kullanım şartlarını dikkatle okumanızı öneririz.</li>
              </ul>
              <p>
                Üçüncü taraf hizmetlerle ilgili şikayet, soru veya talepler, doğrudan ilgili hizmet sağlayıcısına yöneltilmelidir.
              </p>
            </div>
          </div>

          {/* 11. Cayma Hakkı */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">11. Cayma Hakkı</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio uygulamasında bazı hizmetler, hesap oluşturulduğu veya abonelik ücreti ödendiği anda anında dijital erişim sağlanan içeriklerdir (Bkz: Madde 4).
              </p>
              <p className="mb-4">
                Türkiye'deki kullanıcılar için geçerli olan dijital ürünlerde 14 günlük cayma hakkı, içeriğe anında erişim sağlandığında yasal olarak sınırlandırılabilir.
              </p>
              <p className="mb-4">
                Bu nedenle:
              </p>
              <ul className="list-disc pl-6">
                <li>Hesap oluşturduktan veya ödeme yaptıktan sonra, Öğrenio içeriklerine hemen erişim sağlanır.</li>
                <li>Kullanıcı, bu erişimin başlamasıyla birlikte cayma hakkından feragat ettiğini kabul eder.</li>
                <li>Bu durum, 14 gün içinde cayma hakkının geçerli olmayacağı ve geri ödeme yapılamayacağı anlamına gelir.</li>
              </ul>
            </div>
          </div>

          {/* 12. Fesih */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">12. Fesih</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Bu Kullanım Şartları, siz veya Öğrenio tarafından feshedilene kadar geçerliliğini korur.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">12.1. Kullanıcı Tarafından Fesih</h3>
              <p className="mb-4">
                Uygulamayı artık kullanmak istemiyorsanız, hesabınızı silerek veya bize açıkça bildirimde bulunarak bu Şartları dilediğiniz zaman feshedebilirsiniz. Hesabınızı silmeniz durumunda, o an aktif olan aboneliğiniz faturalama dönemi sonunda sona erer, önceden ödenmiş tutarlar iade edilmez.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">12.2. Öğrenio Tarafından Fesih</h3>
              <p className="mb-4">
                Öğrenio olarak, aşağıdaki durumlarda önceden bildirimde bulunmaksızın hesabınızı askıya alma veya tamamen kapatma hakkımız saklıdır:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Bu Şartların veya yürürlükteki yasaların ihlal edildiğinden makul ölçüde şüphelenmemiz,</li>
                <li>Uygulamada uygunsuz, zararlı veya yasadışı içerik paylaşılması,</li>
                <li>Yanlış veya aldatıcı kullanıcı bilgileriyle kayıt yapılması,</li>
                <li>Sistemlerimize zarar verme, müdahale veya kötüye kullanım teşebbüsleri.</li>
              </ul>
              <p className="mb-4">
                Fesih halinde, uygulamayı kullanma lisansınız otomatik olarak sona erer. Hesabınız devre dışı bırakıldığında, uygulamaya ve içeriğe erişiminiz kısıtlanır ya da sonlandırılır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">12.3. Fesih Sonrası Geçerliliğini Koruyan Maddeler</h3>
              <p className="mb-4">
                Aşağıdaki maddeler, bu Şartların feshedilmesinden sonra da yürürlükte kalır:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Madde 4 (ödenmemiş ücretler için),</li>
                <li>Madde 7 (fikri mülkiyet ve lisans),</li>
                <li>Madde 8 (kullanıcı içerikleri),</li>
                <li>Madde 9 (kısıtlamalar),</li>
                <li>Madde 10 (üçüncü taraf bağlantılar),</li>
                <li>Madde 12-13 (fesih, sorumluluk sınırlamaları).</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">12.4. Kişisel Verilerin Korunması</h3>
              <p>
                Türkiye'deki kullanıcılar için Öğrenio, 2016/679 sayılı GDPR Yönetmeliği uyarınca fesih sonrası tüm kişisel verilerin korunmasına ve dijital içeriklerin 3. şahıslara aktarılmamasına ilişkin yükümlülüklere tam olarak uymayı taahhüt eder.
              </p>
            </div>
          </div>

          {/* 13. Yürürlükteki Hukuk / Yargı Yetkisi */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">13. Yürürlükteki Hukuk / Yargı Yetkisi</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Bu Kullanım Şartları ve varsa uygulanabilir tüm Ek Şartlar, Türkiye Cumhuriyeti Anayasası, Türk Borçlar Kanunu, Türk Ticaret Kanunu, 6502 sayılı Tüketicinin Korunması Hakkında Kanun, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve diğer ilgili Türk mevzuatına tabidir ve bu yasalara göre yorumlanır.
              </p>
              <p className="mb-4">
                Taraflar, işbu Şartlar kapsamındaki her türlü uyuşmazlıkta, İstanbul Merkez Mahkemeleri ve İcra Daireleri'nin münhasır yargı yetkisini kabul eder.
              </p>
              <p className="mb-4">
                Taraflar, ortaya çıkabilecek uyuşmazlıklarda öncelikle dostane çözüm yollarını deneyecek; çözüme ulaşılamaması hâlinde yasal yollara başvurulacaktır.
              </p>
              <p>
                Not: Uygulamanın kullanımı sırasında oluşabilecek hukuki anlaşmazlıklarda, elektronik kayıtlar (e-posta, uygulama içi bildirimler, işlem logları vb.) geçerli ve bağlayıcı delil sayılır.
              </p>
            </div>
          </div>

          {/* 14. Uyuşmazlıkların Çözümü (Tahkim) */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">14. Uyuşmazlıkların Çözümü (Tahkim)</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Taraflar arasında Öğrenio uygulaması ile ilgili doğabilecek her türlü uyuşmazlıkta öncelikle dostane çözüm yolları denenecektir. Taraflardan biri bu yolla çözüme ulaşamazsa, uyuşmazlık Türkiye Cumhuriyeti yasalarına göre, bağımsız bir tahkim kurulu önüne taşınabilir.
              </p>
              <p className="mb-4">
                Tahkim, daha hızlı, maliyetsiz ve mahkemeye göre daha basit bir çözüm yoludur.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">14.1. Tahkim Koşulları</h3>
              <ul className="list-disc pl-6">
                <li>Tahkim süreci yalnızca taraflar arasında bireysel bazda yürütülür.</li>
                <li>Toplu dava (class action), birleşik talepler veya üçüncü taraf adına dava açılması gibi yollar kabul edilmez.</li>
                <li>Tahkim kararı, hem kullanıcı hem Öğrenio açısından nihai ve bağlayıcıdır.</li>
                <li>Tahkim sürecinde alınan kararlar yalnızca ilgili uyuşmazlık için geçerlidir, başka kullanıcılar için emsal teşkil etmez.</li>
                <li>Fikri mülkiyet, telif hakkı, ticari marka vb. konular bu tahkim kapsamında değerlendirilmez, gerektiğinde yasal yollara başvurulur.</li>
              </ul>
            </div>
          </div>

          {/* 15. Ek Yasal Şartlar */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">15. Ek Yasal Şartlar</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">15.1. Toplu veya Temsili Davalardan Feragat</h3>
              <p className="mb-4">
                Öğrenio kullanıcıları, Öğrenio'ya karşı herhangi bir iddiayı yalnızca bireysel olarak ileri sürebilir. Herhangi bir grup davası, birleşik şikâyet ya da temsilî yargılama açma hakkından feragat eder.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">15.2. Garanti ve Sorumluluk Reddi</h3>
              <p className="mb-4">
                Öğrenio, hizmetlerin her zaman:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Kesintisiz,</li>
                <li>Hatasız,</li>
                <li>Tüm cihazlarla uyumlu,</li>
                <li>Belirli bir amaca %100 uygun olacağına dair hiçbir garanti vermez.</li>
              </ul>
              <p>
                Hizmette yaşanabilecek teknik aksaklıklar, erişim sorunları veya gecikmeler kullanıcıya herhangi bir otomatik tazminat hakkı doğurmaz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsOfServicePage; 