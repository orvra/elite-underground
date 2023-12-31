import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { CartContextProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/elite-underground">
      <CartContextProvider>
        <ScrollToTop />
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
