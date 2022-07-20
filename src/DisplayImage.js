import React from "react";
import Mathushan from './Images/Mathushan.jpg';


const DisplayImage = () => {
    return (
      <div>
        <h1>Home</h1>
        <div>Have some Content</div>
        <img src={ Mathushan } alt =""/>
      </div>
    )
  }

  export default DisplayImage;