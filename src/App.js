import React, { useState, useEffect } from 'react';
import { commerce } from './library/commerce';
import { Products, Navbar } from './components';


function App() {
  const [products, setProducts] = useState([]);

  // async
  const fetchProducts = async() => {
    const {data} = await commerce.products.list();
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <div className="App">
      <Navbar/>
      <Products products={products}/>
    </div>
  );
}

export default App;
