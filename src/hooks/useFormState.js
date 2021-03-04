import { useState } from "react";

function useFormState(initialState) {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const reset = () => {
    setState("");
  };

  return [state, handleChange, reset];
}

export default useFormState;
