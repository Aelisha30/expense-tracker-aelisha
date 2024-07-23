// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";



//firebase init
//firebase deploy

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeN1xub7TbrEMfugPjYIyb4Wa1rnKRT5o",
  authDomain: "my-expense-tracker-66d17.firebaseapp.com",
  projectId: "my-expense-tracker-66d17",
  storageBucket: "my-expense-tracker-66d17.appspot.com",
  messagingSenderId: "1053623878412",
  appId: "1:1053623878412:web:4dfe19d74c01188b9dff29",
  measurementId: "G-V8L7EH8J1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db=getFirestore(app)