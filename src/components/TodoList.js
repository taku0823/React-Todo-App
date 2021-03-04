import React from "react";
import TodoItems from "./TodoItems";
import "../css/TodoList.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TodoList({
  todos,
  removeTodo,
  toggleTodo,
  editTodo,
  toggleEditingForm,
}) {
  return (
    <TransitionGroup className="TodoList" component={"ul"}>
      {todos.map((todo) => (
        <CSSTransition key={todo.id} classNames="fade" timeout={300}>
          <TodoItems
            task={todo.task}
            key={todo.id}
            id={todo.id}
            completed={todo.completed}
            showEditingForm={todo.showEditingForm}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            toggleEditingForm={toggleEditingForm}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default TodoList;
