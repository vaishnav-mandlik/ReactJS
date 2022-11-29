import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import About from "./About";
import Contact from "./Contact";
import Faq from "./Faq";
import Home from "./Home";
import Login from "./Login";
import Products from "./Products";
import Shoppingcart from "./Shoppingcart";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<h1>Products</h1>}></Route>
      <Route path="/products/:id" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/faq" element={<Faq />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/shoppingcart"
        element={
          <ProtectedRoutes>
            <Shoppingcart />
          </ProtectedRoutes>
        }
      ></Route>
      <Route path="*" element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
  );
};

export default AllRoutes;
