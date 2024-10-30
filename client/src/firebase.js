// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_BASE_API_KEY,
  authDomain: "mern-blog-56d3b.firebaseapp.com",
  projectId: "mern-blog-56d3b",
  storageBucket: "mern-blog-56d3b.appspot.com",
  messagingSenderId: "845898842827",
  appId: "1:845898842827:web:ab5b4f27b6a4a36c6a114e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);