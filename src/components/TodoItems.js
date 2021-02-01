import React, { useState } from "react";
import EditingForm from "./EditingForm";
import "../css/TodoItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

function TodoItems(props) {
  const { task, id, completed, removeTodo, toggleTodo, editTodo } = props;

  const [isEditing, editingForm] = useState(false);

  const handleClick = () => {
    editingForm(!isEditing);
  };

  return (
    <li className={`TodoItems${isEditing ? " isEditing" : ""}`}>
      {isEditing ? (
        <EditingForm
          editTodo={editTodo}
          task={task}
          id={id}
          isEditing={isEditing}
          editingForm={editingForm}
        />
      ) : (
        <>
          <div className="left">
            <button
              className={`check${completed ? " isChecked" : ""}`}
              onClick={() => toggleTodo(id)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <p className={`task${completed ? " isChecked" : ""}`}>{task}</p>
          </div>
          <div className="right">
            <button className="delete" onClick={() => removeTodo(id)}>
              <FontAwesomeIcon className="delete_icon" icon={faTrash} />
            </button>
            <button className="edit" onClick={handleClick}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItems;
