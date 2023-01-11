import React from 'react'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import About from './About'
import { Routes, Route } from "react-router-dom";
import Cards from '../Components/Cards'
import data from './data'

function Home() {

  const cards= data.map((item)=>{
    return<Cards key={data.id} {...item}/>
  })

  return (
    <div className='home'>
      <Navbar active={(false)}/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home
