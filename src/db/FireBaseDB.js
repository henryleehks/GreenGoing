// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWD2dz3Bj8knRkHD5wgn7X5ly1eVkygSc",
  authDomain: "greengoing-8e009.firebaseapp.com",
  projectId: "greengoing-8e009",
  storageBucket: "greengoing-8e009.appspot.com",
  messagingSenderId: "892747843777",
  appId: "1:892747843777:web:367a797620802e6fff2c40",
  measurementId: "G-NRY2SZB4YG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


