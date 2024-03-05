// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYgOrOqQOuPuQO2mzzNCB6aT_CkCLLxZo",
  authDomain: "netflix-gpt-24c07.firebaseapp.com",
  projectId: "netflix-gpt-24c07",
  storageBucket: "netflix-gpt-24c07.appspot.com",
  messagingSenderId: "563113744358",
  appId: "1:563113744358:web:cc71af115d9d618a642827",
  measurementId: "G-0NJY9SGRQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);