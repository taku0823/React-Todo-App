import React from "react";
import useFormState from "../hooks/useFormState";
import "../css/EditingForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function EditingForm({ task, id, editTodo }) {
  const [value, handleChange, reset] = useFormState(task);

  return (
    <form
      className="EditingForm"
      onSubmit={(e) => {
        e.preventDefault();
        reset();
        editTodo(value, id);
      }}
    >
      <label>
        <input type="text" value={value} onChange={handleChange} autoFocus />
      </label>
      <button className="edit" type="submit">
        <FontAwesomeIcon icon={faEdit} />
      </button>
    </form>
  );
}

export default EditingForm;
