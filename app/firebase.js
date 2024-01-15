// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNdMT_0giDvrjnQnPDLG_otD1AFFbIQZE",
  authDomain: "med-cart-dfa46.firebaseapp.com",
  projectId: "med-cart-dfa46",
  storageBucket: "med-cart-dfa46.appspot.com",
  messagingSenderId: "817623632527",
  appId: "1:817623632527:web:6d577267bb0f3c17e73efa",
  measurementId: "G-E82D0WSH23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
