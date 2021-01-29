import React, { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "../css/TodoApp.css";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialTodos = [
    { task: "Buy something new", id: uuidv4(), completed: false },
    { task: "Finish my boring job", id: uuidv4(), completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newText) => {
    if (newText === "") {
      return;
    }
    setTodos([...todos, { task: newText, id: uuidv4(), completed: false }]);
  };
  return (
    <div className="TodoApp">
      <Form addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
