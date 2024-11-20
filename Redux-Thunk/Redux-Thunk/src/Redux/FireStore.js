// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK9arwndoIyhwvz01TIzHOt5Zx-awQ1B4",
  authDomain: "jio-users.firebaseapp.com",
  databaseURL: "https://jio-users-default-rtdb.firebaseio.com",
  projectId: "jio-users",
  storageBucket: "jio-users.firebasestorage.app",
  messagingSenderId: "518697292635",
  appId: "1:518697292635:web:8a6a500e5d9e4fd3b3407e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dbFireStore = getFirestore(app)

export default dbFireStore