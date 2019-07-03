import React, { Component } from 'react';
import Navbar from '../Components/Navbar/index.js';
import Wrapper from '../Components/Wrapper/index';

class Contact extends Component {

    render(){
        return(
            <React.Fragment>
                <Wrapper 
                content={<Navbar />} />
            </React.Fragment>
        )
    }

}

export default Contact