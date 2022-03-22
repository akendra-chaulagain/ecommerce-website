import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API,
  authDomain: "e-commerce-website-83a5f.firebaseapp.com",
  projectId: "e-commerce-website-83a5f",
  storageBucket: "e-commerce-website-83a5f.appspot.com",
  messagingSenderId: "1074900839030",
  appId: "1:1074900839030:web:11f6456a6adc6badf9cd57",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
