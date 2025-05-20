const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build işlemini başlat
console.log('Building the project...');
execSync('npm run build', { stdio: 'inherit' });

// out/index.html dosyasını kontrol et
const indexPath = path.join(__dirname, '../out/index.html');

// Dosya var mı kontrol et
if (fs.existsSync(indexPath)) {
  console.log('index.html found, injecting Firebase config...');
  
  // Dosyayı oku
  let indexContent = fs.readFileSync(indexPath, 'utf8');

  // Firebase yapılandırma değişkenlerini ekle
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
  };

  // Yapılandırmayı HTML'e ekle
  const configScript = `
<script>
window.FIREBASE_CONFIG = ${JSON.stringify(firebaseConfig)};
</script>
`;

  // Script'i head etiketinin içine ekle
  indexContent = indexContent.replace('</head>', `${configScript}</head>`);

  // Değişiklikleri kaydet
  fs.writeFileSync(indexPath, indexContent);
  
  console.log('Firebase config injected successfully!');
} else {
  console.log('Warning: index.html file not found. Skipping Firebase config injection.');
  // Klasör yapısını kontrol et
  console.log('Checking build output directory structure:');
  if (fs.existsSync(path.join(__dirname, '../out'))) {
    console.log('out directory exists, listing contents:');
    try {
      const files = fs.readdirSync(path.join(__dirname, '../out'));
      console.log(files);
    } catch (err) {
      console.error('Error reading directory:', err);
    }
  } else {
    console.log('out directory does not exist');
  }
}

console.log('Build completed successfully!'); 