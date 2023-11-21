import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB8n26961aAU3aopYgWylcoBEbzL7DdBwQ",
  authDomain: "instagram-clone-61852.firebaseapp.com",
  projectId: "instagram-clone-61852",
  storageBucket: "instagram-clone-61852.appspot.com",
  messagingSenderId: "138346087777",
  appId: "1:138346087777:web:8f96decc4aaafcc6217120"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();