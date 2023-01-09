import React from "react";
import Navbar from "../Components/Navbar";
import image from "../assets/unsplash_7RIMS-NMsbc.jpg";
import pic from "../assets/pic.png";
import { Link, Routes, Route } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about-head relative">
        <h1 className="absolute md:text-5xl	uppercase text-text text-lg top-16 md:top-56 lg:top-56 lg:text-5xl	">
          About Northstar
        </h1>
        <img className="w-full" src={image} alt="loading" srcset="" />
      </div>
      <div className="p-20 relative">
        <button className="uppercase absolute border-2 border-text bg-text rounded bottom-40 left-1/4"><Link to="/product">Buy Now </Link></button>
        <img src={pic} alt="loading" srcset="" />
      </div>
    </div>
  );
}

export default About;
