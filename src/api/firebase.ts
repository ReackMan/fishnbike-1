// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBG4A9rNrdC3Su5lXCCz5j0Y-qiKhmZHHk",
    authDomain: "test-1-4e031.firebaseapp.com",
    databaseURL: "https://test-1-4e031-default-rtdb.firebaseio.com",
    projectId: "test-1-4e031",
    storageBucket: "test-1-4e031.appspot.com",
    messagingSenderId: "176137199380",
    appId: "1:176137199380:web:3d622549ef1a3fa16b6c01",
    measurementId: "G-3P6NJSKPF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);