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

const Product = ({ product, onAddToCart }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 200}}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price.formatted_with_symbol}
          </Typography>
        </Box>
        <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="text.secondary" />
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'flex-end'}}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
