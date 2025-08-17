import { useState } from "react";

export function Tiriye() {
  let [count, setCount] = useState(0); // start with 0
  

  return (
    <div style={{backgroundColor: "yellow"}}>
      <h1 style={{color: "blue"}}>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}


