import React from 'react';
import { BrowserRouter as
     Route,
     Router,
     NavLink } from 'react-router-dom';
// import './style.css'
import styles from './style.module.css'


function Navbar (){


    return (
        <React.Fragment>
          
            <nav className={styles.navContainer}>
                <div className={styles.jk}>
                    JK
                </div>
                <div className={styles.buttonsDiv}>
                    <div className={styles.button}>Bio</div>
                    <div className={styles.button}>Portfolio</div>
                    <div className={styles.button}>Contact</div>
                </div>
            </nav>
        </React.Fragment>
    )




}

export default Navbar;