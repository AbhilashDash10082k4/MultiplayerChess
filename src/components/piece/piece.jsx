/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
 
import React, { useRef } from "react";
import PropTypes from 'prop-types'

export default function Piece({ name, pos, setFromPos }) {
    const color = name === name.toUpperCase() ? 'w' : 'b';//if name is upeercase, color= white ('w') else black
    const element = useRef();

    const imageName = color + name.toUpperCase();
    let image;

    image = (`/assets/assets/pieces/${imageName}.png`)

    const handleDragStart = () => {
        setFromPos(pos);
        setTimeout(() => {
            element.current.style.display = 'none';
        }, 0*1000)
    }
    
    const handleDragEnd = () => {
        element.current.style.display = 'block';
    }
    
    //draggable={true} attribute makes the image draggable, likely for implementing drag-and-drop functionality.
    return (
        <img draggable={true} className="piece" src={image} alt="" onDragStart={handleDragStart} onDragEnd={handleDragEnd}></img>
    )
}

Piece.propType = { //used for type-checking the props passed to the component. It helps ensure that the component receives the correct types of data.
    name: PropTypes.string.isRequired, //the prop name passed to piece component isRequired to be string
    pos: PropTypes.string.isRequired, //the prop pos isRequired to be a string
    setFromPos: PropTypes.func
}