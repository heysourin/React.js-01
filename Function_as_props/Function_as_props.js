import "./App.css";
import { useState } from "react";
import User from "./User";
// import Student from './Student';


function App(){

  function getData(){
    alert("Hello from app")
  }
  return (
    <div>
      <User data = {getData}/>
    </div>
  );
}

export default App;


// ________________________________________________________________________________________________________________


import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>User Componrnt</h1>
      <button onClick={props.data}>Call data function</button>
    </div>
  );
};

export default User;
