import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import proimg1 from "../assets/beata-biskupicova-81IbsV021f0-unsplash.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
function Shipping() {
  

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="product-breadcums ">
          <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
              <nav
                className="bg-grey-light rounded-md w-full"
                aria-label="breadcrumb"
              >
                <ol className="list-reset flex">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-600 uppercase"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-500 mx-2">/</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-600 uppercase"
                    >
                      Shopping Cart
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
        </div>
        <div>
          <div className="pt-5">
            <ul className="hidden  lg:flex w-full justify-evenly items-center leading-6 text-xl font-bold pl-20	">
              <li>Product Img</li>
              <li>Product Name</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
          </div>
          <div className="pt-5">
            <div className="block lg:flex items-start p-4 shadow-md rounded-t ">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 flex-wrap items-start dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <ul className="grid justify-center items-center lg:flex lg:flex-wrap w-full lg:justify-evenly pl-20	">
                <li className="shipping-image">
                  <img
                    className="shipping-image"
                    src={proimg1}
                    alt=""
                    srcset=""
                  />
                </li>
                <li className="text-base leading-6">Plain White Shirt</li>
                <li className="text-2xl leading-7	" style={{ color: "#818181" }}>
                  $59.00
                </li>
                <li className="shadow px-4 py-2 flex justify-center">1</li>
                <li className="text-2xl leading-7">$59.00</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 pl-20">
            <h1 className="font-bold text-4xl leading-10">Cart Totals</h1>
            <p
              className="text-base leading-5 pb-2 flex justify-between w-56 pt-10"
              style={{ borderBottom: "1px solid #e5e7eb", color: "#818181" }}
            >
              Sub Total
              <span className="text-base leading-5 flex items-center text-end">
                $59.00
              </span>
            </p>
            <p
              className="text-base leading-5 pb-2 flex justify-between w-56 pt-5"
              style={{ borderBottom: "1px solid #e5e7eb", color: "#818181" }}
            >
              Shipping Cost
              <span className="text-base leading-5 flex items-center text-end">
                Free!
              </span>
            </p>
            <p
              className="text-base leading-5 pb-2 flex justify-between w-56 pt-5 "
              style={{ borderBottom: "1px solid #e5e7eb" }}
            >
              Total
              <span className="text-base leading-5 flex items-center text-end">
                $59.00
              </span>
            </p>

            <Link to='/contactdetails' className="order-button mt-4 uppercase">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
