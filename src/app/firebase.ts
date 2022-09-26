// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  doc,
  limit,
  query,
  setDoc,
  getDoc,
  addDoc,
  orderBy,
  getDocs,
  updateDoc,
  collection,
  arrayUnion,
  startAfter,
  arrayRemove,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import type { Firestore } from 'firebase/firestore';
import type { FirebaseApp } from '@firebase/app-types';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCb3veu1RVQMBJdSOEKiHXiR1IwgWpkT94',
  authDomain: 'coach-c6c88.firebaseapp.com',
  projectId: 'coach-c6c88',
  storageBucket: 'coach-c6c88.appspot.com',
  messagingSenderId: '660099738286',
  appId: '1:660099738286:web:89b3945c18eb7a62cadb3f',
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const provider: GoogleAuthProvider = new GoogleAuthProvider();
const db: Firestore = getFirestore(app);

export {
  db,
  doc,
  auth,
  limit,
  query,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  orderBy,
  signOut,
  provider,
  updateDoc,
  collection,
  startAfter,
  arrayUnion,
  arrayRemove,
  getFirestore,
  serverTimestamp,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
};
