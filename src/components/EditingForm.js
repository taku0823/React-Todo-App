import React, { useState } from "react";
import "../css/EditingForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditingForm({ task, id, editTodo, isEditing, editingForm }) {
  const [newValue, setNewValue] = useState(task);

  const handleChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <form
      className="EditingForm"
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(newValue, id);
        editingForm(!isEditing);
      }}
    >
      <label>
        <input type="text" value={newValue} onChange={handleChange} autoFocus />
      </label>
      <button className="edit" type="submit">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </form>
  );
}

export default EditingForm;
