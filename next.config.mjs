/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'out',  
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true,
  },
  env: {
    // Firebase config for static build
    NEXT_PUBLIC_FIREBASE_API_KEY: 'dummy-api-key-for-static-build',
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: 'dummy-domain.firebaseapp.com',
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'dummy-project',
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: 'dummy-bucket.appspot.com',
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: '123456789',
    NEXT_PUBLIC_FIREBASE_APP_ID: '1:123456789:web:abc123',
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: 'G-ABC123'
  }
};

export default nextConfig;
