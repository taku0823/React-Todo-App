import React from "react";
import TodoItems from "./TodoItems";
import "../css/TodoList.css";

function TodoList({ todos, removeTodo }) {
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItems
          task={todo.task}
          key={todo.id}
          id={todo.id}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
