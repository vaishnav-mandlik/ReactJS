import React, { createContext, useState } from "react";

export const UsersCartAuth = createContext();

export const UsersCartAuthProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <UsersCartAuth.Provider value={{ cart, setCart, setTotal, total }}>
      {children}
    </UsersCartAuth.Provider>
  );
};
