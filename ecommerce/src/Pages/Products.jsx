import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div>
      <div
        key={data.id}
        className="w-[100vw] flex flex-row pb-[20px] border-2 border-gray-400 rounded-2xl"
      >
        <img className="w-[250px] h-[400px]" src={data.image} alt=""></img>
        <div className="ml-[30vw]  flex flex-col justify-center text-center ">
          <h3>{data.title}</h3>
          <h1 className="text-2xl mt-[10%]">${data.price}</h1>
          <Link to={`shoppingcart`}>
            <button className="border-2  mt-[10%] border-black rounded-xl w-[100px] ">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
