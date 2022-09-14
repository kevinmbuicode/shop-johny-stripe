import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Cart = ({ cart }) => {
  const EmptyCart = () => {
    return (
      <>
        <Typography>Your cart is empty</Typography>
        <Button variant="contained" color="secondary">
          Add Items
        </Button>
      </>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={4}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4}>
              <div>{item.name}:{item.price.formatted_with_symbol}</div>
            </Grid>
          ))}
              <Typography variant="h5">Total: {cart.subtotal.formatted_with_symbol}</Typography>
        </Grid>
      </>
    );
  };

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <Box sx={{ marginBottom: 3 }} />
      <Typography variant="h3">Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
