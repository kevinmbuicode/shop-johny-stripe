import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import React from "react";

const Cart = ({ cart }) => {
  const EmptyCart = () => (
    <>
      <Typography variant="subtitle1">
        Your cart is empty
        <Link to="/" color="success" sx={{ textDecoration: "none"}}>
          , start adding some!
        </Link>
      </Typography>
    </>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4">
          Total: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="contained" color="secondary" size="small">
            Empty Cart
          </Button>
          <Button variant="contained" color="primary" size="small">
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <Box sx={{ marginBottom: "5%" }} />
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart 
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
