
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gDNWlCRcQX33E05V8kMz4SmoayhcNHE",
  authDomain: "students-759c2.firebaseapp.com",
  projectId: "students-759c2",
  storageBucket: "students-759c2.appspot.com",
  messagingSenderId: "531194289832",
  appId: "1:531194289832:web:9701eeedde57820d7aac9d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db