import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";
getStorage

const firebaseConfig = {
  apiKey: "AIzaSyB-CX0siHXQHG4gwXRpO04OpOGXRkoLr48",
  authDomain: "proyectofinal-f351e.firebaseapp.com",
  projectId: "proyectofinal-f351e",
  storageBucket: "proyectofinal-f351e.appspot.com",
  messagingSenderId: "81892147869",
  appId: "1:81892147869:web:36596e40704f98e3e10a74"
};

const app = initializeApp(firebaseConfig);
export const connDatabase = getFirestore(app);
export const connStorage = getStorage(app);