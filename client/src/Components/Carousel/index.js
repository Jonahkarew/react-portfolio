import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
 





class DemoCarousel extends Component {
    render() {
        return (
            <Carousel
            autoPlay
            interval={30000}
            infiniteLoop={true}
            useKeyboardArrows={true}
            stopOnHover={true}
            showIndicators={false}
            width={'95%'}
            >
               
                  <div>
                    <img src={require('./assets/scrapeit_re.PNG')} alt='reddit spotify scraping application' />
                    <p className='projectTitle'>ScrapeIt!</p>
                   
                    <hr className='titleSeperator'></hr>
              
                    <a className='projectLink' href='https://jonahkarew.github.io/ScrapeIt/' target='_blank' rel="noopener noreferrer">Deployed Link</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/ScrapeIt' target='_blank' rel="noopener noreferrer">Github</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/ScrapeIt/blob/master/README.md' target='_blank' rel="noopener noreferrer">ReadMe</a>
                    
                    <div className='descriptor' hidden>flexitarian scenester forage keffiyeh deep v fan </div>
                  
                </div>
                
                <div id='frame1'>
                    <img src={require("./assets/llfrere.png")} alt='long lost friends react'/>
                    <div className='descriptionContainer'>
                        <p className='projectTitle'>Long Lost Friends - React</p>
                        <hr className='titleSeperator'></hr>
                        <a className='projectLink' href='https://long-lost-friends.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Link</a>
                        <br></br>
                        <a className='projectLink' href='https://github.com/rishirsud/llf-react' target='_blank' rel="noopener noreferrer">Github</a>
                        <br></br>
                        <a className='projectLink' href='https://github.com/rishirsud/llf-react/blob/master/README.md' target='_blank' rel="noopener noreferrer">ReadMe</a>
                        
                        <div className='descriptor' hidden >flexitarian scenester forage keffiyeh deep v fanny pack Od
                        d Future Helvetica 90's VHS Tonx keytar DIY raw denim Truffaut irony tote bag fap but
                        cher Shoreditch chillwave trust fund try-hard PBR&B four loko cardigan post-ironic gas
                        tropub bitters sriracha fingerstache selfies narwhal food truck squid tousled Portland Cosby
                        sweater authentic kogi whatever seitan paleo mustache heirloom chia tofu vinyl selvage art party Tumblr artisan pop
                        -up lomo vegan single-origin coffee flannel swag Schlitz brunch typewriter Intelligentsia street art Neutra hoodie lo-
                        fi before they sold out hella Bushwick bicycle rights normcore aesthetic master cleanse twee Marfa PBR literally pour-ove
                        r cred High Life pickled Blue Bottle cray wolf 3 wolf moon drinking vinegar leggings synth fixie ennui polaroid bespoke pork
                        belly Godard asymmetrical photo booth meggings mixtape gluten-free Pitchfork kitsch small batch distillery locavore actually 
                        next level banjo jean shorts American Apparel Brooklyn Etsy direct trade  you probably haven't heard of them Williamsburg cli
                        che Carles organic ethical Echo Park farm-to-table wayfarers Kickstarter Austin stumptown Vice beard iPhone letterpress bl
                        og McSweeney's plaid sustainable pug freegan mumblecore dreamcatcher quinoa retro YOLO yr semiotics kale chips viral 8-bit
                        +1 salvia readymade hashtag biodiesel Pinterest fashion axe disrupt skateboard tattooed Wes Anderson Banksy Thundercats s
                        low-carb roof party church-key sartorial gentrify crucifix XOXO messenger bag shabby chic banh mi cornhole umami put a bi
                        rd on it occupy ugh meh craft beer chambray mlkshk
                        </div>
                       </div>
                </div>
                <div>
                    <img src={require("./assets/pkmnmemory.png")} alt='pokemon selector game' />
                    <p className='projectTitle'>Pokemon Memory Game - React</p>
                    <hr className='titleSeperator'></hr>
                    <a className='projectLink' href='https://pokemon-memory-gamejk.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Link</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/memory-game' target='_blank' rel="noopener noreferrer">Github</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/memory-game/blob/master/README.md' target='_blank' rel="noopener noreferrer">ReadMe</a>
                    < div className='descriptor' hidden>flexitarian scenester forage keffiyeh deep v fan </div>
                </div>
                <div>
                    <img src={require('./assets/notetakerrere.png')} alt='random' />
                    <p className='projectTitle'>Note Taker</p>
                    <hr className='titleSeperator'></hr>
                    <a className='projectLink' href='https://jonah-karew-note-taker.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Link</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/note-taker' target='_blank' rel="noopener noreferrer">Github</a>
                    <br></br>
                    <a className='projectLink' href='https://github.com/Jonahkarew/note-taker/blob/master/README.md' target='_blank' rel="noopener noreferrer">ReadMe</a>
                    
                    <div className='descriptor' hidden>flexitarian scenester forage keffiyeh deep v fan </div>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));