// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtACyTNWP61zDh-BsjTJN7Tc5Ci6wN_Vw",
  authDomain: "netflixgpt-9a976.firebaseapp.com",
  projectId: "netflixgpt-9a976",
  storageBucket: "netflixgpt-9a976.appspot.com",
  messagingSenderId: "816386543611",
  appId: "1:816386543611:web:7ed2b600927f61e0dfc55e",
  measurementId: "G-66R1CC0C0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();