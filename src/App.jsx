import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shipping from './Pages/Shipping'
import { Link, Routes, Route } from "react-router-dom";
import ContactDetails from './Pages/ContactDetails'
import Product from "./Pages/Product";
import ConfirmOrder from './Pages/ConfirmedOrder'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product" element={<Product />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="contactdetails" element={<ContactDetails />} />
        <Route path="confirmorder" element={<ConfirmOrder />} />
      </Routes>
    </div>
  );
}

export default App;
