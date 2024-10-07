import {
  Box,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";

import about1 from "../../img/about1.png";
import {
  CalendarMonth,
  ChecklistRtl,
  Devices,
  Public,
} from "@mui/icons-material";
import Button from "../button";

const AboutPage = () => {
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

  const services = [
    {
      title: "Years of Experience",
      subtitle:
        "4+ years of delivering custom digital solutions for business growth.",
      icon: <CalendarMonth sx={{ color: "#3c468b" }} />,
    },
    {
      title: "100+ Completed Projects",
      subtitle: "Over 100 projects completed with excellence and precision.",
      icon: <ChecklistRtl sx={{ color: "#3c468b" }} />,
    },
    {
      title: "Web, Mobile, and Design",
      subtitle: "Mastering Web Development, Mobile Apps, and Creative Design.",
      icon: <Devices sx={{ color: "#3c468b" }} />,
    },
    {
      title: "Global Clients",
      subtitle: "Providing Innovative Solutions for Clients Worldwide.",
      icon: <Public sx={{ color: "#3c468b" }} />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Expertise",
      subtitle:
        "With over 4 years of experience in technology, healthcare, and finance, our skilled team delivers tailored solutions for unique client challenges.",
    },
    {
      title: "Tailored Solutions",
      subtitle:
        "We take pride in developing custom solutions meticulously tailored to meet your unique business needs, ensuring that each project is strategically aligned with your specific goals and challenges, ultimately driving sustainable growth and success for your organization.",
    },
    {
      title: "Proven Results",
      subtitle:
        "With a proven track record of successfully completing over 100 projects, we have consistently delivered exceptional results that not only meet but exceed our clients' expectations, earning their trust and satisfaction across a wide range of industries.",
    },
    {
      title: "Global Reach",
      subtitle:
        "We serve a diverse global clientele, delivering tailored digital solutions that address unique challenges and drive impactful results.",
    },
    {
      title: "Client-Centric Approach",
      subtitle:
        "We prioritize open communication and collaboration, keeping clients engaged to foster strong partnerships and achieve successful results.",
    },
  ];

  const whyChooseUsColumns = [5, 7, 7, 5, 5];

  return (
    <ThemeProvider theme={theme}>
      <div className="bl-app">
        <div className="bl-app__wrapper">
          <Grid container>
            <Grid item xs>
              {Title("Who We Are")}
              {Subtitle(
                "A Passionate Team Committed to Building High-Quality Digital Experiences for Modern Businesses"
              )}
              <Box sx={{ marginTop: "36px" }}>
                <Typography sx={{ color: "#3c468b" }}>
                  We are a team of highly experienced professionals with
                  expertise in web development, mobile applications, and design.
                  Our commitment is to craft custom, high-quality digital
                  solutions that are tailored to meet the unique needs and
                  challenges of each client. By blending creativity with
                  technical precision, we aim to build platforms that not only
                  look great but perform exceptionally. Our goal is to help
                  businesses of all sizes—whether startups or established
                  enterprises—grow, innovate, and succeed in the ever-evolving
                  digital landscape. We believe that every project presents an
                  opportunity to make a lasting impact, driving results that
                  matter.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs>
              <img width={"100%"} src={about1} alt="about page svg" />
            </Grid>
          </Grid>
        </div>
        <div className="bl-app__section bl-app__background">
          <div className="bl-app__wrapper">
            <Grid container spacing={3}>
              {services.map((elem, id) => (
                <Grid item xs>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "52px auto",
                      gap: "1px",
                    }}>
                    <Box
                      sx={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#fff",
                        borderRadius: "6px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      {elem.icon}
                    </Box>
                    <Box
                      sx={{
                        color: "#3c486b",
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                      }}>
                      <Typography
                        sx={{ textAlign: "center", fontWeight: "700" }}>
                        {elem.title}
                      </Typography>
                      <Typography
                        sx={{ fontSize: "13px", textAlign: "center" }}>
                        {elem.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="bl-app__wrapper">
          {Title("Why Choose Us?")}
          {Subtitle("Discover the Key Advantages of Partnering with Us")}
          <Grid container spacing={2} sx={{ marginTop: "36px" }}>
            {whyChooseUs.map((elem, id) => (
              <Grid item xs={whyChooseUsColumns[id]} key={id}>
                <Box
                  sx={{
                    padding: "22px",
                    backgroundColor: "#3c486b20",
                    borderRadius: "6px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      color: "#3c486b",
                      letterSpacing: "1.2px",
                    }}>
                    {elem.title}
                  </Typography>
                  <Typography sx={{ color: "#3c468b" }}>
                    {elem.subtitle}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="bl-app__section bl-app__background">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="bl-app__wrapper">
            <Box
              sx={{
                width: "50%",
                textAlign: "center",
                backgroundColor: "#ffffff",
                padding: "36px",
                borderRadius: 2,
              }}>
              {Title("Contact Us")}
              {Subtitle(
                "If you want to learn more about us or need advice on a project, feel free to contact us. We are always ready to solve your technological challenges."
              )}
              <Box sx={{ marginTop: "36px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ backgroundColor: "#3c486b10", borderRadius: "6px" }}
                      variant={"outlined"}
                      placeholder="Name"
                      className={"bl-outlinedInput"}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ backgroundColor: "#3c486b10", borderRadius: "6px" }}
                      variant={"outlined"}
                      placeholder="Surname"
                      className={"bl-outlinedInput"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#3c486b10", borderRadius: "6px" }}
                      variant={"outlined"}
                      placeholder="How contact with you?"
                      className={"bl-outlinedInput"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ backgroundColor: "#3c486b10", borderRadius: "6px" }}
                      variant={"outlined"}
                      placeholder="Text message..."
                      className={"bl-outlinedInput"}
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant={"contained"}
                      text={"Request a Consultation"}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AboutPage;
