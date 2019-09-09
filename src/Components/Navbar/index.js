import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
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
                        <div className="nav-item nav-link navButton" id="homeButton">
                            <NavLink to="/"> 
                                Home
                            </NavLink> 
                            <span className="sr-only">
                                (current)
                            </span>
                        </div>
                        <div className="nav-item nav-link navButton" id="contactButton">
                            <NavLink to="/contact"> 
                                Contact
                            </NavLink> 
                        </div>
                        <div className="nav-item nav-link navButton" id="portfolioButton">
                            <NavLink to="/portfolio">
                                Portfolio
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )




}

export default Navbar;