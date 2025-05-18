import { FiBarChart2, FiCheckCircle,FiUserCheck, FiTarget, FiTrendingUp, FiHeadphones, FiImage, FiDroplet, FiPlayCircle } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Başarıya Giden Yol",
description: "Öğrenciler için özel olarak tasarlanmış bu ana sayfa, eğitim yolculuğunuzu daha verimli hale getirecek tüm araçları tek bir yerde toplar. Her adımda size rehberlik eder ve başarıya ulaşmanızı sağlar.",
bullets: [
    {
        title: "Ödev Takibi",
        description: "Tüm bekleyen ödevlerinizi kolayca görün ve zamanında tamamlayın.",
        icon: <FiBarChart2 size={26} />
    },
    {
        title: "Grafikler ve Analiz",
        description: "Performansınızı grafiklerle takip edin ve gelişiminizi görsel olarak analiz edin.",
        icon: <FiTarget size={26} />
    },
    {
        title: "Etkililik ve Etkileşim",
        description: "Öğrenme süreçlerinizi daha etkili hale getiren etkinliklere kolayca erişin.",
        icon: <FiTrendingUp size={26} />
    }
],

        imageSrc: "/images/7.png"
    },
    {
        title: "Eğlenceli Etkinlikler ve Oyunlar",
        description: "Çocukların gelişimini destekleyen eğitici oyunlar ve etkinliklerle dolu bir dünyaya adım atın. Her aktivite, eğlenceli bir şekilde öğrenmeyi teşvik eder ve becerileri geliştirir.",
        bullets: [
            {
                title: "Görsel Hafıza Oyunu",
                description: "Hafıza becerilerini geliştirmek için görsel eşleştirme oyunu.",
                icon: <FiImage size={26} />
            },
            {
                title: "Renk Simyacısı",
                description: "Renkleri tanıma ve karıştırma yoluyla yaratıcılığı keşfedin.",
                icon: <FiDroplet size={26} />
            },
            {
                title: "Refleks Geliştirme",
                description: "Hızlı tepki vererek reflekslerinizi geliştirin.",
                icon: <FiPlayCircle size={26} />
            },
            {
                title: "Dinle ve Anla",
                description: "Dinleme ve anlama becerilerini güçlendiren eğitici bir etkinlik.",
                icon: <FiHeadphones size={26} />
            }
        ],
        
        
        imageSrc: "/images/10.png"
    },
    {
        title: "Öğretmen Sınıf Yönetimi",
        description: "Öğrencilerin eğitim yolculuğunda adım adım ilerlemelerini izleyin. Bu gelişim raporu sayfası, her öğrencinin yaptığı ödevleri ve elde ettiği başarıyı görselleştirerek öğrenmelerini destekler.",
        bullets: [
            {
                title: "Ödev Takibi",
                description: "Öğrencinin tamamladığı ve bekleyen ödevlerini takip edin. Her adımda ne kadar ilerlediğini görün.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "Öğrenci Performans Takibi",
                description: "Öğrencinin genel performansını takip edin ve gelişim alanlarını belirleyin. Her öğrencinin güçlü olduğu ve yardıma ihtiyaç duyduğu alanları görün.",
                icon: <FiTrendingUp size={26} />
            },
            
            {
                title: "Bireysel Gelişim",
                description: "Öğrencinin gelişim raporlarına göre kişiselleştirilmiş önerilerle öğrenme sürecini iyileştirin ve hedeflere odaklanın.",
                icon: <FiUserCheck size={26} />
            }
        ],
        
        imageSrc: "/images/5.png"
    },
    {
        title: "Oyun Performans Analizi",
        description: "Öğrencilerin oyunlardaki performansını yapay zeka destekli analizlerle değerlendiriyoruz. Her oyunda güçlü ve zayıf yönlerini keşfedin ve gelişim sürecini takip edin.",
        bullets: [
            {
                title: "Performans Kümelemesi",
                description: "Yapay zeka, öğrencilerin oyunlardaki istatistiklerini analiz ederek hangi oyunlarda iyi, orta veya zayıf olduklarını belirler.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Gelişim Takibi",
                description: "Öğrencilerin hangi alanlarda gelişme gösterdiğini ve hangi oyunlarda ekstra çalışması gerektiğini görselleştirir.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Kişisel Yönlendirmeler",
                description: "Yapay zeka, öğrenciye özel oyun önerileri sunarak gelişim sürecinde yardımcı olur ve her oyun sonrası gelişim raporları oluşturur.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        
        imageSrc: "/images/3.png"
    },
]