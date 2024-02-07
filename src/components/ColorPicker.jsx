import { useState, useEffect } from "react";
import InputColor from 'react-input-color';

import "../App.css";

function contrast(hex) {
    var threshold = 149;
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (hex.length === 4) {
        r = parseInt("0x" + hex[1] + hex[1]);
        g = parseInt("0x" + hex[2] + hex[2]);
        b = parseInt("0x" + hex[3] + hex[3]);
        // 6 digits
    } else if (hex.length === 7) {
        r = parseInt("0x" + hex[1] + hex[2]);
        g = parseInt("0x" + hex[3] + hex[4]);
        b = parseInt("0x" + hex[5] + hex[6]);
    }
    return r * 0.299 + g * 0.587 + b * 0.114 > threshold ? "#000000" : "#ffffff";
}

const ColorPicker = (props) => {

    const [color, setColor] = useState("#000000");
    const [textColor, setTextColor] = useState("black");

    useEffect(() => {
        // Set the initial text color to white when the component mounts
        setTextColor("white");
    }, []);

    function handleColorChange(event) {
        const selectedColor = event.target.value;
        setColor(selectedColor);
        const newTextColor = contrast(selectedColor);
        setTextColor(newTextColor);
    }

    return (
        <div
            className="color-picker-container"
            style={{ backgroundColor: color, color: textColor }}>
            <div
                className="color-display"
                style={{ backgroundColor: color, color: textColor }}>

                <p className="selected-color">Selected Color:</p>

                <h3
                    style={{
                        color: textColor,
                        backgroundColor: color,
                        borderRadius: "4px",
                        border: " solid 3px",
                        textAlign: "center",
                    }}>
                    {color.toUpperCase()}
                </h3>

            </div>

            <h4 style={{ color: textColor }}>[choose color below]</h4>

            <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="input"
            />

        </div>
    );
}

export default ColorPicker;
