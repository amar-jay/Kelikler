// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {env} from 'process';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: "kelimlerim.firebaseapp.com",
  projectId: "kelimlerim",
  storageBucket: "kelimlerim.appspot.com",
  messagingSenderId: "124496247527",
  appId: env.APP_ID,
  measurementId: env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);