import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbkoAWfOgcPGGX6nye9aFIPvUOBIsQ6DA",
  authDomain: "harsh-portfolio-74ab3.firebaseapp.com",
  projectId: "harsh-portfolio-74ab3",
  storageBucket: "harsh-portfolio-74ab3.firebasestorage.app",
  messagingSenderId: "1059177738954",
  appId: "1:1059177738954:web:4c613818cf4460a302fa33",
  measurementId: "G-NFDTSPM7B2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);