import React, { useState } from "react";

const UseState2 = () => {
  const [inputValue, setInputValue] = useState("Newbie");

  const changes = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input placeholder="Enter something" onChange={changes} />
      {inputValue}
    </div>
  );
};

export default UseState2;
// _____________________________________________________________________________________________________________________________________
//Another way of doing this
import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <StateWithInput />
    </div>
  );
}

function StateWithInput() {
  const [myName, setMyName] = useState("");

  function handleOnChange(text) {
    setMyName(text);
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
      <p>Hello, {myName}!</p>
    </div>
  );
}
