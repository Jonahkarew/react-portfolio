import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './style.css'
 





class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay 
            interval={30000}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showIndicators={false}
            width={'95%'}
            >

                <div id='frame1'>
                    <img src={require("./assets/llfrere.png")} alt='long lost friends react' />
                    <p className='projectTitle'>this here is another thing</p>
                    <p className='link'><a href='https://www.google.com' target='_blank' rel="noopener noreferrer">Github</a></p>
                    <div className='descriptor'>flexitarian scenester forage keffiyeh deep v fanny pack Odd Future Helvetica 90's VHS Tonx keytar DIY raw denim Truffaut irony tote bag fap butcher Shoreditch chillwave trust fund try-hard PBR&B four loko cardigan post-ironic gastropub bitters sriracha fingerstache selfies narwhal food truck squid tousled Portland Cosby sweater authentic kogi whatever seitan paleo mustache heirloom chia tofu vinyl selvage art party Tumblr artisan pop-up lomo vegan single-origin coffee flannel swag Schlitz brunch typewriter Intelligentsia street art Neutra hoodie lo-fi before they sold out hella Bushwick bicycle rights normcore aesthetic master cleanse twee Marfa PBR literally pour-over cred High Life pickled Blue Bottle cray wolf 3 wolf moon drinking vinegar leggings synth fixie ennui polaroid bespoke pork belly Godard asymmetrical photo booth meggings mixtape gluten-free Pitchfork kitsch small batch distillery locavore actually next level banjo jean shorts American Apparel Brooklyn Etsy direct trade  you probably haven't heard of them Williamsburg cliche Carles organic ethical Echo Park farm-to-table wayfarers Kickstarter Austin stumptown Vice beard iPhone letterpress blog McSweeney's plaid sustainable pug freegan mumblecore dreamcatcher quinoa retro YOLO yr semiotics kale chips viral 8-bit +1 salvia readymade hashtag biodiesel Pinterest fashion axe disrupt skateboard tattooed Wes Anderson Banksy Thundercats slow-carb roof party church-key sartorial gentrify crucifix XOXO messenger bag shabby chic banh mi cornhole umami put a bird on it occupy ugh meh craft beer chambray mlkshk</div>
                </div>
                <div>
                    <img src={require("./assets/pkmnrere.png")} alt='pokemon selector game' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('./assets/scrapeit_re.PNG')} alt='reddit spotify scraping application' />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={require('./assets/notetakerrere.png')} alt='random' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
 
export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));