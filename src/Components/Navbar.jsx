import React from "react";
import { useState, useEffect, useRef } from "react";
import { GoSearch } from "../../node_modules/react-icons/go";
import { CgProfile } from "../../node_modules/react-icons/cg";
import { FiShoppingBag } from "../../node_modules/react-icons/fi";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(true);

  function toggle() {
    setMenuOpen((prevmenu) => !prevmenu);
  }
  const [openSearch, setOpenSearch] = useState(false);
  let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
      let maybeHandler = (event) => {
        if (domNode.current) {
          if (!domNode.current.contains(event.target)) {
            handler();
          }
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };
  let domNode = useClickOutside(() => {
    setOpenSearch(false);
  });
  
  return (
    <div className="navbar shadow-md ">
      <div
        className={
          props.active
            ? "navbar-topinfo justify-center hidden"
            : "navbar-topinfo flex justify-center "
        }
      >
        Free Shipping & Returns On All US Orders
      </div>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0  dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a className="flex items-center">
            <span className="self-center text-4xl font-normal whitespace-nowrap leading-10 dark:text-white">
              NorthStar
            </span>
          </a>
          <div className="flex md:order-2">
            <div className="flex gap-5">
              <GoSearch
                onClick={() => {
                  setOpenSearch(!openSearch);
                }}
                data-modal-target="default"
                data-modal-toggle="defaultModal"
                className="cursor-pointer self-center"
              ></GoSearch>
              {/* <!-- Main modal --> */}
              <div
                ref={domNode}
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className={
                  openSearch
                    ? "fixed  z-50  w-full p-4 overflow-x-hidden overflow-y-auto inset-x-0 top-20 bottom-auto  md:inset-y-20 md:inset-x-1/4 h-modal md:h-24"
                    : "fixed  z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-x-0 inset-y-20 md:inset-y-20 md:inset-x-1/4 h-modal md:h-24"
                }
              >
                <div className="relative w-full h-24 max-w-2xl md:h-auto">
                  {/* <!-- Modal content --> */}
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* <!-- Modal header --> */}

                    <form>
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search Mockups, Logos..."
                          required
                        />
                        <button
                          type="submit"
                          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <CgProfile className="cursor-pointer self-center"></CgProfile>
              <Link to='/shipping'>
              <FiShoppingBag className="cursor-pointer self-center"></FiShoppingBag>
              </Link>
            </div>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              menuOpen
                ? "items-start justify-between hidden w-full md:flex md:w-auto md:order-1"
                : "items-start justify-between  w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to="/about">About</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  <Link to="/contact">Contact Us</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
