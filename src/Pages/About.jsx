import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import image from "../assets/unsplash_7RIMS-NMsbc.jpg";
import pic from "../assets/pic.png";
import menspic from "../assets/mens.png";
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
      <div className="flex flex-wrap m-5 justify-center gap-5">
        <div className="w-9/12  lg:w-2/5 felx flex-wrap justify-center items-center ">
          <img src={pic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/">Buy Now </Link>
          </button>
        </div>
        <div className="w-9/12 lg:w-2/5 felx flex-wrap justify-center items-center ">
          <img src={menspic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/">Buy Now </Link>
          </button>
        </div>
        {/* <div className="w-40 lg:w-96 felx flex-wrap justify-center items-center ">
          <img src={pic} alt="loading" srcset="" />
          <button className="box ">
            <Link to="/categorie">Buy Now </Link>
          </button>
        </div> */}
      </div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">
              The Founders
            </h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p> */}
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/200x200"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    HM Jawad
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/201x201"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Furqan Abid
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/202x202"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Abdullah Ah
                  </h2>
                </div>
              </div>
            </div>
            <div class="p-4 lg:w-1/4 md:w-1/2">
              <div class="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="https://dummyimage.com/203x203"
                />
                <div class="w-full">
                  <h2 class="title-font font-medium text-lg text-gray-900">
                    Abrar Khan
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  Once we ordered some accessories items and we got the products
                  delivered in our doorstep, the customer support was super
                  helpful and they answered all my queries.
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://source.unsplash.com/random"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      Tiffany
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  I ordered 5 shirts from them and received them in no time. The
                  customer support was awesome!
                </p>
                <a class="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://source.unsplash.com/random"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                      James
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
