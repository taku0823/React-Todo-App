import { useState, useEffect } from "react";

function useLocalStorage(key, initState) {
  const [state, setState] = useState(() => {
    const val = JSON.parse(window.localStorage.getItem(key));
    return val.length ? val : initState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
