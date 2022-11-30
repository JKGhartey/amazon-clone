import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV2H99jaaRk9xOSOecEoL9wtMg9k2fcGQ",
  authDomain: "cloned-48fd5.firebaseapp.com",
  projectId: "cloned-48fd5",
  storageBucket: "cloned-48fd5.appspot.com",
  messagingSenderId: "594056117077",
  appId: "1:594056117077:web:8edf33662d6b240e3e4ddc",
  measurementId: "G-RJ0DCMHMCL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
export default app;
