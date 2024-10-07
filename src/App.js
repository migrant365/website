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
import { Helmet } from "react-helmet";

function App() {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Migrant365 - Web & Mobile Development, SEO, and Design Services"
        />
        <meta
          name="keywords"
          content="migrant, migrant365, migrant 365, web development, mobile development, design, SEO, Migrant365"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="bl-app">
        <div className="bl-app__wrapper" style={{ padding: 0 }}>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-personal" element={<ForPersonalPage />} />
        <Route path="/for-business" element={<ForBusinessPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
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
