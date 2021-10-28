import { initializeApp,getApps,getApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'



const firebaseConfig = {
   //enter your config


  
};

 const app =!getApps().length? initializeApp(firebaseConfig):getApp();

 
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth(app)
export {db,storage,auth}