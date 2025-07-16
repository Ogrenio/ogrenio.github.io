// firebase-config.ts
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

// Sadece client-side'da ve daha önce initialize edilmemişse
if (typeof window !== 'undefined' && !getApps().length) {
  // Tüm required config değerlerinin mevcut olduğunu kontrol et
  const isConfigValid = Object.values(firebaseConfig).every(
    (value) => value !== undefined && value !== ''
  );

  if (!isConfigValid) {
    console.error('Firebase config is missing or incomplete');
  } else {
    try {
      app = initializeApp(firebaseConfig);
      db = getFirestore(app);
      auth = getAuth(app);
    } catch (error) {
      console.error('Firebase initialization error', error);
    }
  }
}

export { auth, db };