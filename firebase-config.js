// I-import ang Firebase SDKs nga gikinahanglan gikan sa CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Imong tinuod nga Firebase credentials gikan sa screenshot
const firebaseConfig = {
  apiKey: "AIzaSyBSZ85nFiFXbFXydWCFSXoje_jJBMKHn_w",
  authDomain: "gmed-web.firebaseapp.com",
  projectId: "gmed-web",
  storageBucket: "gmed-web.firebasestorage.app",
  messagingSenderId: "1046815257755",
  appId: "1:1046815257755:web:4f53ac8c7b3f2da40d023e",
  measurementId: "G-XB4W78PZ7R"
};

// I-initialize ang Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// I-export kini para magamit sa ubang files
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, doc, setDoc, getDoc };