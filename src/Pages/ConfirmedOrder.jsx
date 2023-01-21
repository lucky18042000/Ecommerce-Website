import React,{useEffect} from "react";
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import svg from '../assets/success.svg'
import { useLocation } from "react-router-dom";

function ConfirmedOrder() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname === '/confirmorder']);
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
