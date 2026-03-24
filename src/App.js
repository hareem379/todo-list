import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return; // prevent empty tasks

    setList([...list, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>Todo List</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter your task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {list.length === 0 ? (
            <p className="empty">No tasks yet </p>
          ) : (
            list.map((item, index) => (
              <li key={index} className="task-item">
                <span>{item}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;