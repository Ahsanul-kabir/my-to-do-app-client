// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAxD2oT-46Ff4mcyBfzkzP59d7Po1y2P8E",
    authDomain: "to-do-app-db5fb.firebaseapp.com",
    projectId: "to-do-app-db5fb",
    storageBucket: "to-do-app-db5fb.appspot.com",
    messagingSenderId: "771258071693",
    appId: "1:771258071693:web:2d553dc40d482f453780c4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;