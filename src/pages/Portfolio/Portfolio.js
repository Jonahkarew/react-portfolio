import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/index.js';
import Wrapper from '../../Components/Wrapper/index';
import Carousel from '../../Components/Carousel/index';
import './style.css';


class Portfolio extends Component {
    render(){
        return(
            <React.Fragment>
                <Wrapper content ={
                    <div>
                        <Navbar></Navbar>
                        <div>
                            <Carousel />
                        </div>
                    </div>
                } />
            </React.Fragment>
        )
    }
}

export default Portfolio;