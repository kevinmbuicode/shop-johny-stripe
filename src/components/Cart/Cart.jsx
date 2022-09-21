import { Box, Button, Container, Grid, Typography } from "@mui/material";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const EmptyCart = () => (
    <>
      <Typography variant="subtitle1">
        Your cart is empty
        <Link to="/" color="success" sx={{ textDecoration: "none" }}>
          , start adding some!
        </Link>
      </Typography>
    </>
  );

  const handleStripe = () => {
    fetch("http://localhost:4000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: cart.line_items,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  const stripe = loadStripe("pk_test_51LkO7OEM6pShu9FXtYAtfq8xHfSGXr4HvTrRAmS5nAHcH7gvv36Z3jDREgrsi7SZykHNCBZ3VDJkwrtjlFoVQBMA00wcxbEOXY")

  const serverCheckout = async () => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: cart.line_items.map((item) => {
          const cartItems = item.id;
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
              },
              unit_amount: item.subtotal.formatted,
            },
            quantity: item.quantity,
          };
        }),
      });
      await axios.post("/create-checkout-session", session.url)
    } catch (e) {
      console.log({ error: e.message });
    }
  };

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
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
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            // component={Link}
            onClick={serverCheckout}
            to="/checkout"
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
  // console.log(cart.line_items);

  if (!cart.line_items) return "Loading...";

  return (
    <Container>
      <Box sx={{ marginBottom: "1%" }} />
      <Typography variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
