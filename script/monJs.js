// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEzhPniVnb4gRnWULDNQdGllyc_Y8_pis",
  authDomain: "blablavelo-a73e0.firebaseapp.com",
  databaseURL: "https://blablavelo-a73e0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "blablavelo-a73e0",
  storageBucket: "blablavelo-a73e0.appspot.com",
  messagingSenderId: "92377240852",
  appId: "1:92377240852:web:302fc2d3f4630d6fddde01",
  measurementId: "G-BLD87EKL26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);