import { useState, useEffect } from "react";

function useLocalStorage(key, initalState) {
  const items = JSON.parse(window.localStorage.getItem(key));
  const [state, setState] = useState(items.length ? items : initalState);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
