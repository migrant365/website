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
import { NavLink } from "react-router-dom"; // Import NavLink

const Navbar = () => {
  const menuItems = [
    { text: "For Personal", link: "/for-personal" }, // Example link
    { text: "For Business", link: "/for-business" }, // Ensure this path is correct
    { text: "Pricing", link: "/pricing" }, // Ensure this path is correct
    { text: "About Us", link: "/about" },
  ];

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
          <NavLink to={"/"}>
            <Box className="bl-navbar__logo-container">
              <IconButton
                disableRipple
                sx={{
                  backgroundColor: "transparent", // Transparent background
                  padding: 0, // No padding
                  "&:hover": {
                    // Styles on hover
                    backgroundColor: "rgba(0, 0, 0, 0)", // Slight background on hover
                  },
                }}>
                <img src={logo} alt="Logo" className="bl-navbar__logo" />
              </IconButton>
            </Box>
          </NavLink>

          {/* Menu Section */}
          <Box className="bl-navbar__menu">
            {menuItems.map((item, index) => (
              <NavLink
                key={item.text}
                to={item.link}
                className={({ isActive }) => {
                  return isActive
                    ? "active bl-navbar__menu-item"
                    : "bl-navbar__menu-item";
                }} // Apply active class
              >
                {item.text}
                {/* // <Button variant="text" key={index} text={item.text} /> */}
              </NavLink>
            ))}
          </Box>

          {/* Login Button */}
          {/* <Box className="bl-navbar__login-btns">
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
          </Box> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
