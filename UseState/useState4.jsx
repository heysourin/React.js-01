import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <StateArray />
    </div>
  );
}

function StateArray() {
  const [fruitsArr, setFruitsArr] = useState([]);
  const [currentFruit, setCurrentFruit] = useState("");

  function updateCurrentFruit(e) {
    const newFruit = (e.target.value)
    setCurrentFruit(newFruit);
  }

  function addFruitToArray() {
    // The spread operator `...fruits` adds all elements
    // from the `fruits` array to the `newFruits` array
    // and then we add the `currentFruit` to the array as well
    const newFruits = [...fruitsArr, currentFruit];
    setFruitsArr(newFruits);
  }

  return (
    <div>
      <input type="text" onChange={updateCurrentFruit} />
      <button onClick={addFruitToArray}>Add Fruit</button>

      <ul>
        {fruitsArr.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
