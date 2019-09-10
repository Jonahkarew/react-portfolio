import React, { Component } from 'react';
import Navbar from '../Components/Navbar/index.js';
import Wrapper from '../Components/Wrapper/index';

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
                                             <p>I can be contacted any of these ways</p>
                                            <li> jonahkarew@gmail.com</li>
                                            <li>732-551-8773   </li>
                                            <li><a href='https://www.linkedin.com/in/jonahkarew' target='_blank'>LinkedIn </a>   </li>
                                            <li > <a href='https://github.com/Jonahkarew' target='_blank'> Github </a>  </li>
                                        
                                        </ul>
                                        <p> 
                                            <a href='https://drive.google.com/file/d/1q6n-syAFJkUG71KqVB1Kown7GMHJKBjI/view?usp=sharing' target='_blank'>
                                                    My Resume
                                            </a>
                                        </p>
                                    </div>

                                </div>
                        
                            </div>} />
                </div>

            </React.Fragment>
        )
    }

}

export default Contact