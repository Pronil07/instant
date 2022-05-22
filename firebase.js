import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "instant-ppr.firebaseapp.com",
  projectId: "instant-ppr",
  storageBucket: "instant-ppr.appspot.com",
  messagingSenderId: MESSAGING_API_KEY,
  appId: API_ID
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};