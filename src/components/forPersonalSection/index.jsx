import React from "react";
import {
  Avatar,
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Button from "../button";
import "../../styles/personalSection.css"; // Import the external CSS file

const ForPersonalSection = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={6} className="bl-personal-section">
        <Grid item xs={12} sm={5} md={5}>
          <Box className="bl-personal-section__testimonial">
            <Box className="bl-personal-section__background"></Box>
            <Box className="bl-personal-section__testimonial-arrow bl-personal-section__testimonial-arrow--left"></Box>
            <Box className="bl-personal-section__testimonial-arrow bl-personal-section__testimonial-arrow--right"></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} md={7}>
          <Box className="bl-personal-section__content">
            <Typography
              variant="subtitle1"
              className="bl-personal-section__subtitle"
              textTransform="uppercase">
              For Personal
            </Typography>
            <Typography variant="h2" className="bl-personal-section__title">
              Innovative Web Solutions, Tailored to Your Business
            </Typography>
            <Box className="bl-personal-section__text-container">
              <Typography className="bl-personal-section__text">
                Delivering customized, user-focused websites designed to drive
                growth and elevate your brand in the digital space.
              </Typography>
            </Box>
            <Box className="bl-personal-section__button-container">
              <Button
                variant="contained"
                text="Get Started"
                className="bl-personal-section__login-btn bl-personal-section__login-btn--contained"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForPersonalSection;
