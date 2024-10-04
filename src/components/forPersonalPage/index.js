import styled from "@emotion/styled";
import {
  BusinessCenterTwoTone,
  HistoryEduTwoTone,
  PublicTwoTone,
  TipsAndUpdatesTwoTone,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  createTheme,
  Grid,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../../styles/personalPage.css";

const CarouselContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

const CarouselWrapper = styled(Box)(({ theme, translateValue }) => ({
  display: "flex",
  transition: "transform 0.5s ease",
  transform: `translateX(${translateValue}px)`,
  maxWidth: "1100px",
}));

const CarouselItem = styled(Box)({
  minWidth: "400px",
  padding: "24px",
  width: "400px",
  margin: "0 10px",
  borderRadius: "8px",
});

const ArrowButton = styled(IconButton)({
  height: "100%",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  background: "rgb(255,255,255)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  borderRadius: 0, // Make it circular
});

function ForPersonalPage() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemWidth = 400; // Item width + margin
  const visibleItems = 1;
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", initial',
    },
  });
  const items = [
    {
      name: "Sarah W.",
      profession: "Blogger",
      comment: `Working with this team was an absolute pleasure! They understood my vision for my personal blog and brought it to life better than I could have imagined. The process was smooth, and they were always available for any questions I had. Highly recommend!`,
      image: "https://mighty.tools/mockmind-api/content/human/51.jpg",
    },
    {
      name: "James T.",
      profession: "Photographer",
      comment: `I needed a portfolio website to showcase my photography work, and they delivered exactly what I wanted. The site looks amazing, and I’ve already gotten great feedback from visitors. Their attention to detail and professionalism was outstanding.`,
      image: "https://mighty.tools/mockmind-api/content/human/65.jpg",
    },
    {
      name: "Emily S.",
      profession: "Entrepreneur",
      comment: `I was blown away by the website they created for my personal brand. They made sure every element reflected my style, and the result is both beautiful and functional. The team was responsive and made the entire process stress-free.`,
      image: "https://mighty.tools/mockmind-api/content/human/12.jpg",
    },
    {
      name: "David L.",
      profession: "Graphic Designer",
      comment: `From start to finish, the experience was fantastic. They guided me through every step of the process, and the end result exceeded my expectations. My website is not only visually stunning but also easy to manage.`,
      image: "https://mighty.tools/mockmind-api/content/human/78.jpg",
    },
    {
      name: "Anna M.",
      profession: "Writter",
      comment: `They took the time to really understand my goals and created a custom website that perfectly fits my needs. I couldn’t be happier with the outcome and will definitely work with them again in the future!`,
      image: "https://mighty.tools/mockmind-api/content/human/29.jpg",
    },
  ];
  const listOfServices = [
    {
      title: "Personal Blog Creation",
      subtitle:
        "Bring your ideas to life with a beautifully designed blog that reflects your personality.",
      icon: <HistoryEduTwoTone sx={{ color: "#3c468b80", fontSize: "28px" }} />,
    },
    {
      title: "Portolio Websites",
      subtitle:
        "Make a lasting impression with a visually appealing portfolio tailored to your style.",
      icon: (
        <BusinessCenterTwoTone sx={{ color: "#3c468b80", fontSize: "28px" }} />
      ),
    },
    {
      title: "For Personal Brands",
      subtitle: "Transform Your Vision into a Compelling Online Experience",
      icon: (
        <TipsAndUpdatesTwoTone sx={{ color: "#3c468b80", fontSize: "28px" }} />
      ),
    },
    {
      title: "Website Creation",
      subtitle:
        "Experience seamless website development that combines functionality with beautiful design.",
      icon: <PublicTwoTone sx={{ color: "#3c468b80", fontSize: "28px" }} />,
    },
  ];

  const maxIndex = items.length - visibleItems;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // Calculate the translate value based on currentIndex and itemWidth
  const translateValue = -currentIndex * itemWidth;

  const steps = [
    {
      title: "Initial Consultation",
      description:
        "Discuss your goals, ideas, and requirements for the website. This step helps us understand your vision and gather essential information to start the project.",
    },
    {
      title: "Proposal and Agreement",
      description:
        "Based on our discussion, we will create a detailed proposal outlining the project scope, timeline, and costs. Once you agree, we’ll finalize the contract to ensure clarity and mutual understanding.",
    },
    {
      title: "Design Phase",
      description:
        "Our design team will create wireframes and mockups for your approval. This is where we focus on layout, color schemes, and overall aesthetics to align with your vision.",
    },
    {
      title: "Development Phase",
      description:
        "After design approval, our developers will build your website. This includes coding, integrating features, and ensuring the site is responsive and functional across all devices.",
    },
    {
      title: "Content Creation",
      description:
        "After design approval, our developers will build your website. This includes coding, integrating features, and ensuring the site is responsive and functional across all devices.",
    },
    {
      title: "Review and Feedback",
      description:
        "Once the website is developed, you’ll have the opportunity to review it. We encourage feedback and will make necessary adjustments to ensure it meets your expectations.",
    },
    {
      title: "Post-Launch Support",
      description:
        "Once your site is live, we offer ongoing support to address any issues and provide updates as needed. We also offer maintenance packages to keep your site running smoothly.",
    },
    {
      title: "Training and Handover",
      description:
        "We provide training on how to manage and update your website, ensuring you feel confident in using your new platform.",
    },
  ];

  const xsValues = [5, 7, 7, 5, 5, 7, 7, 5, 5];

  const Title = (title) => (
    <Typography className="bl-app__title" variant="h3">
      {title}
    </Typography>
  );

  const Subtitle = (subtitle) => (
    <Typography className="bl-app__subtitle">{subtitle}</Typography>
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="bl-app">
        <div className="bl-app__wrapper">
          {Title("Introduction")}
          {Subtitle(
            `Looking for a personal website to showcase your brand, portfolio, or
            blog? We specialize in creating beautifully designed, fully
            customized websites that reflect your unique style and needs.
            Whether you're a freelancer, artist, or blogger, our team will build
            a site that not only looks great but performs seamlessly.`
          )}

          <Grid container spacing={3} sx={{ marginTop: "36px" }}>
            {listOfServices.map((elem, ind) => {
              return (
                <Grid item xs key={ind}>
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
                      {elem.icon}
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
            <Box>
              {Title("Service Process")}
              {Subtitle(
                "Our seamless process to bring your custom website to life, with you every step of the way."
              )}
              <Grid container spacing={1} className="bl-app__grid">
                {steps.map((step, index) => (
                  <Grid item xs={xsValues[index]} key={index}>
                    <Box className="bl-app__step">
                      <Box sx={{ display: "flex", gap: "8px" }}>
                        <Box className="bl-app__step-number">
                          <Typography className="bl-app__number">
                            {index + 1}
                          </Typography>
                        </Box>
                        <Typography className="bl-app__step-title">
                          {step.title}
                        </Typography>
                      </Box>
                      <Box sx={{ marginTop: "16px" }}>
                        <Typography className="bl-app__step-description">
                          {step.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
        <div className="bl-app__wrapper">
          {Title("Testimonials")}{" "}
          {Subtitle(
            "Real stories from satisfied clients who brought their ideas to life with our help."
          )}
          <CarouselContainer sx={{ marginTop: "36px" }}>
            <ArrowButton
              onClick={handlePrev}
              style={{
                left: "0px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,1) 27%, rgba(255,255,255,0) 100%)",
              }}
              disabled={currentIndex === 0}>
              <ArrowBackIosIcon />
            </ArrowButton>

            <CarouselWrapper
              style={{ transform: `translateX(${translateValue}px)` }}>
              {items.map((item, index) => (
                <CarouselItem
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #3c486b20",
                    paddingLeft: "24px",
                    paddingRight: "24px",
                    position: "relative",
                    backgroundColor: "rgba(60, 72, 107, 0.08)",
                  }}
                  key={index}>
                  <Box sx={{}}>
                    <Typography color="#3c486b99">{item.comment}</Typography>
                    <Typography fontWeight={500} color="#3c486b" fontSize={22}>
                      <Box className="bl-home-section__testimonial-info">
                        <Avatar alt="Remy Sharp" src={item.image} />
                        <Box className="bl-home-section__testimonial-user">
                          <Typography
                            fontWeight={600}
                            className="bl-home-section__testimonial-name">
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{ color: "#3c486b99" }}
                            variant="body2"
                            className="bl-home-section__testimonial-company">
                            {item.profession}
                          </Typography>
                        </Box>
                      </Box>
                    </Typography>
                  </Box>
                </CarouselItem>
              ))}
            </CarouselWrapper>

            <ArrowButton
              onClick={handleNext}
              style={{
                right: "0px",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
              }}
              disabled={currentIndex >= maxIndex}>
              <ArrowForwardIosIcon />
            </ArrowButton>
          </CarouselContainer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default ForPersonalPage;
