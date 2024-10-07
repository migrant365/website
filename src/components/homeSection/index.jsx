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
import "../../styles/homeSection.css"; // Import the external CSS file

const HomeSection = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} className="bl-home-section">
        <Grid item xs={12} sm={7} md={7}>
          <Box className="bl-home-section__content">
            <Typography
              variant="subtitle1"
              className="bl-home-section__subtitle"
              textTransform="uppercase"
              component={"h2"}>
              Peace of mind for your business
            </Typography>
            <Typography
              variant="h2"
              className="bl-home-section__title"
              component={"h1"}>
              Try an easy way to manage your business
            </Typography>
            <Box className="bl-home-section__text-container">
              <Typography className="bl-home-section__text">
                We are your go-to solution for all types of websites, automated
                workflows, and mobile apps—empowering individuals and businesses
                alike.
              </Typography>
            </Box>
            <Box className="bl-home-section__button-container">
              <Button
                variant="contained"
                text="Get Started"
                className="bl-navbar__login-btn bl-navbar__login-btn--contained"
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={5} md={5}>
          <Box className="bl-home-section__testimonial">
            <Box className="bl-home-section__testimonial-background"></Box>
            <Box className="bl-home-section__testimonial-arrow bl-home-section__testimonial-arrow--left"></Box>
            <Box className="bl-home-section__testimonial-arrow bl-home-section__testimonial-arrow--right"></Box>
            <Box className="bl-home-section__testimonial-content">
              <Typography>
                "I want to extend my sincere thanks to this amazing team for
                delivering such high-quality work. I highly recommend them to
                everyone!"
              </Typography>

              <Box className="bl-home-section__testimonial-info">
                <Avatar
                  alt="Remy Sharp"
                  src="https://mighty.tools/mockmind-api/content/human/49.jpg"
                  aria-label="Remy Sharp's testimonial"
                />
                <Box className="bl-home-section__testimonial-user">
                  <Typography className="bl-home-section__testimonial-name">
                    John Doe
                  </Typography>
                  <Typography
                    variant="body2"
                    className="bl-home-section__testimonial-company">
                    Awesome Company
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomeSection;
