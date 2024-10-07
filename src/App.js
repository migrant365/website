import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importing BrowserRouter
import Navbar from "./components/navbar"; // Import Navbar if you want to use it
import Home from "./components/homePage";
import AboutPage from "./components/aboutPage";
import { Box, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";
import Footer from "./components/footer";
import ForPersonalPage from "./components/forPersonalPage";
import ForBusinessPage from "./components/forBusinessPage";
import PricingPage from "./components/PricingPage";
import SEO from "./components/SEO";

function App() {
  return (
    <Router>
      <div className="bl-app">
        <div className="bl-app__wrapper" style={{ padding: 0 }}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SEO title="migrant365 - Home" url="https://migrant365.org/" />
              <Home />
            </>
          }
        />
        <Route
          path="/for-personal"
          element={
            <>
              <SEO
                title="migrant365 - For Personal"
                url="https://migrant365.org/for-personal"
              />
              <ForPersonalPage />
            </>
          }
        />
        <Route
          path="/for-business"
          element={
            <>
              <SEO
                title="migrant365 - For Business"
                url="https://migrant365.org/for-business"
              />
              <ForBusinessPage />
            </>
          }
        />
        <Route
          path="/pricing"
          element={
            <>
              <SEO
                title="migrant365 - Pricing"
                url="https://migrant365.org/pricing"
              />
              <PricingPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <SEO
                title="migrant365 - About"
                url="https://migrant365.org/about"
              />
              <AboutPage />
            </>
          }
        />
      </Routes>
      <div className="bl-app__footer">
        <div className="bl-app__wrapper">
          <Footer />
        </div>
      </div>
      <div className="bl-app__footer">
        <div className="bl-app__footer-info">
          <Box className="bl-app__copyright-box">
            <Copyright sx={{ color: "#3c486b", fontSize: 14 }} />
            <Typography sx={{ color: "#3c486b", fontSize: "12px" }}>
              2024 migrant365, All rights reserved
            </Typography>
          </Box>
        </div>
      </div>
    </Router>
  );
}

export default App;
