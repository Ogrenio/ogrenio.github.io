import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Mehmet Yılmaz',
        role: 'Öğretmen',
        message: `${siteDetails.siteName} sayesinde öğrencilerimin gelişimini daha doğru bir şekilde takip edebiliyorum. Uygulamanın sunduğu kişisel analizler ve öneriler, her öğrencinin öğrenme sürecine göre özelleştirilmiş bir eğitim deneyimi sunuyor.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Ayşe Kaya',
        role: 'Ebeveyn',
        message: `Öğrenio, çocuğumun gelişimini takip etmek için mükemmel bir araç. Uygulama, onun güçlü yanlarını ve gelişim alanlarını anlamama yardımcı oldu. Ayrıca öğretmenlerle iletişimim de çok kolaylaştı.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Ahmet Demir',
        role: 'Okul Müdürü',
        message: `${siteDetails.siteName}, okulda öğretim sürecini daha verimli hale getirmemizi sağladı. Uygulamanın sağladığı detaylı raporlar ve öneriler sayesinde öğretmenlerimizin öğrencileri daha iyi değerlendirmesine yardımcı oluyor.`,
        avatar: '/images/testimonial-3.webp',
    },
];
