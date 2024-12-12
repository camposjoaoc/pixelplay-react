import "../css/_miscellaneous.scss";
import { useState } from "react";

// Miscellaneous component
function Miscellaneous() {
    // Counter state initialized with 0
    const [count, setCount] = useState(0);

    // Color state initialized with black color
    const [color, setColor] = useState("#000000");

    // Task Manager states
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    // Increment the counter
    const incrementCounter = () => {
        setCount((prevCount) => prevCount + 1);
    };

    // Decrement the counter if greater than 0
    const decrementCounter = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
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

    // Task Manager functions
    const addTask = () => {
        if (task.trim() === '') return; // Prevent adding empty tasks
        setTasks([...tasks, task]);
        setTask(''); // Clear input field
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
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

            {/* Section for Task Manager */}
            <div className="container">
                <h2 className="title-h2">React Assignment 4: Task Manager</h2>
                <div>
                    {/* Input field for entering a new task */}
                    <input
                        type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="Enter a task"
                        className="input-style"
                    />
                    {/* Button to add a new task */}
                    <button onClick={addTask} className="btn-style">Add Task</button>
                </div>
                <ul className="task-list">
                    {/* Render the list of tasks */}
                    {tasks.map((t, index) => (
                        <li key={index} className="task-item">
                            <span>{t}</span>
                            {/* Button to remove a task */}
                            <button
                                onClick={() => removeTask(index)}
                                className="btn-style remove-btn"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Miscellaneous;
