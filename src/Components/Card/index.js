import React, { Component } from 'react'


const Card = ({project}) => {
    const {index, image, title, link, repo, description} = project;
    return(
        
        
        <div id={`card-${index}`} className = 'card'>
            <img src={image} alt={`Screenshot of ${title}`} />
            <div className='details'> 
                {/* <span className='index'>{index+1}</span> */}
                <h2 className='title'>{title}</h2>
                <ul className='features'>
                    <li> <a href={link} target="_blank" className='portLink'>Deployed Link</a> </li>
                    <li><a href={repo} target="_blank" className='portLink'>Github Repository</a> </li>
                    <li><a href={description} target="_blank" className='portLink'> ReadMe </a></li>
                </ul>
            </div>

        </div>
        
    )
}

export default Card
