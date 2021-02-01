import React, { useState } from "react";
import "../css/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Form({ addTodo }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}
    >
      <label>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="What do you need to do?"
        />
      </label>
      <button type="submit">
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        Add New Todo
      </button>
    </form>
  );
}

export default Form;
