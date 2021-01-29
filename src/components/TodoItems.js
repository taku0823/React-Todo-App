import React from "react";
import "../css/TodoItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function TodoItems({ task, id, removeTodo }) {
  return (
    <li className="TodoItems">
      <p>{task}</p>
      <div className="icons">
        <button className="edit">
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="delete" onClick={() => removeTodo(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
}

export default TodoItems;
