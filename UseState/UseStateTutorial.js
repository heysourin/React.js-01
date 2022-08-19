import React, {useState} from 'react'

const UseStateTutorial = () => {
  const [counter, setCounter] = useState(0);

  const increament = () =>{
    setCounter(counter + 1);
  }

  return (
    <div>
      {counter}
      <button onClick={increament}>Click</button>
    </div>
  )
}

export default UseStateTutorial