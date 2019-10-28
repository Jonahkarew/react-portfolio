import React from 'react';
import { BrowserRouter as Route, NavLink, } from 'react-router-dom';
import './style.css'


function Navbar (){


    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand" href="#">JK</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/"> 
                            <div className="nav-item nav-link navButton" id="homeButton">
                                    Home
                                <span className="sr-only">
                                    (current)
                                </span>
                            </div>
                        </NavLink> 
                        <NavLink to="/contact"> 
                            <div className="nav-item nav-link navButton" id="contactButton">
                                    Contact
                            </div>
                        </NavLink> 
                        <NavLink to="/portfolio">
                            <div className="nav-item nav-link navButton" id="portfolioButton">
                                    Portfolio
                            </div>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )




}

export default Navbar;