import React, { useState } from "react";

// Define props type
type CounterProps = {
  initialValue: number;
};

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  // useState with type inference (initialValue is number)
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ marginRight: "0.5rem" }}>
        ➕ Increment
      </button>
      <button onClick={decrement}>➖ Decrement</button>
    </div>
  );
};

export default Counter;
