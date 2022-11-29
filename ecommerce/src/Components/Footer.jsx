import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div style={{ left: "0", bottom: "0", width: "100vw" }}>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img
            src="https://www.pngfind.com/pngs/m/29-290389_e-commerce-website-logo-png-download-e-commerce.png"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ecommerce
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-black-500 ">
            <li>
              <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/career"}
                alt="sdf"
                className="mr-4 hover:underline md:mr-6"
              >
                career
              </Link>
            </li>

            <li>
              <Link to={"/contact"} className="mr-4 hover:underline md:mr-6">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/faq"} className="mr-4 hover:underline md:mr-6">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-black">
          © 2022 REACT CART . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
