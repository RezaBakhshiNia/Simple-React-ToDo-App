import React, { useState } from "react";
import "./DisplayToDo.css";

function DisplayToDo({ todos, onDelete, onEdit, onStatus, showText }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>
            <button onClick={() => onDelete(index)}>Delete</button>
            <button
              onClick={() => onEdit(index, prompt("Edit todo:", todo.text))}
            >
              Edit
            </button>
            <button
              onClick={() => {
                onStatus(index);
              }}
            >
              {todo.completed ? "Undone" : "Done"}
            </button>
            <div className="todo">
              <p className={`todo-text ${todo.completed && "completed"}`}>
                {todo.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayToDo;
