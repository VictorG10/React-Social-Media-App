// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPpMymzQMz3-Ah4501md-6L-8Q5AmSOow",
  authDomain: "react-social-media-ap.firebaseapp.com",
  projectId: "react-social-media-ap",
  storageBucket: "react-social-media-ap.appspot.com",
  messagingSenderId: "1070558417837",
  appId: "1:1070558417837:web:3db07b0893619405824724",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
