import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UsersCartAuth } from "../Context/UsersCartAuth";

const Shoppingcart = () => {
  const { cart, setCart, total } = useContext(UsersCartAuth);
  useEffect(() => {
    console.log(cart);
  }, []);

  return (
    <div>
      {cart?.map((item) => (
        <div
          key={item.id}
          className="w-[100vw]  pb-[20px] border-2 border-gray-400 rounded-2xl"
        >
          <img className="w-[150px] h-[100px]" src={item.image} alt=""></img>
          <div className="flex flex-col justify-center text-center ">
            <h3>{item.title}</h3>
            <h1 className="text-xl">${item.price}</h1>
          </div>
        </div>
      ))}
      <p className="text-3xl">total:-{total}</p>
    </div>
  );
};

export default Shoppingcart;
