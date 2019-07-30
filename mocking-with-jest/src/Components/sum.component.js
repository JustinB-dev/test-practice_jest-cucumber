import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1 className='test'>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    );
}
  
export default Counter;
