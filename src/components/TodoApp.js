import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import useLocalStorage from "../hooks/useLocalStorage";
import "../css/TodoApp.css";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const initState = [
    {
      task: "I don't know what to do...",
      id: uuidv4(),
      completed: false,
      showEditingForm: false,
    },
  ];

  const [todos, setTodos] = useLocalStorage("items", initState);

  const addTodo = (newText) => {
    if (newText === "") return;
    setTodos([
      ...todos,
      { task: newText, id: uuidv4(), completed: false, showEditingForm: false },
    ]);
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
    let updatedTodos;

    if (newTask === "") {
      updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, showEditingForm: false } : todo
      );
    } else {
      updatedTodos = todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newTask, showEditingForm: false }
          : todo
      );
    }
    setTodos(updatedTodos);
  };

  const toggleEditingForm = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, showEditingForm: true }
        : { ...todo, showEditingForm: false }
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
        toggleEditingForm={toggleEditingForm}
      />
    </div>
  );
}

export default TodoApp;
