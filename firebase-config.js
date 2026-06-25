// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration derived from your console credentials
const firebaseConfig = {
  apiKey: "AIzaSyBSZ85nFiFXbFXydWCFSXoje_jJBMKHn_w",
  authDomain: "gmed-web.firebaseapp.com",
  projectId: "gmed-web",
  storageBucket: "gmed-web.firebasestorage.app",
  messagingSenderId: "1046815257755",
  appId: "1:1046815257755:web:4f53ac8c7b3f2da40d023e",
  measurementId: "G-XB4W78PZ7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export all authentication and database modules for your HTML pages
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