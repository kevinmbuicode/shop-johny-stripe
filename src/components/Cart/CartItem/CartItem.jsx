import React from "react";
import {
  Card,
  CardMedia,
  Button,
  Typography,
  CardActions,
  CardContent,
  Box,
} from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image.url}
        alt={item.name}
      />
      <CardContent sx={{ display: "flex", justifyContent: "space-between"}}>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", gap: 1}}>
        <Box sx={{ display: "flex", gap: 1}}>
          <Button size="small" variant="contained"> - </Button>
          <Typography>{item.quantity}</Typography>
          <Button size="small" variant="contained"> + </Button>
        </Box>
        <Button variant="contained" size="small" color="error">Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
