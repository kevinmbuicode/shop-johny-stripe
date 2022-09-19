import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShippingState from "./Context/ShippingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ShippingState>
      <App />
    </ShippingState>
  </React.StrictMode>
);
