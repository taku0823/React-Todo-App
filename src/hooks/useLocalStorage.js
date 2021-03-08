import { useState, useEffect } from "react";

function useLocalStorage(key, initState) {
  const [state, setState] = useState(() => {
    const val = JSON.parse(window.localStorage.getItem(key));
    let initVal;
    try {
      initVal = val.length ? val : initState;
    } catch (err) {
      console.warn(err);
      initVal = initState;
    }
    return initVal;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);
  return [state, setState];
}

export default useLocalStorage;
