import React, { useState } from "react";

const UseReducer1 = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click here
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducer1;


//!for using more than one state change, using react reducer is most helpful