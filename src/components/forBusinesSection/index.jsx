import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Button from "../button";
import "../../styles/businessSection.css";

const BusinesSection = () => {
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={7} md={7}>
          <Box>
            <Typography
              className="bl-business-section__title"
              variant="subtitle1">
              For Business
            </Typography>
            <Typography className="bl-business-section__heading" variant="h2">
              Don't take business matters personally
            </Typography>
            <Typography className="bl-business-section__description">
              Contact us to manage your business conveniently and elevate it to
              new heights. We're always happy to serve you!
            </Typography>
            <Box className="bl-business-section__button">
              <Button
                variant="contained"
                text="Get Started"
                className="bl-personal-section__login-btn bl-personal-section__login-btn--contained"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <Box className="bl-business-section__background">
            <Box className="bl-business-section__testimonial-arrow bl-business-section__testimonial-arrow--left"></Box>
            <Box className="bl-business-section__testimonial-arrow bl-business-section__testimonial-arrow--right"></Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default BusinesSection;
