// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAhHj13R-40Ne_Dok9sGqqgwFeiRpGLlx0",
  authDomain: "myecom-1fd0e.firebaseapp.com",
  projectId: "myecom-1fd0e",
  storageBucket: "myecom-1fd0e.appspot.com",
  messagingSenderId: "512076936748",
  appId: "1:512076936748:web:e08b5cefd1291159770389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }