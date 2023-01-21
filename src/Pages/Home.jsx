import React, { useState, useEffect } from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import Cards from "../Components/Cards";
import data from "./data";
import { useLocation } from "react-router-dom";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3f7fb41c9amsh15ce7cb2af9827bp1e5041jsn2ddf53c2094b",
    "X-RapidAPI-Host": "kohls.p.rapidapi.com",
  },
};

function Home() {
  const [cards, setCards] = useState([]);
  const [popularCards, setPopularCards] = useState([]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname === '/']);

  //Womens Category
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
      .then((res) => res.json())
      .then((response) => {
        setCards(response);
      })
      .catch((err) => console.error(err));
  }, []);
  // mens Category
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/men's clothing`, options)
      .then((res) => res.json())
      .then((response) => {
        setPopularCards(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const cardlistwomens = cards.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  const cardlistmens = popularCards.map((item) => {
    return <Cards key={item.id} {...item} />;
  });
  console.log(cards);
  return (
    <div className="home">
      <Navbar active={false} />
      <Hero />
      <h1 class="mt-10 sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
        Discover NEW Arrivals
        <br class="block" />
        <span className="text-primary text-xl leading-10">
          Recently added shirts!
        </span>
      </h1>
      <div id="down" className="cards-main justify-center">{cardlistwomens}</div>
      <section class="text-gray-600 body-font">
        <div class="container py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4  -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/4 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-extrabold mb-2">
                  Free Shipping
                </h2>
                <p class="leading-relaxed text-base text-light">
                  Enjoy free shipping on all orders above $100
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-extrabold mb-2">
                  SUPPORT 24/7
                </h2>
                <p class="leading-relaxed text-base text-light">
                  Our support team is there to help you for queries
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-extrabold mb-2">
                  30 DAYS RETURN
                </h2>
                <p class="leading-relaxed text-base text-light">
                  Simply return it within 30 days for an exchange.
                </p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex">
              <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-extrabold mb-2">
                  100% PAYMENT SECURE
                </h2>
                <p class="leading-relaxed text-base text-light">
                  Our payments are secured with 256 bit encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1 class="mt-10 sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
        Top Sellers
        <br class="block" />
        <span className="text-primary text-xl leading-10">
          Browse our top-selling products
        </span>
      </h1>
      <div className="cards-main justify-center">{cardlistmens}</div>
      <Footer />
    </div>
  );
}

export default Home;
