import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // for filr store data base
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcVE75cyDCZt06X4jlsc_8Lxm4iSxugZE",
  authDomain: "first-app-676ee.firebaseapp.com",
  projectId: "first-app-676ee",
  storageBucket: "first-app-676ee.appspot.com",
  messagingSenderId: "227251368471",
  appId: "1:227251368471:web:61b9040227a129457b2252",
  measurementId: "G-4GB9KX5CN0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Database connection eka ------
export const db = getFirestore(app);

// File Storage ek -----
export const storage = getStorage(app);
