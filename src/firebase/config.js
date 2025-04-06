import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOPLO7MzfiLTT8tAoG0PgoBRfDQymtffk",
  authDomain: "web-370ae.firebaseapp.com",
  projectId: "web-370ae",
  storageBucket: "web-370ae.appspot.com", // TO‘G‘RILANDI
  messagingSenderId: "215866090967",
  appId: "1:215866090967:web:e52cdccc0ec1a5d0df9792",
  measurementId: "G-NTGEMGKFB6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// TO‘G‘RILANDI: app argumentlari qo‘shildi
export const auth = getAuth(app);
export const db = getFirestore(app);
