import React, { useState, useEffect } from "react";
import { commerce } from "./library/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
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

  // Add to Cart
  const handleUpdateCartQty = async (productId, quantity) => {
    await commerce.cart
      .update(productId, { quantity })
      .then((response) => setCart(response));
  };

  // Remove from Cart
  const handleRemoveFromCart = async (productId) => {
    await commerce.cart.remove(productId).then((response) => setCart(response));
  };

  // Empty Cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

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
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleEmptyCart={handleEmptyCart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
