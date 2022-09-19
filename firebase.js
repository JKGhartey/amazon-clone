import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

// Initializing Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Exports
export const db = getFirestore();
export const auth = getAuth();
