/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAntxciQUWGT8l2kpm-lbKxWGu98EDHUew",
  authDomain: "next-learners.firebaseapp.com",
  projectId: "next-learners",
  storageBucket: "next-learners.appspot.com",
  messagingSenderId: "740108586865",
  appId: "1:740108586865:web:1ebaaf752989e3169ff0d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
