import React, { useState } from "react";
import {
  Box,
  createTheme,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Grid, styled } from "@mui/system";

import borderList from "../../img/borderList.png";

const CarouselContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "relative",
  overflow: "hidden",
});

const CarouselWrapper = styled(Box)(({ translateValue }) => ({
  display: "flex",
  transition: "transform 0.5s ease",
  transform: `translateX(${translateValue}px)`,
  maxWidth: "1100px",
}));

const CarouselItem = styled(Box)({
  minWidth: "680px", // Adjust item width as necessary
  height: "320px",
  width: "600px",
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

const PortfolioSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 640; // Item width + margin
  const visibleItems = 1; // Number of visible items

  const items = [
    {
      title: "BorderList",
      inProgress: true,
      subtitle: `This project aims to provide essential border travel information
      for tourists using cars, motorbikes, bicycles, and on foot. It
      includes real-time updates on border working hours, safety
      guidelines, customs regulations, and visa requirements, along
      with an interactive map for seamless navigation.`,
      image: "../../img/borderList.png",
    },
    {
      title: "BorderList",
      inProgress: false,
      subtitle: `This project aims to provide essential border travel information
        for tourists using cars, motorbikes, bicycles, and on foot. It
        includes real-time updates on border working hours, safety
        guidelines, customs regulations, and visa requirements, along
        with an interactive map for seamless navigation.`,
      image: "../../img/borderList.png",
    },
    {
      title: "BorderList",
      inProgress: false,
      subtitle: `This project aims to provide essential border travel information
        for tourists using cars, motorbikes, bicycles, and on foot. It
        includes real-time updates on border working hours, safety
        guidelines, customs regulations, and visa requirements, along
        with an interactive map for seamless navigation.`,
      image: "../../img/borderList.png",
    },
    {
      title: "BorderList",
      inProgress: false,
      subtitle: `This project aims to provide essential border travel information
        for tourists using cars, motorbikes, bicycles, and on foot. It
        includes real-time updates on border working hours, safety
        guidelines, customs regulations, and visa requirements, along
        with an interactive map for seamless navigation.`,
      image: "../../img/borderList.png",
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
  const theme = createTheme({
    typography: {
      fontFamily: '"Josefin Sans", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Typography
        variant="subtitle1"
        fontSize={12}
        color="#3c486"
        textTransform="uppercase">
        Portfolio
      </Typography>
      <Typography variant="h2" color="#3c486b" fontWeight={400}>
        Digital Solutions, Real Impact
      </Typography>
      <Box sx={{ marginTop: "36px", marginBottom: "36px" }}>
        <Typography sx={{ fontSize: "16px", color: "#3c486b99" }}>
          Building efficient and scalable applications for a connected world.
        </Typography>
      </Box>
      <CarouselContainer>
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

        <CarouselWrapper translateValue={translateValue}>
          {items.map((item, index) => (
            <CarouselItem
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #3c486b20",
                paddingLeft: "30px",
                paddingRight: "30px",
                position: "relative",
                backgroundColor: "rgba(60, 72, 107, 0.08)",
              }}
              key={0}>
              <Box sx={{ width: "50%" }}>
                {item.inProgress && (
                  <Box
                    sx={{
                      position: "absolute",
                      backgroundColor: "#3c486b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      right: 0,
                      border: "1px solid #3c486b20",
                      borderRadius: 1,
                      paddingLeft: 2,
                      paddingRight: 2,
                      paddingTop: "2px",
                      paddingBottom: "2px",
                    }}>
                    <Typography fontWeight={500} color="#ffffff" fontSize={14}>
                      In progress
                    </Typography>
                  </Box>
                )}
                <Typography
                  fontWeight={500}
                  marginBottom={2}
                  color="#3c486b"
                  fontSize={22}>
                  BorderList
                </Typography>
                <Typography color="#3c486b99">
                  This project aims to provide essential border travel
                  information for tourists using cars, motorbikes, bicycles, and
                  on foot. It includes real-time updates on border working
                  hours, safety guidelines, customs regulations, and visa
                  requirements, along with an interactive map for seamless
                  navigation.
                </Typography>
              </Box>
              <Box sx={{ width: "50%" }}>
                <img
                  src={borderList}
                  alt={"New Project BorderList"}
                  style={{
                    width: "310px",
                    height: "280px",
                    borderRadius: "8px",
                  }}
                />
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
    </ThemeProvider>
  );
};

export default PortfolioSection;
