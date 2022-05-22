import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAEaPeehhC2QbCnciuosNOnb5AdjJECzds",
  authDomain: "instant-ppr.firebaseapp.com",
  projectId: "instant-ppr",
  storageBucket: "instant-ppr.appspot.com",
  messagingSenderId: "148974641465",
  appId: "1:148974641465:web:0ab6f33768e5e5887888e8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};