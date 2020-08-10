function animationSetUp() {
    var css = document.createElement('style');
    css.type = "text/css"
    var height = window.innerHeight
    var width = window.innerWidth


    var styles = `

    .jk{
        font-size: ${height * 0.15}px;
        color: green; 
        position: absolute;
        top: ${height / 4}px;
        left: ${width / 2 - width * 0.05}px
    
    }

    #j{
        left: ${width / 2 - width * 0.09}px;
    }

    #k{
        left: ${width /2}px;
    }
    
    .loader{
        top: 0;
        width: ${width}px;
        height: ${height}px;
        z-index: 7;
        position: fixed;
        background-color: #ffffff;
        overflow: hidden;
    }
    


    @supports (-webkit-text-stroke: 1px black){
        .jk{
            -webkit-text-stroke: 3px black;
            -webkit-text-fill-color: #FFFFFF;
        }
    `

    styles += `
    @keyframes animateJ{
        0%{
            transform: translate3d(-${width / 2}px, 0, 0);
        }
        16.5%{
            transform: translate3d(0, 0, 0);
            transform: rotateY(0deg);
        }
        24.5%{
            transform: translate3d(0, 0, 0);
            transform: rotateY(-360deg);
        }
        33%{
            transform: translate3d(-${width}px, -${height / 2}px, 0);
        }
        50%{
            transform: translate3d(-${width}px, 0, 0)
        }
        66%{
            transform: translate3d(0px, 0, 0);
            transform: rotateY(0deg);
        }
        74.5%{
            transform: translate3d(0px, 0, 0);
            transform: rotateY(-360deg)
        }
        82%{
            transform: translate3d(${width}px, ${height}px, 0);
        }
        90%{
            transform: translate3d(${width}px, -${height}px, 0);
        }
        95%{
            transform: translate3d(-${width}px, -${height}px, 0);
        }
        100%{
            transform: translate3d(-${width}px, 0, 0);
        }
    
    }

    @keyframes animateK{
        0%{
            transform: translate3d(${width / 2}px, 0, 0);
        }
        16.5%{
            transform: translate3d(0, 0, 0);
            transform: rotateY(0deg);
        }
        24.5%{
            transform: translate3d(0, 0, 0);
            transform: rotateY(360deg);
        }
        33%{
            transform: translate3d(${width}px, ${height}px, 0);
        }
        50%{
            transform: translate3d(${width}px, 0, 0)
        }
        66%{
            transform: translate3d(0px, 0, 0);
            transform: rotateY(0deg);
        }
        74.5%{
            transform: translate3d(0px, 0, 0);
            transform: rotateY(360deg)
        }
        82%{
            transform: translate3d(-${width}px, -${height / 2}px, 0);
        }
        90%{
            transform: translate3d(${width}px, -${height}px, 0);
        }
        95%{
            transform: translate3d(-${width}px, -${height}px, 0);
        }
        100%{
            transform: translate3d(-${width}px, 0, 0);
        }
    
    }
    `
    // adding animation to class with js
    styles += `#j{animation: animateJ 6s infinite}`
    styles += `#k{animation: animateK 6s infinite}`



    css.appendChild(document.createTextNode(styles));
    document.getElementsByTagName("head")[0].appendChild(css)

}

animationSetUp()