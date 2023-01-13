import React from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import svg from '../assets/success.svg'

function ConfirmedOrder() {
  return (
    <div className="confiremedorder">
      <Navbar/>
      <div className="p-9 ">
      <div className="flex items-center justify-evenly">
        <img className="w-52 " src={svg} alt="" />
        <h1 className="text-4xl">Order Placed</h1>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ConfirmedOrder;
