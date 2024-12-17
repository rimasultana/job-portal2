// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRDogMroXP35IzcEYCMsQs--mS8MW8qh0",
  authDomain: "job-portal-8679c.firebaseapp.com",
  projectId: "job-portal-8679c",
  storageBucket: "job-portal-8679c.firebasestorage.app",
  messagingSenderId: "270337554538",
  appId: "1:270337554538:web:4d484588e0f8cf9b20f213"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
