import "../css/_miscellaneous.scss";
import { useState } from "react";

// Miscellaneous component
function Miscellaneous() {
    // Counter state initialized with 0
    const [count = 0, setCount] = useState();

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

    return (
        <>
            {/* Section for Assignment 2: Counter */}
            <div className="container">
                <h2 className="title-h2">React Assignment 2</h2>
                <div className="counter">
                    <h1 className="title-h1">Counter: {count}</h1>
                    <button className="btn-style" onClick={incrementCounter}>Increment +</button>
                    <button className="btn-style" onClick={decrementCounter}>Decrement - </button>
                    <button className="btn-style" onClick={resetCounter}>Reset</button>
                </div>
            </div>

            {/* Section for Assignment 3: Placeholder */}
            <div className="container">
                <h2 className="title-h2">React Assignment 3</h2>
            </div>
        </>
    );
}

export default Miscellaneous;
