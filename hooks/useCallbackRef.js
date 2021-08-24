import { useState, useCallback } from "react";

const useCallbackRef = () => {
  const [state, setState] = useState(null);
  const ref = useCallback(
    (node) => {
      if (node !== state) setState(node);
    },
    [state]
  );

  return [state, ref];
};

export default useCallbackRef;
