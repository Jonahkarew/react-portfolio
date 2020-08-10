import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'






function DemoCarousel() {
    const [projects] = useState([
        {
            title: "ScrapeIt!",
            hrefDeployed: "https://jonahkarew.github.io/ScrapeIt/",
            hrefGithub: "https://github.com/Jonahkarew/ScrapeIt",
            hrefReadMe: "https://github.com/Jonahkarew/ScrapeIt/blob/master/README.md",
            thumbnail: require('./assets/scrapeit_re.PNG'),
            thumbnailAlt: "reddit spotify scraping application",
            description: 'flexitarian scenester forage keffiyeh deep v fan '
        },
        {
            title: "Long Lost Friends",
            hrefDeployed: "https://long-lost-friends.herokuapp.com/",
            hrefGithub: "https://github.com/rishirsud/llf-react",
            hrefReadMe: "https://github.com/rishirsud/llf-react/blob/master/README.md",
            thumbnail: require("./assets/llfrere.png"),
            thumbnailAlt: 'long lost friends react',
            description: 'flexitarian scenester forage keffiyeh deep v fan '
        },
        {
            title: "Pokemon Memory Game - React",
            hrefDeployed: "https://pokemon-memory-gamejk.herokuapp.com/",
            hrefGithub: "https://github.com/Jonahkarew/memory-game",
            hrefReadMe: "https://github.com/Jonahkarew/memory-game/blob/master/README.md",
            thumbnail: require("./assets/pkmnmemory.png"),
            thumbnailAlt: "pokemon selector game",
            description: 'flexitarian scenester forage keffiyeh deep v fan '
        },
        {
            title: "Note Taker",
            hrefDeployed: "https://jonah-karew-note-taker.herokuapp.com/",
            hrefGithub: "https://github.com/Jonahkarew/note-taker",
            hrefReadMe: "https://github.com/Jonahkarew/note-taker/blob/master/README.md",
            thumbnail: require('./assets/notetakerrere.png'),
            thumbnailAlt: "screenshot of a note taker application",
            description: 'flexitarian scenester forage keffiyeh deep v fan '
        },

    ])

    return (
        <Carousel
            autoPlay
            interval={30000}
            infiniteLoop={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            // showIndicators={true}
            showThumbs={false}
            width={'50%'}

            style={{display: 'flex',
                    justifyContent: 'center'}}
        >
            {
                projects.map((project) => 
                    <div>
                        <img src={project.thumbnail} alt={project.thumbnailAlt} />
                        <p className='projectTitle'>{project.title}</p>

                        <hr className='titleSeperator'></hr>

                        <a className='projectLink' href={project.hrefDeployed} target='_blank' rel="noopener noreferrer">Deployed Link</a>
                        <br></br>
                        <a className='projectLink' href={project.hrefGithub} target='_blank' rel="noopener noreferrer">Github</a>
                        <br></br>
                        <a className='projectLink' href={project.hrefReadMe} target='_blank' rel="noopener noreferrer">ReadMe</a>

                        <div className='descriptor' hidden>{project.description} </div>

                    </div>
                )
            }
        </Carousel>
    );

};

export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));