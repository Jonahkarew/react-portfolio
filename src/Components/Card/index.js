import React, { Component } from 'react'

const Card = ({project}) => {
    const {index, image, title, link, repo, description} = project;
    return(
        <div id={`card-${index}`} className = 'card'>
            <img src={image} alt={`Screenshot of ${title}`} />
            <div className='details'> 
            <span className='index'>{index+1}</span>
            <p className='title'>{title}</p>
            <ul>
                <li>{link}</li>
                <li>{repo}</li>
                <li>{description}</li>
            </ul>
            </div>

        </div>
    )
}

export default Card
