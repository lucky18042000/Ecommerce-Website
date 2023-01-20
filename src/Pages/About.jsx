import React from "react";
import Navbar from "../Components/Navbar";
import Footer from '../Components/Footer'
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
      <div className="flex flex-wrap m-5  gap-5">
        <div className="w-40 lg:w-96 felx flex-wrap justify-center items-center ">
          <img  src={pic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/categorie">Buy Now </Link>
          </button>
        </div>
        <div className="w-40 lg:w-96 felx flex-wrap justify-center items-center ">
          <img src={pic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/categorie">Buy Now </Link>
          </button>
        </div>
        <div className="w-40 lg:w-96 felx flex-wrap justify-center items-center ">
          <img src={pic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/categorie">Buy Now </Link>
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
