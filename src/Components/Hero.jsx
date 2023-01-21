import React from "react";
import image from "../assets/img_1.png";
function Hero() {
  return (
    <div className="hero relative flex justify-center ">
      <img className="" src={image}></img>
      <div className="flex absolute top-5 lg:top-72 justify-center  w-48 lg:w-96 flex-wrap gap-3">
        <h1 className="hero-h1 text-lg lg:text-5xl w-40">
          stylist picks beat the heat
        </h1>
        <button href="#down" className="hero-button  border-2 left-56 top-24 text-xs w-20">
          Show Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
