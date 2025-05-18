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

// Tarayıcı ortamında ve sunucu tarafı oluşturma sırasında Firebase'in başlatılma şeklini kontrol eden değişken
const isBrowser = typeof window !== 'undefined';

// Lazy initialize
let app: FirebaseApp | undefined = undefined;
let db: any = undefined;
let auth: any = undefined;

// İstemci tarafında ve yalnızca bir kez başlat
if (isBrowser && !app && firebaseConfig.apiKey !== 'dummy-api-key-for-static-build') {
  const apps = getApps();
  app = apps.length ? apps[0] : initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}

export { auth, db };
