import React, { useState, useEffect } from 'react';
import { commerce } from './library/commerce';
import { Products, Navbar, Cart } from './components';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  // async
  const fetchProducts = async() => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  // Cart items. data retrieved includes subtotal and line items
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  // async to accept 2 parameters and add the item to the cart
  const handleAddToCart = async (productId, quantity) => {
    await commerce.cart.add(productId, quantity).then((response) => setCart(response));
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)

  return (
    <div className="App">
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
