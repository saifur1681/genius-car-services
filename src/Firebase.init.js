// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF2uvNVjl4jy6hDrUnAq2i725gAA2Z5VI",
    authDomain: "genius-car-services-b9188.firebaseapp.com",
    projectId: "genius-car-services-b9188",
    storageBucket: "genius-car-services-b9188.appspot.com",
    messagingSenderId: "853374149649",
    appId: "1:853374149649:web:69c1a45813f2509dfa3db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;