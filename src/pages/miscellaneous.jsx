import "../css/_miscellaneous.scss";
import { useState } from "react";

// Miscellaneous component
function Miscellaneous() {
    // Counter state initialized with 0
    const [count = 0, setCount] = useState();

    // Color state initialized with black color
    const [color, setColor] = useState("#000000");

    // Increment the counter
    const incrementCounter = () => {
        setCount(count + 1);
        console.log(count); // Log the new count value
    };

    // Decrement the counter if greater than 0
    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log(count); // Log the new count value
        }
    };

    // Reset the counter to 0
    const resetCounter = () => {
        setCount(0);
    };

    // Handle color change event and update the color state
    const handleColorChange = (color) => {
        setColor(color.target.value);
    };

    return (
        <>
            {/* Section for Assignment 2: Counter */}
            <div className="container">
                <h2 className="title-h2">React Assignment 2: Counter</h2>
                <div>
                    <h1 className="title-h1">Counter: {count}</h1>
                    <button className="btn-style" onClick={incrementCounter}>Increment +</button>
                    <button className="btn-style" onClick={decrementCounter}>Decrement - </button>
                    <button className="btn-style" onClick={resetCounter}>Reset</button>
                </div>
            </div>

            {/* Section for Assignment 3: Pick up a Color */}
            <div className="container">
                <h2 className="title-h2">React Assignment 3: Pick up a Color </h2>
                <label htmlFor="text" className="content">Select a color from the box below:</label>
                <input type="color" className="input-color" onChange={handleColorChange}></input>
                {/* */}
                <p style={{ color: color }} className="paragraph-style">
                    {color} - This text reflects the color you selected.
                </p>
            </div>
        </>
    );
}

export default Miscellaneous;
