import React, { useState, useEffect } from 'react';
import { commerce } from './library/commerce';
import { Products, Navbar } from './components';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  // async
  const fetchProducts = async() => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  // Cart items
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart)


  return (
    <div className="App">
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
