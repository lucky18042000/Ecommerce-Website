import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
function ContactDetails() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="product-breadcums ">
          <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-lg navbar-light">
            <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
              <nav
                class="bg-grey-light rounded-md w-full"
                aria-label="breadcrumb"
              >
                <ol class="list-reset flex">
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 hover:text-gray-600 uppercase"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <span class="text-gray-500 mx-2">/</span>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-500 hover:text-gray-600 uppercase"
                    >
                      CheckOut
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
        </div>
        <div className="contact-details_billing-details p-10">
          <h1 className="font-bold leading-10	text-4xl mb-5">Billing Details</h1>
          <form className="">
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="Name"
                id="email"
                class="shadow-sm bg-gray-50 border-x-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="eg.Rohit"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street Address
              </label>
              <input
                type="Address"
                id="email"
                class="shadow-sm bg-gray-50 border-x-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="eg.Town Hall London"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Town/City
              </label>
              <input
                type="Address"
                id="email"
                class="shadow-sm bg-gray-50 border-x-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="eg. London"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="number"
                id="email"
                class="shadow-sm bg-gray-50 border-x-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="00-111-222-333"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border-x-text text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            {/* <button
              type="submit"
              class="order-button text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-2/4  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button> */}
          </form>
          <div className="yourorder">
            <div className="pt-10 pl-5 shadow-md pb-8">
              <h1 className="font-bold text-4xl leading-10">Your Order</h1>
              <p
                className="text-base leading-5 pb-2 flex justify-between w-3/4 pt-10"
                style={{ borderBottom: "1px solid #e5e7eb"}}
              >
                Product
                <span className="text-base leading-5 flex items-center text-end">
                 Total
                </span>
              </p>
              <p
                className="text-base leading-5 pb-2 pl-5 flex justify-between w-3/4 pt-5"
                style={{ borderBottom: "1px solid #e5e7eb", color: "#818181" }}
              >
                Plain White Shirt
                <span className="text-base leading-5 flex items-center text-end text-primary">
                $59.00
                </span>
              </p>
              <p
                className="text-base leading-5 pb-2 flex justify-between w-3/4 pt-5 "
                style={{ borderBottom: "1px solid #e5e7eb", color: "#818181" }}
              >
                Sub Total
                <span className="text-base leading-5 flex items-center text-end">
                  $59.00
                </span>
              </p>
              <p
                className="text-base leading-5 pb-2 flex justify-between w-3/4 pt-5 "
                style={{ borderBottom: "1px solid #e5e7eb" }}
              >
                Grand Total
                <span className="text-base leading-5 flex items-center text-end">
                  $59.00
                </span>
              </p>
            </div>
          </div>
          <Link to='/confirmorder' className="order-button mt-4 uppercase">
              Place Order
            </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactDetails;
