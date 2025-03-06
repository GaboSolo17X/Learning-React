import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { Cart } from "./assets/components/Cart.jsx";
import { Navbars } from "./assets/components/Navbar.jsx";
import { Dashboard } from "./assets/components/Dashboard.jsx";
import { store } from "./store/index.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <App /> */}

        <Navbars />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/carrito" element={<Cart />}></Route>
            <Route path="/*" element={<Navigate to="/" />}></Route>
          </Routes>
        </div>
        {/* <Products/> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
