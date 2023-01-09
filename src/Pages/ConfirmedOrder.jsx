import React from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import svg from '../assets/success.svg'

function ConfirmedOrder() {
  return (
    <div className="confiremedorder">
      <Navbar/>
      <div className="p-52 ">
      <div>
        <img className="w-52 " src={svg} alt="" />
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ConfirmedOrder;
