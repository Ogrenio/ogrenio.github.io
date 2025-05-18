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

Manuel dağıtım:

```bash
npm run build
npm run deploy
```

## Notlar

- Firebase kimlik doğrulama ve Firestore veritabanı kullanılmaktadır
- Next.js statik site oluşturma (SSG) kullanılmaktadır
- Geliştirme için doğru Firebase yapılandırmasına ihtiyacınız vardır