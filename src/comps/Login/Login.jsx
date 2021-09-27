import React from "react";
import styles from './Login.module.css';
import pic from "./Saly-14.svg"
import pic2 from "./Saly-26.svg"
import {useAuth} from "../../context/AuthContext"


function Login() {
    const {signInWithGoogle} = useAuth()
  return (
    <div className={styles.login}>
      <div className={styles.bg}>
          
          <img src={pic} height={800}/>
          <img src={pic2} height={100}/>
          
      </div>
      <div className={styles.page}>
          <h1>Holaaa</h1>
          <button onClick={signInWithGoogle} className={styles.btn}>LogIn with Google</button>
      </div>
    </div>
  );
}

export default Login;
