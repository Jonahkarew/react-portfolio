import React, { useState, useEffect } from 'react';
import styles from './style.module.css';



function DotCanvas() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const canvasRef = React.createRef();

    const dots = [
        // big dots
        { x: 100, y: 100, radius: Math.floor(Math.random() * 40) + 10, xMove: '+', yMove: '+', frames: 1.3, color: '#ffc51b80'},
        { x: 120, y: 120, radius: Math.floor(Math.random() * 40) + 10, xMove: '+', yMove: '+', frames: 0.8, color: '#ffd14a80'},
        { x: 40, y: 200,  radius: Math.floor(Math.random() * 40) + 10, xMove: '-', yMove: '+', frames: 0.3, color: '#4089be80'},
        { x: 60, y: 240,  radius: Math.floor(Math.random() * 40) + 10, xMove: '-', yMove: '+', frames: 0.9, color: '#87bbdf80'},
        { x: 250, y: 300, radius: Math.floor(Math.random() * 40) + 10, xMove: '+', yMove: '-', frames:   1, color: '#ff7b4a80'},
        { x: 280, y: 315, radius: Math.floor(Math.random() * 40) + 10, xMove: '+', yMove: '-', frames: 1.5, color: '#d13A0280'},
        { x: 150, y: 35,  radius: Math.floor(Math.random() * 40) + 10, xMove: '-', yMove: '-', frames: 0.5, color: '#4089be80'},
        { x: 170, y: 65,  radius: Math.floor(Math.random() * 40) + 10, xMove: '-', yMove: '-', frames: 0.7, color: '#09528680'},

        // itty bitty dots
        { x: 250, y: 300, radius: Math.floor(Math.random() * 20) + 4, xMove: '+', yMove: '-', frames:   1, color: '#ff7b4a80'},
        { x: 280, y: 315, radius: Math.floor(Math.random() * 20) + 4, xMove: '+', yMove: '-', frames: 1.5, color: '#d13A0280'},
        { x: 150, y: 35,  radius: Math.floor(Math.random() * 20) + 4, xMove: '-', yMove: '-', frames: 0.5, color: '#4089be80'},
        { x: 170, y: 65,  radius: Math.floor(Math.random() * 20) + 4, xMove: '-', yMove: '-', frames: 0.7, color: '#09528680'},
    ]

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")
  

        if(canvasRef.current){
            setHeight(canvasRef.current.getBoundingClientRect().height)
            setWidth(canvasRef.current.getBoundingClientRect().width)
        }


      
        allTogether()
    
        var canvasWidth = width;
        var canvasHeight = height;
        // canvas.attr({"height": canvasHeight, "width": canvasWidth});

    function moveDot(){
        context.clearRect(0, 0, canvasWidth, canvasHeight)
    
        for (var i =0; i <dots.length; i++){
    
            if(dots[i].xMove === "+"){
                dots[i].x += dots[i].frames;
            }
            else{
                dots[i].x -= dots[i].frames
            }
    
            if(dots[i].yMove === "+"){
                dots[i].y += dots[i].frames
            }
            else{
                dots[i].y -= dots[i].frames
            }
    
            drawDot(dots[i])
    
            if((dots[i].x + dots[i].radius) >= canvasWidth){
                dots[i].xMove = '-'
            }
    
            if((dots[i].x - dots[i].radius)  <= 0){
                dots[i].xMove = "+"
            }
    
            if((dots[i].y + dots[i].radius) >= canvasHeight){
                dots[i].yMove = '-'
            }
    
            if((dots[i].y - dots[i].radius) <= 0){
                dots[i].yMove = '+'
            }
    
        }
    
        window.requestAnimationFrame(moveDot)
    }

    function drawDot(dot){
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI, false)
        context.fillStyle = dot.color;
        context.fill();
    }

    
    function allTogether()  {
         var canvas = canvasRef.current;
        //  var context = canvas.getContext("2d");
        //  var canvasHeight = height;
        //  var canvasWidth = width;
    
     for (var i=0; i< dots.length; i++){
        drawDot(dots[i])
    };
    
    setTimeout(function(){
        window.requestAnimationFrame(moveDot);
    }, 2500);
    
    }
    });



    return (
        <canvas
        className={styles.canvas}
            ref={canvasRef}
            style={{
                height: '1000px',
                width: '100%'
            }}
            height={height}
            width={width}
            >

        </canvas>
    )
}

export default DotCanvas
