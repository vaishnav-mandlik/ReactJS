import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    if (email === "vaishnav@mail.com" && password === "vaishnav") {
      setIsAuth(true);
      navigate("/shoppingcart");
    }
    if (isAuth) {
      console.log("17");
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={submitHandler}>
        <input
          className="border-2 p-2 rounded-xl border-black w-[250px]"
          type="text"
          placeholder="vaishnav@mail.com"
        />
        <br />
        <br />
        <input
          className="border-2 p-2 rounded-xl border-black w-[250px]"
          type="password"
          placeholder="password - vaishnav"
        />
        <br />
        <br />
        <button
          className="border-2 p-2 rounded-xl border-black w-[100px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
