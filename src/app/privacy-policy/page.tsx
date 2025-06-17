import React from 'react';
import Container from '@/components/Container';
import { footerDetails } from '@/data/footer';

const PrivacyPolicyPage = () => {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-12 text-center mt-8">Gizlilik Politikası</h1>
        
        <div className="space-y-8">
          {/* 1. Giriş */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary mt-4">1. Giriş</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio, çocukların bireysel öğrenme ihtiyaçlarını desteklemek amacıyla geliştirilen yapay zekâ destekli bir mobil eğitim uygulamasıdır. Uygulama, özellikle özel gereksinimli çocuklar, okul öncesi ve ilkokul 1–3. sınıf düzeyindeki öğrencilerin gelişimini takip etmeyi, yönlendirmeyi ve desteklemeyi amaçlar.
              </p>
              <p className="mb-4">
                Kullanıcılarımızın ve çocuklarının gizliliği bizim için en önemli önceliklerdendir. Bu kapsamda, Öğrenio uygulamasının sahibi olarak biz ("Öğrenio", "biz", "bize", "bizim"), ebeveynler ve yasal vasiler ("Ebeveyn(ler)") aracılığıyla kullanılan tüm Hizmetlerimizin gizlilik ve veri güvenliği konusunda yürürlükteki Türkiye Cumhuriyeti mevzuatına – özellikle 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) – tam uyum içinde çalışmasını sağlarız.
              </p>
              <p>
                Bu Gizlilik Politikası, hangi kişisel verileri topladığımızı, bu verileri nasıl kullandığımızı, kimlerle ne şartlarla paylaştığımızı ve kullanıcıların hangi haklara sahip olduğunu açıklar. Lütfen bu politikayı dikkatlice okuyun. Herhangi bir sorunuz veya talebiniz olması durumunda, bu belgenin sonunda belirtilen iletişim kanalları aracılığıyla bize ulaşabilirsiniz.
              </p>
            </div>
          </div>

          {/* 2. Topladığımız Bilgiler */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. Topladığımız Bilgiler</h2>
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-3">A. Bize Doğrudan Sağladığınız Bilgiler</h3>
              
              <h4 className="text-lg font-semibold mt-4 mb-2">Hesap Oluşturma:</h4>
              <p className="mb-2">Uygulamaya kayıt olurken aşağıdaki bilgileri isteyebiliriz:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ebeveyn e-posta adresi</li>
                <li>(İsteğe bağlı) Takma adı</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Ödeme Bilgileri:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>Ödeme işlemleri Apple ve Google Play ödeme sağlayıcıları üzerinden yürütülür</li>
                <li>Kart bilgileriniz Öğrenio tarafından saklanmaz</li>
                <li>Satın alma geçmişi ve iade taleplerine ilişkin kayıtlar sistemde tutulur</li>
              </ul>

              <h4 className="text-lg font-semibold mt-4 mb-2">Etkileşimli Özellikler:</h4>
              <p className="mb-4">Uygulama içindeki çocuklara özel içerikler herkese açık değildir</p>

              <h4 className="text-lg font-semibold mt-4 mb-2">İletişim Verileri:</h4>
              <p className="mb-4">Destek taleplerinde ya da yarışmalarda ad, soyad ve e-posta alınabilir</p>

              <h4 className="text-lg font-semibold mt-4 mb-2">Etkinlikler ve İş Ortaklıkları:</h4>
              <p className="mb-4">Fuar, seminer, işbirliği gibi süreçlerde verilen kişisel kartvizit vb. bilgiler</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. Otomatik Olarak Toplanan Bilgiler</h3>
              <p className="mb-4">
                Öğrenio mobil uygulaması, kullanıcıdan otomatik olarak herhangi bir kişisel veri toplamamaktadır.
              </p>
              <p className="mb-4">
                Ancak, bazı teknik veriler sistemin çalışmasını iyileştirmek amacıyla cihaz üzerinde geçici olarak işlenebilir, bu veriler tarafımızca kaydedilmez, iletilmez veya sunucularımıza aktarılmaz.
              </p>
              <p className="mb-4">Toplanmayan ancak sistemsel olarak cihazda anlık işlenebilecek örnekler şunlardır:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uygulama içi gezinme ve görev tamamlama gibi kullanıcı etkileşimleri</li>
                <li>Oturum süresi, cihaz modeli, işletim sistemi gibi sistemsel bilgiler</li>
                <li>Yaklaşık konum (yalnızca IP üzerinden şehir seviyesi, ancak tarafımızdan kullanılmaz)</li>
                <li>Çökme raporları, yalnızca cihazın kendi sisteminde oluşur; biz bu raporları almayız</li>
              </ul>
              <p className="mb-4">
                Çerezler ve benzeri tanımlayıcılar yalnızca ogrenio.github.io web sitesinde kullanılabilir. Mobil uygulamada çerez kullanılmamaktadır.
              </p>
              <p>
                Bu bilgiler, cihazınızda lokal olarak çalışır; sunucularımıza gönderilmez ve üçüncü taraflarla paylaşılmaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Üçüncü Taraflardan Alınan Veriler</h3>
              <ul className="list-disc pl-6">
                <li>Apple/Google gibi hizmetlerle giriş yapılırsa; e-posta veya kullanıcı adı gibi temel bilgiler</li>
                <li>Erişime izin verilmişse Firebase/Google Analytics gibi analiz araçları üzerinden kullanıcı etkileşimleri</li>
                <li>Anket/araştırmalarda üçüncü taraf araştırma şirketlerinden izinli kullanıcı verileri alınabilir</li>
              </ul>
            </div>
          </div>

          {/* 3. Verilerinizin İşlenme Amaçları */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. Verilerinizin İşlenme Amaçları</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio'da topladığımız kişisel verileri, uygulamamızı siz ve çocuğunuz için güvenli, verimli ve kişiselleştirilmiş bir şekilde sunmak amacıyla işleriz. Bu kapsamda bilgileriniz, aşağıdaki amaçlarla kullanılabilir:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A. Hizmetleri Sunmak</h3>
              <p className="mb-4">Topladığımız veriler, sizinle olan kullanım sözleşmemizi yerine getirmek ve Öğrenio'nun temel işlevlerini sağlamak amacıyla işlenir:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Hesaplarınızı ve kayıt bilgilerinizi yönetmek</li>
                <li>Uygulamanın ilgili alanlarına erişimi sağlamak</li>
                <li>Çocuğunuzun uygulamadaki ilerlemesini takip ederek size gelişim raporları sunmak</li>
                <li>Geri bildirimlerinize ve destek taleplerinize yanıt vermek</li>
                <li>Hesap aktiviteleri, değişiklikler ve bildirimler hakkında sizinle iletişim kurmak</li>
                <li>Ücretli hizmetlerin sağlanması, ödeme ve iade süreçlerinin yürütülmesi</li>
                <li>Kullanıcı kimliğini doğrulamak ve olası suistimalleri önlemek</li>
                <li>Teknik sorunların tespiti ve düzeltilmesi (hata ayıklama)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. İdari Amaçlar</h3>
              <p className="mb-4">Bazı veriler, uygulamanın genel işleyişi ve kullanıcı güvenliği için idari amaçlarla işlenebilir:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uygulama performansının ve kullanıcı etkileşimlerinin ölçülmesi</li>
                <li>Güvenlik açıklarının tespiti ve kötüye kullanımlara karşı önlem alınması</li>
                <li>Hizmetlerimizin kalite kontrolü, geliştirilmesi ve iyileştirilmesi</li>
                <li>Yeni özelliklerin ve eğitim içeriklerinin geliştirilmesi</li>
                <li>Dolandırıcılık, kötüye kullanım veya yasa dışı kullanımın önlenmesi</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Yasal Yükümlülüklerin Yerine Getirilmesi</h3>
              <p className="mb-4">Kişisel verileriniz, Türkiye Cumhuriyeti yasaları kapsamında yükümlü olduğumuz durumlarda yasal gereklilikleri yerine getirmek amacıyla işlenebilir. Bu kapsamda:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Kayıt ve işlem geçmişlerinin tutulması</li>
                <li>Mevzuata, yargı kararlarına veya resmi makam taleplerine uyum sağlanması</li>
                <li>Yasal haklarımızın korunması ve taleplerin takibi</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">D. Pazarlama ve Tanıtım Faaliyetleri</h3>
              <p className="mb-4">
                Öğrenio, çocuklara yönelik uygulama bölümlerinde hiçbir reklam veya pazarlama yapmaz. Ancak yetişkin kullanıcılar (ebeveynler) için aşağıdaki tanıtım faaliyetleri yürütülebilir:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>E-posta, uygulama içi bildirim veya anlık mesaj yoluyla kampanya ve yeniliklerin duyurulması</li>
                <li>Belirli kullanıcı davranışlarına göre kişiselleştirilmiş tekliflerin sunulması</li>
                <li>Uygulamanın kullanımına dair analizlerin yapılması ve bu analizlere göre tanıtım içeriklerinin şekillendirilmesi</li>
                <li>Üçüncü taraf reklam veya analiz sağlayıcılar aracılığıyla yalnızca yetişkin kullanıcıya özel kampanyaların ölçümlenmesi</li>
              </ul>
              <p className="mb-4">
                Not: Öğrenio, reklam veya tanıtım amacıyla çocuklara ait hiçbir kişisel veriyi kullanmaz veya paylaşmaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">E. Açık Onayınızla Kullanım</h3>
              <p className="mb-4">
                Yukarıda belirtilen durumlar dışında, size ait kişisel veriler yalnızca açık rızanızla ve size bildirilen ek amaçlar için işlenebilir. Örneğin:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Gönüllü anket veya kullanıcı testlerine katılım</li>
                <li>Eğitim araştırmaları kapsamında geri bildirim verilmesi</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">F. Diğer Meşru Kullanımlar</h3>
              <p className="mb-4">
                Yürürlükteki yasalara uygun olduğu sürece, verileriniz aşağıdaki gibi ek amaçlarla da kullanılabilir:
              </p>
              <ul className="list-disc pl-6">
                <li>Kullanıcı verilerinden kimlik bilgisi çıkarılarak oluşturulan istatistiksel raporlar</li>
                <li>Yeni özelliklerin planlanması için toplu kullanıcı davranışlarının analiz edilmesi</li>
              </ul>
            </div>
          </div>

          {/* 4. Çocukların Gizliliği */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. Çocukların Gizliliği</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio olarak çocukların kişisel verilerinin özel koruma altında olması gerektiğine inanıyoruz. Bu nedenle uygulamamız, çocukların gizliliğini korumak üzere ebeveyn ve yasal vasilerin kontrolünde çalışacak şekilde tasarlanmıştır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A. Hesap Oluşturma ve Bilgi Toplama</h3>
              <p className="mb-4">
                Öğrenio'da bir çocuk için profil oluşturulması için, bir yetişkin (ebeveyn veya veli) uygulamaya kayıt olur. Yetişkin kullanıcı, çocuğu adına profili oluştururken aşağıdaki bilgileri isteğe bağlı olarak sağlayabilir:
              </p>
              <p className="mb-4">
                Bu bilgiler, uygulama içeriğini yaşa ve ilgi alanlarına göre özelleştirmek için kullanılır.
              </p>
              <p className="mb-4">
                Uygulama içerisindeki eğitim faaliyetlerinde, çocuğun katılımını sağlamak amacıyla yalnızca gerekli ve sınırlı düzeyde veri toplanır. Çocuğun uygulamayı kullanması, makul ölçünün ötesinde herhangi bir kişisel bilgi vermesine bağlı değildir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. Toplanan Bilgilerin Kullanımı</h3>
              <p className="mb-4">Çocuğa ait veriler aşağıdaki amaçlarla kullanılabilir:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Uygulama içeriğini çocuğun yaşına ve ilgi alanlarına göre kişiselleştirmek</li>
                <li>Oynanan oyunlar, yapılan etkinlikler ve genel kullanım alışkanlıkları üzerinden çocuğun öğrenme sürecini analiz etmek</li>
                <li>Yapay zekâ yardımıyla ebeveyne sunulan gelişim raporları hazırlamak</li>
                <li>Uygulama performansını değerlendirmek ve çocuğun gelişimini destekleyecek içerikleri planlamak</li>
                <li>Arayüz veya içerik tercihlerini hatırlayarak kullanıcı deneyimini iyileştirmek</li>
              </ul>
              <p className="mb-4">
                Not: Çocuğun verilerinin bu şekilde analiz edilmesine her zaman itiraz edebilir ve tarafımıza başvurarak bu verilerin kullanımını durdurabilirsiniz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Çocukların Bilgilerinin Paylaşımı</h3>
              <p className="mb-4">
                Çocuklara ait kişisel bilgiler, aşağıdaki durumlar dışında hiçbir şekilde üçüncü taraflara satılmaz, kiralanmaz veya paylaşılmaz:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Ebeveyn, uygulama üzerinden başarı gibi içerikleri paylaşmayı seçtiğinde, güvenli bağlantılar aracılığıyla paylaşım yapılabilir</li>
                <li>Kimlik bilgisi içermeyen toplu istatistiksel veriler açıklanabilir</li>
                <li>Verilerin işlenmesinde bize hizmet sağlayan, gizlilik yükümlülüğü altındaki teknoloji firmalarına, yalnızca gerekli operasyonel amaçlarla aktarım yapılabilir</li>
                <li>Mahkeme kararı, yasal yükümlülük veya resmi makam talebi üzerine gerekli bilgiler yetkili kurumlarla paylaşılabilir</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">D. Erişim, Düzeltme ve Silme Hakları</h3>
              <p className="mb-4">
                Bir ebeveyn olarak, çocuğunuza ait tüm kişisel bilgilere erişme, bu bilgileri düzeltme ya da silinmesini talep etme hakkınız vardır. Ayrıca çocuğunuzun bilgilerinin işlenmesine onay vermeyi durdurabilir veya reddedebilirsiniz.
              </p>
              <p className="mb-4">
                Bu talepleriniz için bize şu iletişim kanallarından ulaşabilirsiniz:
              </p>
              <p className="mb-4">
                E-posta: ogrenioapp@gmail.com
              </p>
              <p className="mb-4">
                Gizliliğinizi korumak amacıyla talebin size ait olduğunu doğrulamak için kimlik doğrulama adımları uygulayabiliriz.
              </p>
              <p>
                Yanlışlıkla bir çocuktan rıza olmadan bilgi topladığımızı fark edersek, bu bilgileri derhal siler ve ilgili hesabı pasif hâle getiririz.
              </p>
            </div>
          </div>

          {/* 5. Topladığımız Bilgileri Nasıl Paylaşıyoruz */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. Topladığımız Bilgileri Nasıl Paylaşıyoruz</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio olarak hiçbir kişisel veriyi üçüncü taraflara satmıyor, kiralamıyor veya ticari kazanç amacıyla devretmiyoruz.
                Topladığımız veriler yalnızca yasal zorunluluklar ve hizmetin sağlanması için gerekli olan sınırlar çerçevesinde ve güvenli şekilde paylaşılmaktadır.
              </p>
              <p className="mb-4">
                Çocuklara ait bilgilerin paylaşımı ile ilgili ayrıntılar için lütfen Bölüm 4 – Çocukların Gizliliği kısmına bakınız.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">A. Hizmet Sağlayıcılar</h3>
              <p className="mb-4">
                Uygulamanın altyapısını sağlamak, hizmetleri sunmak ve kullanıcı deneyimini iyileştirmek amacıyla sınırlı sayıda güvenilir hizmet sağlayıcıyla çalışmaktayız. Bu firmalar örneğin:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Sunucu barındırma (bulut sistemleri),</li>
                <li>Ödeme hizmetleri (Apple, Google),</li>
                <li>E-posta bildirim altyapısı,</li>
                <li>Uygulama performans analizi ve hata izleme sistemleri gibi alanlarda destek sağlamaktadır.</li>
              </ul>
              <p>
                Bu taraflarla yapılan sözleşmeler kapsamında, paylaşılan veriler yalnızca hizmetin sunulması amacıyla kullanılmakta; başka herhangi bir amaçla kullanılması, saklanması veya paylaşılması kesin olarak yasaklanmaktadır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">B. İş Ortakları</h3>
              <p className="mb-4">
                Kullanıcı talebi doğrultusunda sunulan bir ürün veya hizmetin sağlanabilmesi için, gerekli olduğu ölçüde sınırlı bilgi iş ortaklarımızla paylaşılabilir.
                Örneğin, Apple üzerinden yapılan bir abonelik için ödeme veya iade sürecinde gerekli bilgiler Apple ile paylaşılabilir.
              </p>
              <p>
                Çocuklara ait bilgiler iş ortaklarıyla kesinlikle paylaşılmaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">C. Pazarlama ve Reklam Amaçlı Paylaşımlar (Yalnızca Yetişkin Kullanıcılar İçin)</h3>
              <p className="mb-4">
                Yetişkin kullanıcılarla ilgili olarak, uygulamanın tanıtımına yönelik pazarlama faaliyetleri kapsamında bazı veriler reklam iş ortaklarımızla paylaşılabilir. Bu bilgiler:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Cihaz tipi ve işletim sistemi,</li>
                <li>Uygulamanın indirilip indirilmediği gibi sınırlı teknik verilerden oluşur.</li>
              </ul>
              <p className="mb-4">
                Bu paylaşımlar yalnızca yasal dayanaklar (açık rıza, meşru menfaat vb.) doğrultusunda gerçekleştirilir.
                Uygulamanın çocuklara yönelik özelliklerinden elde edilen hiçbir veri reklam amaçlı olarak paylaşılmaz veya kullanılmaz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">D. Yasal Yükümlülükler Kapsamında Paylaşımlar</h3>
              <p className="mb-4">
                Mevzuat gereği aşağıdaki durumlarda kişisel veriler yetkili mercilerle paylaşılabilir:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Yasal yükümlülüklerin yerine getirilmesi,</li>
                <li>Mahkeme kararları, savcılık talepleri veya kolluk kuvvetlerinin resmi talepleri,</li>
                <li>Dolandırıcılık, güvenlik ihlali veya yasa dışı kullanım gibi olayların soruşturulması.</li>
              </ul>
              <p>
                Bu tür paylaşımlar yalnızca ilgili yasal dayanak kapsamında ve gerekli olan ölçüde yapılır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">E. Kurumsal İşlemler Durumunda Paylaşımlar</h3>
              <p className="mb-4">
                Öğrenio'nun bir başka tüzel kişiliğe devredilmesi, birleşme, satın alma, yeniden yapılanma veya tasfiye gibi işlemler söz konusu olursa, kullanıcı verileri bu işlemlerin bir parçası olarak devredilebilir.
                Böyle bir durumda, veri sahipleri açık şekilde bilgilendirilir ve mevcut yasal haklarını kullanmaları sağlanır.
              </p>
            </div>
          </div>

          {/* 6. Verilerinizin Saklanması */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. Verilerinizin Saklanması</h2>
            <div className="prose max-w-none">
              <p>
                Size Hizmetlerimizi sunmak için ihtiyaç duyduğumuz süre boyunca bilgilerinizi saklayacağız ve bundan sonra yasal yükümlülüklerimize uymak, anlaşmazlıkları çözmek ve sözleşmelerimizi uygulamak için gerekli olduğu sürece ve yasal işlemler için zamanaşımı süresi boyunca saklayacağız.
              </p>
            </div>
          </div>

          {/* 7. Verilerinizin Güvenliği */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">7. Verilerinizin Güvenliği</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Kişisel verilerinizin gizliliğini ve bütünlüğünü korumak amacıyla, yetkisiz erişim, değiştirme, kayıp ya da izinsiz işlem risklerini önlemeye yönelik uygun teknik ve idari güvenlik önlemleri uyguluyoruz.
              </p>
              <p className="mb-4">
                Ancak tüm çabamıza rağmen, hiçbir dijital sistem veya internet iletimi %100 güvenli değildir. Bu nedenle, yetkisiz erişim, veri kaybı, sistem ihlali veya diğer güvenlik olaylarının kesinlikle yaşanmayacağını garanti edemeyiz.
                Yürürlükteki yasal düzenlemeler kapsamında izin verilen ölçüde, kişisel verilerinizin yetkisiz erişim, kullanım veya kaybından doğabilecek sonuçlara dair herhangi bir sorumluluk üstlenmeyebiliriz.
              </p>
              <p className="mb-4">
                Öğrenio'yu kullanarak ya da bize kişisel bilginizi sağlayarak, kanunen izin verildiği sürece; güvenlik, gizlilik ve diğer idari konularla ilgili sizinle elektronik ortamda iletişime geçebileceğimizi kabul etmiş olursunuz.
              </p>
              <p>
                Olası bir veri güvenliği ihlali durumunda, sizi bilgilendirmek için uygulama içi bildirimler, e-posta veya web sitemiz üzerinden gerekli açıklamaları yaparız.
              </p>
            </div>
          </div>

          {/* 8. Seçimleriniz ve Haklarınız */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">8. Seçimleriniz ve Haklarınız</h2>
            <div className="prose max-w-none">
              <p className="mb-4">
                Öğrenio kullanıcıları olarak kişisel verileriniz üzerinde yasal haklara sahipsiniz. Aşağıda, bu hakları nasıl kullanabileceğinize ve bize nasıl ulaşabileceğinize dair bilgiler yer almaktadır.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Hesap Bilgileriniz</h3>
              <p className="mb-4">
                Öğrenio hesabınıza giriş yaparak ya da bize destek@ogrenio.com adresinden e-posta göndererek hesabınıza ait bilgileri dilediğiniz zaman inceleyebilir, güncelleyebilir veya düzeltilmesini talep edebilirsiniz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">E-posta ve Bildirim Tercihleri</h3>
              <p className="mb-4">
                Size gönderdiğimiz bilgilendirme veya tanıtım e-postalarını almak istemiyorsanız, bu iletilerde yer alan bağlantılardan abonelikten çıkabilir ya da bizimle iletişime geçerek tercihinizi bildirebilirsiniz.
                Bu tür bildirimleri durdurmanız, size uygulama kullanımıyla ilgili önemli bilgilerin (örneğin güvenlik bildirimleri veya hesap işlemleri) iletilmesini engellemez.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Takip Tercihleri (DNT / GPC)</h3>
              <p className="mb-4">
                Bazı tarayıcılar, "İzlenmek İstemiyorum" (Do Not Track – DNT) veya Küresel Gizlilik Kontrolü (Global Privacy Control – GPC) gibi gizlilik tercihlerini desteklemektedir. Öğrenio, DNT sinyallerine yanıt vermemektedir. Ancak, GPC aracılığıyla yapılan geçerli devre dışı bırakma taleplerine, teknik olarak mümkün olan ölçüde saygı gösteririz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">KVKK Kapsamındaki Haklarınız</h3>
              <p className="mb-4">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>Kişisel verilerinize erişim ve bunların bir kopyasını talep etme,</li>
                <li>Yanlış veya eksik verilerin düzeltilmesini isteme,</li>
                <li>Gerekli şartlar oluştuğunda kişisel verilerin silinmesini veya anonimleştirilmesini talep etme,</li>
                <li>Verilerin yurt içi veya yurt dışındaki üçüncü taraflara aktarılmış olması durumunda, bu tarafların da bilgilendirilmesini isteme,</li>
                <li>Kişisel verilerinizin otomatik sistemler ile analiz edilerek aleyhinize bir sonucun doğmasına itiraz etme,</li>
                <li>Daha önce verdiğiniz onayı geri çekme (geri çekme yalnızca ileriye dönük işlemleri kapsar)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Başvuru ve İletişim</h3>
              <p className="mb-4">
                Yukarıdaki haklardan herhangi birini kullanmak için bize aşağıdaki kanallardan ulaşabilirsiniz:
              </p>
              <p className="mb-4">
                📧 E-posta: ogrenioapp@gmail.com
              </p>
              <p className="mb-4">
                Başvurunuzu değerlendirmeden önce kimliğinizi doğrulamak amacıyla ek bilgi talep edebiliriz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Yetkili Temsilci Aracılığıyla Başvuru</h3>
              <p className="mb-4">
                Haklarınızı sizin adınıza kullanacak bir temsilci belirlemek isterseniz, temsilciye bu konuda yazılı ve imzalı bir yetki belgesi (vekaletname vb.) sunmanız gerekir. Ayrıca, temsilcinin talebi işleme alınmadan önce sizinle kimlik doğrulaması amacıyla iletişime geçilebilir.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Denetim Makamına Şikâyet Hakkı</h3>
              <p className="mb-4">
                KVKK kapsamındaki haklarınızın ihlal edildiğini düşünüyorsanız, Türkiye'de Kişisel Verileri Koruma Kurumu'na (KVKK) şikâyette bulunabilirsiniz. Detaylı bilgiye https://www.kvkk.gov.tr adresinden ulaşabilirsiniz.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Hedefli Reklamlar ve Kişisel Veri Satışı Hakkında</h3>
              <p className="mb-4">
                Öğrenio, kişisel verileri hiçbir koşulda satmaz. Ayrıca çocuklara yönelik uygulama içi reklamlara yer verilmez.
                Yalnızca yetişkin kullanıcıların pazarlama tercihlerine bağlı olarak yürütülen reklam faaliyetleri, yasal düzenlemelere ve rıza esasına dayalı olarak gerçekleştirilir.
              </p>
              <p>
                Hedefli reklamları devre dışı bırakmak veya bu konuyla ilgili bilgi almak isterseniz bizimle iletişime geçebilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicyPage; 