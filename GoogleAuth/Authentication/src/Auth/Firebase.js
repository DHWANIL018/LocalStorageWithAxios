// Shree Ganeshay namah 


import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAK9arwndoIyhwvz01TIzHOt5Zx-awQ1B4",
  authDomain: "jio-users.firebaseapp.com",
  databaseURL: "https://jio-users-default-rtdb.firebaseio.com",
  projectId: "jio-users",
  storageBucket: "jio-users.firebasestorage.app",
  messagingSenderId: "518697292635",
  appId: "1:518697292635:web:8a6a500e5d9e4fd3b3407e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
    
export default auth