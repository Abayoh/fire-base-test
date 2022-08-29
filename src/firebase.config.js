import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_W2qd8LcAw4i5cN1kgRHcJoj1MMw8zKk",
    authDomain: "house-marketplace-app-368a4.firebaseapp.com",
    projectId: "house-marketplace-app-368a4",
    storageBucket: "house-marketplace-app-368a4.appspot.com",
    messagingSenderId: "1091324122814",
    appId: "1:1091324122814:web:40b89936fceb7ac76530ef"
  };

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
  export default getFirestore(app);