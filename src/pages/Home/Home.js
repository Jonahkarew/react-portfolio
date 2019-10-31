import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/index.js';
import Wrapper from '../../Components/Wrapper/index';




class Home extends Component {
    
    render(){
        
        return(
            
            <React.Fragment>
                <Wrapper 
                content={
                <div>
                
                    <Navbar />

                    <div>
                     <div className='column'>
                        <img src={require('../../assets/images/profile.JPG')} className='profileImg' alt='Jonah Karew'/>
                        <p className='bio'>Goal-oriented Web Developer with strong commitment to collaboration and solutions-oriented problem-solving. Use various web design software to develop customer-focused websites and designs. Committed to high standards of web design, user experience, usability and speed for multiple types of end-users. Successful at maintaining customer satisfaction through effective customer support.</p>
                        <p className='bio2'>As a driven Web Developer, I have felt a pull toward technology since I was very young. 
                        I graduated an intensive Web Development Bootcamp at Rutgers.
                         I gained a great deal of experience in the roots of web development, while focusing my skills in React, HTML5, CSS, Bootstrap, and various database technologies, such as SQL and Mongo.
                          I plan to build as many quality websites as I possibly can, and maybe dip my toes in building Android and IOS applications. 
                          I want to bring my passion for learning new technologies and creating new tools to a company that will consider me a valuable asset.</p>
                        
                    </div>


                    </div>
                



                </div>
                } />
            </React.Fragment>
        )
    }

}

export default Home