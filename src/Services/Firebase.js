// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqW13nYZblAM9AYd1DCzLksle2jvrZLL8",
  authDomain: "product-curd.firebaseapp.com",
  projectId: "product-curd",
  storageBucket: "product-curd.appspot.com",
  messagingSenderId: "121395684429",
  appId: "1:121395684429:web:f4a45757dc698b5fa66804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);