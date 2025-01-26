import React, { useState } from 'react';
import './BoxContainer.css';
import Box from './Box';
import { rgbValue, generateColors} from '../utils/helper';

function BoxContainer({ num = 18 }) {
    const [colors, setColors] = useState(generateColors(num));

    const changeColor = (currentColor) => {
        let newColor;

        do {
            newColor = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;
        } while (newColor === currentColor);

        setColors((prevColors) => {
            return prevColors.map((color) => {
                
                return color === currentColor ? newColor : color;
            });
        });
    }

    return (
        <div className="BoxContainer">
            {colors.map((color, index) => (
                <Box key={index} color={color} changeColor={changeColor} />
            ))}
        </div>
    );
}

export default BoxContainer;
