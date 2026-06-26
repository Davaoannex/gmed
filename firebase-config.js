// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Bag-ong configuration gamit ang bag-ong gihimo nga Google Cloud API Key
const firebaseConfig = {
  apiKey: "IBUTANG_DIRI_ANG_BAG-ONG_GOOGLE_CLOUD_API_KEY", 
  authDomain: "gmed-web.firebaseapp.com",
  projectId: "gmed-web",
  storageBucket: "gmed-web.firebasestorage.app",
  messagingSenderId: "1046815257755",
  appId: "1:1046815257755:web:18ba8fa65caff3260d023e",
  measurementId: "G-M0WV44F3TC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
  auth, 
  db, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  doc, 
  setDoc, 
  getDoc 
};
