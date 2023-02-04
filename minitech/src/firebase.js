import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDlu0huBAnNynLoWqhNU8j2Kis6dnLVuVY",
  authDomain: "hackthisfall-d70a9.firebaseapp.com",
  projectId: "hackthisfall-d70a9",
  storageBucket: "hackthisfall-d70a9.appspot.com",
  messagingSenderId: "811066167141",
  appId: "1:811066167141:web:b8903819bd443b6bde5b8c"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app);
export {auth}
