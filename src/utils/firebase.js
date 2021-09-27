import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyB2h7WAmDAgOt9FHc-dErIz3gW23ipJo4s",

  authDomain: "learn-aa656.firebaseapp.com",

  projectId: "learn-aa656",

  storageBucket: "learn-aa656.appspot.com",

  messagingSenderId: "595521250069",

  appId: "1:595521250069:web:0826a69e87709aac0cbf1c",
};

 const app = initializeApp(firebaseConfig);
 

 export const auth = getAuth(app)