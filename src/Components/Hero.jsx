import React from "react";
import image from "../assets/img_1.png";
function Hero() {
  return (
    <div className="hero relative">
      <h1 className="hero-h1 lg:left-1/3 lg:top-64 lg:text-5xl lg:w-2/5 left-2/4 top-14 text-sm w-40">stylist picks beat the heat</h1>
      <button className="hero-button lg:left-2/4 lg:top-96 lg:text-2xl lg:w-60 border-2 left-56 top-24 text-xs w-20">Show Now</button>
      <img className="w-full" src={image}></img>
    </div>
  );
}

export default Hero;
