import React from "react";
import logo from "../../logo.png";
import "../../styles/navbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Button from "../button";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuItems = [
    { text: "For Personal", link: "" },
    { text: "For Business", link: "" },
    { text: "Pricing", link: "" },
    { text: "About Us", link: "" },
  ];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar className="bl-navbar" position="static">
        <Toolbar className="bl-navbar__toolbar">
          {/* Logo Section */}
          <Box className="bl-navbar__logo-container">
            <IconButton>
              <img src={logo} alt="Logo" className="bl-navbar__logo" />
            </IconButton>
          </Box>

          {/* Menu Section */}
          <Box className="bl-navbar__menu">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="text"
                text={item.text}
                className="bl-navbar__menu-item"
              />
            ))}
          </Box>

          {/* Login Button */}
          <Box className="bl-navbar__login-btns">
            <Button
              variant="outlined"
              text="Login"
              className="bl-navbar__login-btn"
            />
            <Button
              variant="contained"
              text="Sign Up"
              className="bl-navbar__login-btn bl-navbar__login-btn--contained"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
