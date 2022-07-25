import React from "react";
import { Link } from "react-router-dom";
import Mathushan from "./Images/Mathushan.jpg";

const DisplayImage = () => {
  return (
    <div>
      <h1>Home</h1>
      <div>NSFW no PDA</div>
      <img src={Mathushan} height={500} width={500} alt="" />
      <Link to="/">
      <button className="btn btn-danger mx-3">RETURN</button>
      </Link>
    </div>
  );
};

export default DisplayImage;
