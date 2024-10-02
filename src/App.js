import Navbar from "./components/navbar";
import "./App.css";
import HomeSection from "./components/homeSection";
import ForPersonalSection from "./components/forPersonalSection";
import PortfolioSection from "./components/portfolioSection";
import BusinesSection from "./components/forBusinesSection";
import Footer from "./components/footer";
import { Avatar, Box, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <div className="App-wrapper" style={{ padding: 0 }}>
        <Navbar></Navbar>
      </div>
      <div className="App-wrapper">
        <HomeSection />
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#3c486b20",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <div className="App-wrapper">
          <ForPersonalSection />
        </div>
      </div>
      <div className="App-wrapper">
        <PortfolioSection />
      </div>
      <div
        className=""
        style={{
          backgroundColor: "#3c486b20",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}>
        <div className="App-wrapper">
          <BusinesSection />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #3c486b",
          borderBottom: "1px solid #3c486b",
        }}>
        <div className="App-wrapper">
          <Footer />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #3c486b20",
          borderBottom: "1px solid #3c486b20",
          backgroundColor: "#3c486b20",
        }}>
        <div
          style={{
            padding: "10px",
            width: "1200px",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Copyright sx={{ color: "#3c486b", fontSize: 14 }} />
            <Typography
              sx={{ color: "#3c486b", fontSize: "12px", display: "flex" }}>
              2024 migrant365, All rights reserved
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
// PortfolioSection
