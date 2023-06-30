import React, { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <AddToDo />
    </div>
  );
}

export default App;
