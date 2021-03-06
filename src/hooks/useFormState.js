import { useState } from "react";

function useFormState(initState) {
  const [state, setState] = useState(initState);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const reset = () => {
    setState("");
  };

  return [state, handleChange, reset];
}

export default useFormState;
