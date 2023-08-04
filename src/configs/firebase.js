import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBKdWZWi0zcx9XrH-qRQZCS5xka-Td2BGw",
  authDomain: "tys-library.firebaseapp.com",
  projectId: "tys-library",
  storageBucket: "tys-library.appspot.com",
  messagingSenderId: "623376054999",
  appId: "1:623376054999:web:012d42cf8ea776a5b64e92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialise firestore
export const db = getFirestore(app);