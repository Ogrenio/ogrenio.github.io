// firebase-config.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Tarayıcı ortamında çalışıyoruz mu?
const isBrowser = typeof window !== 'undefined';

// Lazy initialize
let app: FirebaseApp | undefined = undefined;
let db: any = undefined;
let auth: any = undefined;

// İstemci tarafında Firebase'i başlat
if (isBrowser && !app) {
  try {
    // Yapılandırma değerlerini kontrol et
    const missingConfigs = Object.entries(firebaseConfig)
      .filter(([_, value]) => !value)
      .map(([key]) => key);
    
    if (missingConfigs.length > 0) {
      throw new Error(`Missing Firebase configuration values`);
    }

    const apps = getApps();
    app = apps.length ? apps[0] : initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
    // Hata durumunda undefined döndür
    app = undefined;
    db = undefined;
    auth = undefined;
  }
}

export { auth, db };
