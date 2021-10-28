import React from "react";
import styles from "./Navbar.module.css";
import { useAuth } from "../../context/AuthContext";
import Model from "../Model";

function Navbar() {
  const { logout, currentUser } = useAuth();
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.font}>
         
          <h1 className={styles.h1}>Today</h1>
          <h3 className={styles.h3}>Welcome {currentUser.displayName}</h3>
          
        </div>
        <div onClick={logout} className={styles.avatar}>
          <img  className={styles.pic} src={currentUser.photoURL} alt="pic" height={50}/>
          logout
        </div>
        
      </div>
      <div className={styles.divider}/>

     <Model/>
    </div>
  );
}

export default Navbar;
