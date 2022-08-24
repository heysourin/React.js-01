import "./App.css";
import { useState } from "react";
// import Student from './Student';
function App() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [tnc, setTnc] = useState(false);

  function getFormData(e) {
    e.preventDefault(); //prevents auto reload of the page when pressed 'submit' type button
    console.log(name, tnc, interest);
  }

  return (
    <div className="App">
      <h1>Form Bharo</h1>
      <form onSubmit={getFormData}> //have to create a function named getFormData
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option >Marvel</option>
          <option>DC</option>
          <option>Imagine dragon</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.value)} />
        <span>Accept Karo😡</span>
        <br />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
