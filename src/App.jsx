import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shipping from "./Pages/Shipping";
import { Link, Routes, Route } from "react-router-dom";
import ContactDetails from "./Pages/ContactDetails";
import Product from "./Pages/Product";
import ConfirmOrder from "./Pages/ConfirmedOrder";
import Categorie from "./Pages/Categorie";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="contactdetails" element={<ContactDetails />} />
        <Route path="confirmorder" element={<ConfirmOrder />} />
        <Route path="categorie" element={<Categorie />} />
      </Routes>
    </div>
  );
}

export default App;
