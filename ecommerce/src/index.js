import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UsersCartAuthProvider } from "./Context/UsersCartAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <UsersCartAuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersCartAuthProvider>
  </AuthContextProvider>
);
