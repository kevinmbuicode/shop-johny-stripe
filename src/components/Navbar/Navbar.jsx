import { ShoppingCart } from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import Logo from '../../assets/MarketplaceLogo.png'

const Navbar = () => {
  return (
    <div>
        <AppBar position='relative' color='inherit' sx={{marginBottom: 1}}>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    <img src={Logo} alt="Commerce.js" height="25px"/>
                    Johnny's Store
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: 1}}/>
                <Box>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar;