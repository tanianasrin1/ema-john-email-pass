// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAVcvfq8Na6I7f5gjn7dRP1QvhWy2CuyA",
  authDomain: "ema-john-email-pass.firebaseapp.com",
  projectId: "ema-john-email-pass",
  storageBucket: "ema-john-email-pass.appspot.com",
  messagingSenderId: "184029458839",
  appId: "1:184029458839:web:a3b4a636e5af129a0994d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;