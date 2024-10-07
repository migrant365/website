import HomeSection from "../../components/homeSection";
import ForPersonalSection from "../../components/forPersonalSection";
import PortfolioSection from "../../components/portfolioSection";
import BusinesSection from "../../components/forBusinesSection";

import "../../styles/home.css";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Migrant365</title>
      </Helmet>
      <div className="bl-app">
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
    </>
  );
}

export default Home;
