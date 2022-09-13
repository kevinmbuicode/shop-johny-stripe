import { Grid } from '@mui/material';
import React from 'react';
import Product from './Product/Product';

const products = [
    {id: 1, name: "Shoes", description: "Running Shoes", price: "$ 5", image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-running-shoes-1648630488.jpg'},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: "$ 10", image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80'},
    {id: 2, name: "Macbook", description: "Apple Macbook", price: "$ 10", image:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80'},
]

const Products = () => {
  return (
    <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>
            </Grid>
        ))}
        </Grid>
    </main>
  )
}

export default Products;