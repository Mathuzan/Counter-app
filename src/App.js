import React, { useState } from "react";
import display_Image from "./display_Image";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter APP</h1>
          <div className="my-5">
            <h2 className="my-5">{count}</h2>
            <button className="btn btn-success mx-3" onClick={() => setCount(count + 1)}>Increment</button>
            <button className="btn btn-danger mx-3" onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} disabled={count === 0}>Reset</button>
            <button className="btn btn-secondary mx-3" onClick={() => setCount(0)} >Display Image</button> 
          </div>
          <h2>Navigate to the images</h2>
          <div className="navbar-header">
          <ul className="navbar-header">
            <li><Link to={"/display_Images"}>display_Image</Link></li>
          </ul>
          </div>
        </div>
      </div>
  </div>
  );
}

export default App;
