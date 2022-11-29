import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-2 flex w-full h-14 float-right flex-row-reverse ">
      <div className="flex mt-2 mr-10">
        <Link to={"/"} className="font-semibold text-lg mr-[10px]">
          Home
        </Link>
        <Link to={"/products"} className="font-semibold  text-lg mr-[10px]">
          Products
        </Link>

        <Link to={"/contact"} className="font-semibold  text-lg mr-[10px]">
          Contact
        </Link>
        <Link to={"/about"} className="font-semibold  text-lg mr-[10px]">
          About
        </Link>
        <Link to={"/login"} className="font-semibold  text-lg mr-[10px]">
          Login
        </Link>
        <Link to={"/shoppingcart"} className="font-semibold  text-lg mr-[10px]">
          <img
            className="w-[40px]"
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
