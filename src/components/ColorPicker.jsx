import { useState } from "react"
import '../App.css'

function ColorPicker() {

    const [color, setColor] = useState("")

    function handleColorChange(event) {
        setColor(event.target.value)
    }


    return (
        <div className="color-picker-container" style={{ backgroundColor: color }}>
            <h3>Color Picker</h3>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color:</p>
                <h3 style={{ color: color, backgroundColor: "black", borderRadius:"4px", textAlign: "center" }}>{color.toUpperCase()}</h3>
            </div>
            <h4>[select below]</h4>
            <input type="color" value={color} onChange={handleColorChange} className="input" />
        </div>
    )
}

export default ColorPicker