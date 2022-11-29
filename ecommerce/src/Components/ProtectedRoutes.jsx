import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate, Navigate } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  //   const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
