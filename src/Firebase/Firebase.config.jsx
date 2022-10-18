// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcxkZTRxhUIJ7bnY4DezITNGuMW-vrL7E",
    authDomain: "daily-headline-news.firebaseapp.com",
    projectId: "daily-headline-news",
    storageBucket: "daily-headline-news.appspot.com",
    messagingSenderId: "820204538288",
    appId: "1:820204538288:web:344b4cb77c1a7829362e75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;