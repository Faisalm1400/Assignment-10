// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_nV3xsq4LQqnH7Tt3rmi_FP6akmxW5Uo",
  authDomain: "crowdcube-ed43f.firebaseapp.com",
  projectId: "crowdcube-ed43f",
  storageBucket: "crowdcube-ed43f.firebasestorage.app",
  messagingSenderId: "473708576793",
  appId: "1:473708576793:web:222f3d16d12cf359af6a88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);