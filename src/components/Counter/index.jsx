// Counter.js

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{
        color: "white",
    }}>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;