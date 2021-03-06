import { useState, useEffect } from "react";

function useLocalStorage(key, initState) {
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(initState));
    } catch (e) {
      val = initState;
    }
    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
