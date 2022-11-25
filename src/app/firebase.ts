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
  startAt,
  orderBy,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  arrayUnion,
  startAfter,
  arrayRemove,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from 'firebase/storage';
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
const app = initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const provider: GoogleAuthProvider = new GoogleAuthProvider();
const db: Firestore = getFirestore(app);
const storage = getStorage();

export {
  db,
  doc,
  ref,
  auth,
  limit,
  query,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  storage,
  startAt,
  orderBy,
  signOut,
  provider,
  updateDoc,
  deleteDoc,
  collection,
  startAfter,
  arrayUnion,
  arrayRemove,
  getFirestore,
  getDownloadURL,
  serverTimestamp,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  uploadBytesResumable,
};
