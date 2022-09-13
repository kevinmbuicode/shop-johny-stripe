import { AddShoppingCart } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Product = ({ product }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 200}}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
