import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";

import "../../styles/businessPage.css";
import development from "../../img/development.png";
import seo from "../../img/seo.png";
import support from "../../img/support.png";
import eCommerce from "../../img/e-commerce.png";
import brandStrategy from "../../img/brand-strategy.png";
import mobileDevelopment from "../../img/mobile-development.png";
import reliability from "../../img/reliability.png";
import flexible from "../../img/flexible.png";
import value from "../../img/value.png";

function ForBusinessPage() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", initial',
    },
  });
  const Title = (title) => (
    <Typography className="bl-app__title" variant="h3">
      {title}
    </Typography>
  );

  const Subtitle = (subtitle) => (
    <Typography className="bl-app__subtitle">{subtitle}</Typography>
  );

  const listOfServices = [
    {
      title: "Custom Website Development",
      subtitle:
        "Bring your ideas to life with a beautifully designed blog that reflects your personality.",
      icon: <img src={development} width={42} alt="Development" />,
    },
    {
      title: "SEO Services",
      subtitle:
        "Make a lasting impression with a visually appealing portfolio tailored to your style.",
      icon: <img src={seo} width={42} alt="seo" />,
    },
    {
      title: "Website Maintenance and Support",
      subtitle: "Transform Your Vision into a Compelling Online Experience",
      icon: <img src={support} width={42} alt="support" />,
    },
    {
      title: "E-commerce Solutions",
      subtitle:
        "Experience seamless website development that combines functionality with beautiful design.",
      icon: <img src={eCommerce} width={42} alt="e-commerce" />,
    },
    {
      title: "Brand Strategy and UX/UI Design",
      subtitle:
        "Experience seamless website development that combines functionality with beautiful design.",
      icon: <img src={brandStrategy} width={42} alt="brand strategy" />,
    },
    {
      title: "Mobile Development",
      subtitle:
        "Experience seamless website development that combines functionality with beautiful design.",
      icon: <img src={mobileDevelopment} width={42} alt="mobile development" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Reliable and Consistent",
      subtitle:
        "With a Track Record of Consistent Delivery and Reliable Performance, We Guarantee That Every Solution We Build Meets the Highest Standards of Excellence",
      image: reliability,
    },
    {
      title: "Flexible Solutions, Tailored to You",
      subtitle:
        "We Understand That Every Business Is Different, Which Is Why Our Solutions Are Fully Customizable and Flexible, Adapting to Your Changing Needs as You Grow",
      image: flexible,
    },
    {
      title: "Quality at Competitive Rates",
      subtitle:
        "Our Transparent Pricing Structure Is Designed to Provide You with Outstanding Value, Ensuring You Get the Best Return on Your Investment While Enjoying High-Quality Deliverables.",
      image: value,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="bl-app">
        <div className="bl-app__business bl-app__section bl-app__background">
          <div className="bl-app__wrapper">
            <Box
              sx={{
                padding: "84px",
              }}>
              <Typography
                color="#fff"
                variant="h3"
                textAlign={"center"}
                fontWeight={700}>
                Elevate Your Business with Custom Web Solutions
              </Typography>
              <Typography
                color="#fff"
                textAlign={"center"}
                fontWeight={700}
                className="bl-app__subtitle">
                In today's digital landscape, a strong online presence is
                crucial for success. Our team specializes in creating custom web
                solutions that meet the unique needs of your business, helping
                you stand out and thrive.
              </Typography>
            </Box>
          </div>
        </div>
        <div className="bl-app__wrapper">
          {Title("Our Expertise at Your Service")}
          {Subtitle(
            "Comprehensive Solutions Tailored to Elevate Your Business"
          )}
          <Grid container spacing={3} sx={{ marginTop: "36px" }}>
            {listOfServices.map((elem, ind) => {
              return (
                <Grid item xs={4} key={ind}>
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "#3c486b10",
                      padding: "24px",
                      borderRadius: "6px",
                    }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "8px",
                        alignItems: "center",
                      }}>
                      <Box
                        sx={{
                          padding: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "#fff",
                          width: "72px",
                          height: "72px",
                          borderRadius: "6px",
                        }}>
                        {elem.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#3c468b",
                        }}>
                        {elem.title}
                      </Typography>
                    </Box>
                    <Box sx={{ marginTop: "16px" }}>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "400",
                          color: "#3c468b99",
                        }}>
                        {elem.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
        <div className="bl-app__section bl-app__background">
          <div className="bl-app__wrapper">
            {Title("Why choose Us?")}
            {Subtitle(
              "Discover the Advantages of Partnering with Our Web Development Team"
            )}
            <Grid container spacing={7} sx={{ marginTop: "36px" }}>
              {whyChooseUs.map((elem, index) => (
                <Grid item xs key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: "12px",
                    }}>
                    <img src={elem.image} width={52} alt={elem.title} />
                    <Typography
                      sx={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#3c486b",
                      }}>
                      {elem.title}
                    </Typography>
                    <Typography color="#3c486b99" textAlign={"center"}>
                      {elem.subtitle}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ForBusinessPage;
