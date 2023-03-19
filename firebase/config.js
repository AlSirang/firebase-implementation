// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzzgr5zC1BfjNp3XWKHfsIP2ijwGEBheQ",
  authDomain: "gallery-94ac0.firebaseapp.com",
  projectId: "gallery-94ac0",
  storageBucket: "gallery-94ac0.appspot.com",
  messagingSenderId: "919451018933",
  appId: "1:919451018933:web:a5d3776e9b29ab345280fc",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
