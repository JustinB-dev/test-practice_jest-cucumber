import React, { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

    if(count >= 10){
      window.alert('Counter has reached the limit and will be reset to 0.');
      setCount(0);
    }
  }
  
    return (
      <div>
        <h1 className='test'>{count}</h1>
        <button onClick={handleClick}>
          Click Me
        </button>
      </div>
    );
}
  
export default Counter;
