import React, { useState, useEffect } from "react";
import { commerce } from "./library/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // async
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  // Cart items. data retrieved includes subtotal and line items
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // async to accept 2 parameters and add the item to the cart
  const handleAddToCart = async (productId, quantity) => {
    await commerce.cart
      .add(productId, quantity)
      .then((response) => setCart(response));
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
