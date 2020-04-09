import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/index.js';
import Wrapper from '../../Components/Wrapper/index';
import Carousel from '../../Components/Carousel/index';
import ContactForm from '../../Components/ContactForm/index'
import styles from './style.module.css'


class Home extends Component {

    render() {
        
        return (
            <Wrapper>
                <Navbar />
                <div id="bioAnchor" className={styles.bioAnchor}></div>
                <h1 className={styles.firstName}>Jonah</h1>
                <h2 className={styles.lastName}>Karew</h2>
                <div className={styles.column}>
                    <div className={styles.profileImageDiv} alt='Jonah Karew'></div>
                    <p className={styles.bio}>Goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem-solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support.</p>
                </div>
                <div className={styles.column}>            
                    <p className={styles.bio2}>As a driven Web Developer, I have felt a pull toward technology since I was very young. I graduated an intensive Web Development Bootcamp at Rutgers. I gained a great deal of experience in the roots of web development, while focusing my skills in React, HTML5, CSS, Bootstrap, and various database technologies, such as SQL and Mongo. I plan to build as many quality websites as I possibly can, and maybe dip my toes in building Android and IOS applications. I want to bring my passion for learning new technologies and creating new tools to a company that will consider me a valuable asset.</p>
                </div>
                <div    id="portfolioCarousel" >
                    <Carousel />
                </div>
                <div id="contactSection" style={{
                      height: "400px",
                      width: "100%"
                }}>
                    <ContactForm />
                </div>
                
            </Wrapper>

        )
    }
}

export default Home