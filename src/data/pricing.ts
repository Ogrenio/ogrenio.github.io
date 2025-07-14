import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: 'Temel',
    price: 0,
    features: [
      'Temel yapay zekâ destekli etkinlikler',
      '1 kullanıcı',
      'Eğitim materyalleri ve rehberler',
      'E-posta destek',
    ],
  },
  {
    name: 'Profesyonel',
    price: 59,
    features: [
      'İleri düzey yapay zekâ analizi',
      '5 kullanıcıya kadar',
      'Özel eğitim içerikleri',
      'Öncelikli e-posta & telefon desteği',
      'Gelişmiş raporlama ve analiz',
    ],
  },
  {
    name: 'Kurumsal',
    price: 'Özel',
    features: [
      'Özelleştirilmiş yapay zekâ çözümleri',
      'Sınırsız kullanıcı',
      'Sınırsız eğitim materyali ve içerik',
      '7/24 özel destek',
      'Özel çözümler ve entegrasyonlar',
      'Yerinde eğitim',
    ],
  },
];
