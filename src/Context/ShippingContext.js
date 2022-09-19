import React, { useState, useContext } from "react";
//import { commerce } from "../library/commerce";
import { createContext } from "react";

const Ship = createContext();

const CartContext = ({ children }) => {
  const [shippingDetails, setShippingDetails] = useState();
  const [firstName, setFirstName] = useState("John");
  const [cardNumber, setCardNumber] = useState(4243544252562);
  const [lastName, setLastName] = useState("Doe");
  const [address, setAddress] = useState("My Home Town");



  return (
    <Ship.Provider value={{ shippingDetails, firstName, lastName, address, cardNumber }}>
      {children}
    </Ship.Provider>
  );
};

export default CartContext;

export const ShippingState = () => {
  return useContext(Ship);
};
