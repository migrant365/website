import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";

function ForPersonalPage() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", initial',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="bl-app">
        <div className="bl-app__wrapper">
          <Typography sx={{ color: "#3c486b" }} variant="h3">
            Introduction
          </Typography>
          <Typography sx={{ color: "#3c486b", fontSize: "16px" }}>
            Looking for a personal website to showcase your brand, portfolio, or
            blog? We specialize in creating beautifully designed, fully
            customized websites that reflect your unique style and needs.
            Whether you're a freelancer, artist, or blogger, our team will build
            a site that not only looks great but performs seamlessly.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: "#3c486b99",
                  padding: "12px",
                  borderRadius: "6px",
                }}></Box>
            </Grid>
            <Grid item xs>
              xs=6
            </Grid>
            <Grid item xs>
              xs=6
            </Grid>
            <Grid item xs>
              xs
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ForPersonalPage;
