import React from 'react';
import './style.css'

function Wrapper (props) {
    return (
        <div className="wrapper"> {props.content} </div>
    )
}

export default Wrapper;