// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//importing firebase auth
import { getAuth } from "firebase/auth";
//importing firebase firestore
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-QV1fikKYCVHtgUuaJguWaKZskBHnYpE",
  authDomain: "fleetprosync.firebaseapp.com",
  databaseURL: "https://fleetprosync-default-rtdb.firebaseio.com",
  projectId: "fleetprosync",
  storageBucket: "fleetprosync.appspot.com",
  messagingSenderId: "389658575142",
  appId: "1:389658575142:web:42302a86c99969387d41e7",
  measurementId: "G-WCYE3HLV6P"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);