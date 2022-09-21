import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { commerce } from '../../library/commerce'
import { ShippingState } from '../../Context/ShippingContext';



export default function Review() {
  const [total, setTotal] = useState("1 sec...")
  const [cart, setCart] = useState({})
  const { firstName, address, cardNumber} = ShippingState();
  

  // Cart items. Data retrieved includes subtotal and line items
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };


  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.line_items?.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <img src={product.image.url} height="40" width="40" alt='product_image'/>
            <ListItemText primary={product.name} secondary={product.name} />
            <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
           {cart?.subtotal == null ? total : cart?.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName}</Typography>
          <Typography gutterBottom>{address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment key={firstName}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{firstName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardNumber}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
