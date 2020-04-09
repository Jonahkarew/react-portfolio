import React from 'react';
import styles from './style.module.css'


function Navbar (){


    return (      
            <nav className={styles.navContainer}>
                <div className={styles.jk}>
                    JK
                </div>
                <div className={styles.buttonsDiv}>
                    <a href="#contactSection"><div className={styles.button}>Contact</div></a>
                    <a href="#portfolioCarousel"><div className={styles.button}>Portfolio</div></a>
                    <a href="#bioAnchor"><div className={styles.button}>Bio</div></a>
                </div>
            </nav>
    )




}

export default Navbar;