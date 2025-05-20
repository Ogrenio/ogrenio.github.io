import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
  {
    question: `${siteDetails.siteName} güvenli mi?`,
    answer: 'Kesinlikle. Öğrenio, verilerinizi korumak için endüstri standardı şifreleme kullanır ve giriş bilgilerinizi asla saklamaz. Ayrıca, biyometrik kimlik doğrulama ile ekstra bir güvenlik katmanı sağlar.',
  },
  {
    question: `${siteDetails.siteName}'ı birden fazla cihazda kullanabilir miyim?`,
    answer: 'Elbette! Öğrenio hesabınız, akıllı telefon, tablet ve bilgisayar gibi tüm cihazlarınız arasında sorunsuz şekilde senkronize olur.',
  },
  {
    question: 'Öğrencilerin performans verilerini nasıl takip edebilirim?',
    answer: `Öğrenio, öğrenci performansını detaylı bir şekilde takip etmenizi sağlar. Her öğrencinin ödev sonuçları, başarı düzeyleri ve gelişim raporları gerçek zamanlı olarak görüntülenebilir.`,
  },
  {
    question: `${siteDetails.siteName}'ın yapay zekâ destekli analiz özelliklerini kullanmak için teknik bilgiye ihtiyacım var mı?`,
    answer: "Hayır, hiç gerek yok! Öğrenio'nun rehberli arayüzü ve ayrıntılı eğitim materyalleri sayesinde herkes rahatlıkla kullanabilir.",
  },
  {
    question: 'Yardım veya destek alabileceğim bir kanal var mı?',
    answer: 'Evet! 7/24 canlı destek ekibimizle iletişime geçebilir, uygulama içi rehberlere veya kapsamlı bilgi tabanımıza her zaman erişebilirsiniz.',
  },
  {
    question: 'Hesabımı nasıl silebilirim?',
    answer: 'Öğrenio uygulamasında kullanıcılar hesaplarını uygulama içinden kolayca silebilirler. <a href="/account-info" className="text-secondary hover:underline font-medium">Detaylar için tıklayınız</a>',
  },
];
