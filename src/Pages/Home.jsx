import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About from './About'
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <Navbar active={(false)}/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home
