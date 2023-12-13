// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp5vIZIvS9KYDzRCRUpkIPglcbTga6pdw",
  authDomain: "react-dragon-news-auth-a53ed.firebaseapp.com",
  projectId: "react-dragon-news-auth-a53ed",
  storageBucket: "react-dragon-news-auth-a53ed.appspot.com",
  messagingSenderId: "1048808568782",
  appId: "1:1048808568782:web:7dadd3a37256268c5a1d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;