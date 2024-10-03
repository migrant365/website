import Navbar from "../../components/navbar";
import HomeSection from "../../components/homeSection";
import ForPersonalSection from "../../components/forPersonalSection";
import PortfolioSection from "../../components/portfolioSection";
import BusinesSection from "../../components/forBusinesSection";
import Footer from "../../components/footer";
import { Box, Typography } from "@mui/material";
import { Copyright } from "@mui/icons-material";

import "../../styles/home.css";

function Home() {
  return (
    <div className="bl-app">
      {/* <div className="bl-app__wrapper">
        <Navbar />
      </div> */}
      <div className="bl-app__wrapper">
        <HomeSection />
      </div>
      <div className="bl-app__section bl-app__background">
        <div className="bl-app__wrapper">
          <ForPersonalSection />
        </div>
      </div>
      <div className="bl-app__wrapper">
        <PortfolioSection />
      </div>
      <div className="bl-app__section bl-app__background">
        <div className="bl-app__wrapper">
          <BusinesSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
