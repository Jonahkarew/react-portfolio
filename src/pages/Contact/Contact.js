import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/index.js';
import Wrapper from '../../Components/Wrapper/index';
import './style.css'

class Contact extends Component {

    render(){
        return(
            <React.Fragment>
                <div>
                    <Wrapper 
                        content={
                            <div>
                                <Navbar />
                                <div className='column'>
                                    <div className='contactInfo'>
                                        <ul id='contactList'>
                                             {/* <p>I can be contacted any of these ways</p> */}
                                            <li className='contactListItem'> 
                                                <img    src={require('./assets/social-067_gmail.png')} 
                                                        className='contactIcon' 
                                                        alt='Gmail icon'></img>
                                                jonahkarew@gmail.com

                                            </li>
                                            <li         className='contactListItem'>
                                                <img    src={require('./assets/Phone.png')} 
                                                        className='contactIcon' 
                                                        alt='Phone icon'></img>

                                                732-551-8773

                                            </li>

                                            <a href='https://www.linkedin.com/in/jonahkarew' 
                                                    target='_blank' 
                                                    rel="noopener noreferrer" 
                                                    className='contactLink'>
                                                <li className='contactListItem  contactListItemInt'>
                                                    <img src={require('./assets/social-011_linkedin.png')} 
                                                    className='contactIcon' 
                                                    alt='LinkedIn icon'></img>
                                                    
                                                    LinkedIn

                                                </li>
                                            </a> 

                                            <a      href='https://github.com/Jonahkarew' 
                                                    target='_blank' 
                                                    rel="noopener noreferrer" 
                                                    className='contactLink'> 
                                                <li     className='contactListItem  contactListItemInt'>
                                                <img    src={require('./assets/social-041-round_github.png')} 
                                                        className='contactIcon' 
                                                        alt='Github icon'></img>
                                                
                                                    Github 
                                                
                                                </li>
                                             </a>
                                             <a     href='https://drive.google.com/file/d/1YsgxwRb2v9zrLfnKMcm2cp2to0oZWKON/view?usp=sharing' 
                                                    target='_blank' 
                                                    rel="noopener noreferrer"
                                                    className='contactLink'>
                                            <li     className='contactListItem  contactListItemInt'>
                                            <img    src={require('./assets/document.png')} 
                                                    className='contactIcon' 
                                                    alt='document icon'></img>
                                                
                                                My Resume
                                                
                                            </li>
                                            </a>
                                        </ul>
                                    </div>
                                </div>
                            </div>} />
                </div>

            </React.Fragment>
        )
    }

}

export default Contact