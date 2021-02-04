import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "../css/TodoApp.css";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initialState = [
    {
      task: "I don't know what to do...",
      id: uuidv4(),
      completed: false,
    },
  ];
  const items = JSON.parse(window.localStorage.getItem("items"));
  const state = items.length ? items : initialState;
  const [todos, setTodos] = useState(state);

  useEffect(() => {
    window.localStorage.setItem("items", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newText) => {
    if (newText === "") {
      return;
    }
    setTodos([...todos, { task: newText, id: uuidv4(), completed: false }]);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (newTask, id) => {
    if (newTask === "") {
      return;
    }
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="TodoApp">
      <Form addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoApp;
