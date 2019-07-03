import React, { Component } from 'react';
import Navbar from '../Components/Navbar/index.js';
import Wrapper from '../Components/Wrapper/index';

import data from '../data/data'
import Card from '../Components/Card/index'


class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state={
            projects: data.projects,
            project: data.projects[0]
        }
    }

    render(){
        const {projects, project} = this.state;
        return(
            <Wrapper content ={
                <div>
                <Navbar></Navbar>
                <div>
                    {
                        projects.map(project => <Card key={project._id} project={project} />)
                    }
                </div>
                </div>}
            ></Wrapper>
        )
    }

}

export default Portfolio;