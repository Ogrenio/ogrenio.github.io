# Öğrenio - Eğitim Platformu

Öğrenio ile eğitimde yeni bir dönem başlıyor. Bu proje, öğrenciler ve öğretmenler arasında etkileşimi artırmak için tasarlanmış bir eğitim platformudur.

## Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

## Dağıtım

Bu proje GitHub Pages üzerine dağıtılmak üzere yapılandırılmıştır. `main` branch'ine yapılan her commit otomatik olarak GitHub Actions tarafından dağıtılır.

Manüel dağıtım:

```bash
npm run build
npm run deploy
```

## Firebase'i GitHub Pages'te Çalıştırma

Firebase kimlik doğrulaması ve Firestore'u GitHub Pages'te çalıştırmak için aşağıdaki adımları izleyin:

1. GitHub reponuzda, "Settings" > "Secrets and variables" > "Actions" bölümüne gidin

2. Aşağıdaki gizli değişkenleri ekleyin:
   - `FIREBASE_API_KEY`: Firebase konsolundan alınan API anahtarı
   - `FIREBASE_AUTH_DOMAIN`: Örnek: your-project.firebaseapp.com
   - `FIREBASE_PROJECT_ID`: Firebase proje ID'si
   - `FIREBASE_STORAGE_BUCKET`: Örnek: your-project.appspot.com
   - `FIREBASE_MESSAGING_SENDER_ID`: Firebase mesajlaşma gönderen ID'si
   - `FIREBASE_APP_ID`: Firebase uygulama ID'si
   - `FIREBASE_MEASUREMENT_ID`: Google Analytics ölçüm ID'si (G-XXXXXXXX)

3. Bu gizli değişkenler, GitHub Actions tarafından build aşamasında kullanılacak ve Firebase kimlik doğrulamanızın canlı sitede çalışmasını sağlayacaktır.

## Notlar

- Firebase kimlik doğrulama ve Firestore veritabanı kullanılmaktadır
- Next.js statik site oluşturma (SSG) kullanılmaktadır
- Geliştirme için doğru Firebase yapılandırmasına ihtiyacınız vardır