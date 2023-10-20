import { useState } from "react";

export function useCustomCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  const decrement = () => {
    setCount((prev) => --prev);
  };

  const reset = () => {
    setCount(initialCount);
  };

  const setValue = (value) => {
    setCount(value);
  };

  return [count, increment, decrement, reset, setValue];
}


