import React, { useState, useEffect, useContext } from "react";
import { commerce } from "../library/commerce";
import { createContext } from "react";

const Shop = createContext();

const CartContext = ({ children }) => {
  const [review, setReview] = useState({});

  // Cart items. Data retrieved includes subtotal and line items
  const fetchReview = async () => {
    setReview(await commerce.cart.retrieve());
  };


  useEffect(() => {
    fetchReview();
  }, []);
  return <Shop.Provider value={{ review }}>{children}</Shop.Provider>;
};

export default CartContext;

export const ShopState = () => {
    return useContext(Shop);
}
