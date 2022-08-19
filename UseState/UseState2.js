import React, { useState } from "react";

const UseState2 = () => {
  const [inputValue, setInputValue] = useState("Newbie");

  const changes = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="Enter something" onChange={changes} />
      {inputValue}
    </div>
  );
};

export default UseState2;
