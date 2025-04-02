import {getAuth} from "firebase/auth"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOPLO7MzfiLTT8tAoG0PgoBRfDQymtffk",
  authDomain: "web-370ae.firebaseapp.com",
  projectId: "web-370ae",
  storageBucket: "web-370ae.firebasestorage.app",
  messagingSenderId: "215866090967",
  appId: "1:215866090967:web:e52cdccc0ec1a5d0df9792",
  measurementId: "G-NTGEMGKFB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
