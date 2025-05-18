/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'out',  
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  // Tarayıcı ortamı için geçici yardımcı değişkenler
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: 'dummy-api-key-for-static-build',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'dummy-domain.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'dummy-project',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'dummy-bucket.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '123456789',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:123456789:web:abc123',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-ABC123',
    // Metadatabase URL
    NEXT_PUBLIC_METADATA_BASE_URL: 'https://ogrenio.github.io'
  }
};

export default nextConfig;
