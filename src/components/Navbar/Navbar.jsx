import { ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/MarketplaceLogo.png";

const Navbar = ({ totalItems }) => {
  const location = useLocation();
  return (
    <div>
      <AppBar position="relative" color="inherit" sx={{ marginBottom: 1 }}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none" }}
            variant="h6"
            color="inherit"
          >
            <img src={Logo} alt="Commerce.js" height="25px" />
            Johnny's Store
          </Typography>
          <Box sx={{ display: "flex", flexGrow: 1 }} />
          {location.pathname === "/" && (
            <Box>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
