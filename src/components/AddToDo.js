import React, { useState } from "react";
import "./AddToDo.css";
import DisplayToDo from "./DisplayToDo";

function AddToDo() {
  const [todos, setTodos] = useState([]),
    [inputValue, setInputValue] = useState(""),
    [selectedOption, setSelectedOption] = useState("all"),
    [showText, setShowText] = useState(true);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (index, newText) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = newText;
    setTodos(updatedTodos);
  };

  function handleSettingStatus(index) {
    const updatedTodos = [...todos];
    if (updatedTodos[index].completed === true) {
      updatedTodos[index].completed = false;
      setTodos(updatedTodos);
    } else {
      updatedTodos[index].completed = true;
      setTodos(updatedTodos);
    }
    setShowText(!showText);
  }

  const filteredTodos =
    selectedOption === "completed"
      ? todos.filter((todo) => todo.completed)
      : selectedOption === "uncompleted"
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div className="render-todo">
      <form onSubmit={handleFormSubmit}>
        <div className="input">
          <input
            className="todo-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="todo-button" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
              fill="#ff6f47"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
          </button>
        </div>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
      <DisplayToDo
        todos={filteredTodos}
        onDelete={handleTodoDelete}
        onEdit={handleTodoEdit}
        onStatus={handleSettingStatus}
        showText={showText}
      />
    </div>
  );
}

export default AddToDo;
