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
        };
    };

    nextProject = () => {
        const newIndex = this.state.project.index+1;
        this.setState({
            project: data.projects[newIndex]
        });
        console.log(this.state.project.index)
    };

    prevProject = () => {
        const newIndex = this.state.project.index-1;
        this.setState({
            project: data.projects[newIndex]
        });
        console.log(this.state.project.index)
    };

    render(){
        const {projects, project} = this.state;
        

        return(
            <Wrapper content ={
                <div>
                    <Navbar></Navbar>


                    <div className="button-bar">
                    {/* next project button */}
                    <button className='portBtn' onClick={() => this.prevProject()}
                            disabled={project.index === 0}>
                        Previous
                    </button>

                    {/* previous project button */}
                    <button className='portBtn' onClick={() => this.nextProject()}
                            disabled={project.index === data.projects.length-1}>
                        Next
                    </button>
                    
                    </div>

                    {/* display a card for every item in data array */}

                    <div className='col'>
                        <div className={`cards-slider active-slide-${project.index}`}>
                            <div className='cards-slider-wrapper' style={{'transform': `translateX(-${project.index*(100/projects.length)}%)`}}>
                                {projects.map(project => <Card key={project._id} project={project} />)}
                            </div>
                        </div>
                    </div>
                </div>
                }
            >
                
            </Wrapper>
        )
    }

}

export default Portfolio;