import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { UsersCartAuth } from "../Context/UsersCartAuth";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const { cart, setCart, setTotal, total } = useContext(UsersCartAuth);
  const addToCart = (id, price, title, image) => {
    setTotal(total + price);
    setCart([...cart, { id, price, title, image }]);
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div>
          <img
            style={{ width: "100vw", height: "50vh" }}
            src="https://static.vecteezy.com/system/resources/previews/004/707/493/large_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div
          style={{
            marginTop: "50px",
            marginLeft: "20px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {data?.map((item) => (
            <div
              key={item.id}
              className="w-[300px] pb-[20px] border-2 border-gray-400 rounded-2xl"
            >
              <img
                className="w-[250px] h-[400px]"
                src={item.image}
                alt=""
              ></img>
              <div className="flex flex-col justify-center text-center ">
                <h3>{item.title}</h3>
                <h1 className="text-2xl">${item.price}</h1>
                <Link to={`/products/${item.id}`}>
                  <button
                    onClick={() =>
                      addToCart(item.id, item.price, item.title, item.image)
                    }
                    className="border-2 border-black rounded-xl w-[100px] "
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
