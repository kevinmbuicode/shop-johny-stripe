import { Box, Button, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";

const Cart = ({ cart }) => {


  const EmptyCart = () => (
      <>
        <Typography variant="subtitle1">Your cart is empty, start adding some!</Typography>
        <Button variant="contained" color="secondary">
          Add Items
        </Button>
      </>
    );

  const FilledCart = () => (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <div>
                {item.name}:{item.price.formatted_with_symbol}
              </div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: '5%',flexDirection: "column"}}>
          <Typography variant="h4">
            Total: {cart.subtotal.formatted_with_symbol}
          </Typography>
          <Box sx={{ display: "flex", gap: 1}}>
            <Button
              variant="contained"
              color="secondary"
              size="small"
            >
              Empty Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </>
    );

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <Box sx={{ marginBottom: '5%' }} />
      <Typography variant="h4">Your Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
