// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8fFE2TkHQj-kW9Mf0RcPHl80A4Frnhig",
    authDomain: "twitter-reloded.firebaseapp.com",
    projectId: "twitter-reloded",
    storageBucket: "twitter-reloded.appspot.com",
    messagingSenderId: "568980384397",
    appId: "1:568980384397:web:be6857a54977d9c7a850c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
