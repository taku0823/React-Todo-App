import React from "react";
import TodoItems from "./TodoItems";
import "../css/TodoList.css";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="TodoList">
      {todos.map((todo) => (
        <TodoItems task={todo.task} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
