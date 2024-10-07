import {
  AccessTime,
  AttachMoney,
  Check,
  Close,
  LocalFireDepartment,
  Payment,
} from "@mui/icons-material";
import {
  Box,
  Button,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet";

function PricingPage() {
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
      title: "Starter",
      price: "500",
      subtitle: "Ideal for beginners or small projects.",
      services: [
        { text: "Web Design(1 Page)", checked: true },
        { text: "Mobile app development (basic features)", checked: true },
        { text: "1-Week Support", checked: true },
        { text: "SEO optimization", checked: false },
        { text: "Cross-platform compatibility", checked: false },
        { text: "Backend integration", checked: false },
      ],
    },
    {
      title: "Professional",
      isPopular: true,
      price: "1 500",
      subtitle: "Ideal for beginners or small projects.",
      services: [
        { text: "Web Design(up to 5 pages)", checked: true },
        { text: "Mobile app development (all features)", checked: true },
        { text: "1-Month Support", checked: true },
        { text: "SEO optimization", checked: true },
        { text: "Cross-platform compatibility", checked: false },
        { text: "Backend integration", checked: false },
      ],
    },
    {
      title: "Professional",
      price: "3 000+",
      subtitle: "Best for large companies or complex projects.",
      services: [
        { text: "Custom Web and Mobile App Design", checked: true },
        { text: "Mobile app development (basic features)", checked: true },
        { text: "3-Month Support", checked: true },
        { text: "SEO optimization", checked: true },
        { text: "Cross-platform compatibility", checked: true },
        { text: "Backend integration", checked: true },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Pricing - Migrant365</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <div className="bl-app">
          <div className="bl-app__wrapper">
            {Title("Choose Your Right Plan")}
            {Subtitle(
              "Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamles fit!"
            )}

            <Box sx={{ marginTop: "36px" }}>
              <Grid container spacing={3}>
                {services.map((elem, ind) => (
                  <Grid item xs>
                    <Box
                      sx={{
                        border: "1px solid #3c486b50",
                        borderRadius: "6px",
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <Box
                        sx={{
                          height: "44px",
                          alignItems: "center",
                          paddingLeft: "22px",
                          display: "flex",
                          gap: "12px",
                          borderBottom: "1px solid #3c486b50",
                        }}>
                        <Typography
                          sx={{ color: "#3c486b", fontWeight: "700" }}>
                          {elem.title}
                        </Typography>
                        {elem.isPopular && (
                          <Box
                            sx={{
                              padding: "4px",
                              backgroundColor: "#F4433620",
                              display: "flex",
                              justifyContent: "center",
                              borderRadius: "6px",
                              gap: "6px",
                              alignItems: "center",
                              border: "1px solid #F4433670",
                            }}>
                            <LocalFireDepartment
                              sx={{ color: "#F44336", fontSize: "14px" }}
                            />
                            <Typography
                              sx={{
                                fontSize: "10px",
                                color: "#F44336",
                                textTransform: "uppercase",
                                lineHeight: 1,
                              }}>
                              Most popular
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Box
                        sx={{
                          padding: "22px",
                          borderBottom: "1px solid #3c486b50",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}>
                          <AttachMoney
                            sx={{ color: "#3c486b", fontSize: "36px" }}
                          />
                          <Typography
                            sx={{
                              color: "#3c486b",
                              fontSize: "36px",
                              lineHeight: 1,
                            }}>
                            {elem.price}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ color: "#3c486b", marginTop: "16px" }}>
                          {elem.subtitle}
                        </Typography>
                      </Box>
                      <Box sx={{ padding: "22px" }}>
                        <Typography
                          sx={{
                            fontWeight: "700",
                            textTransform: "uppercase",
                            color: "#3c486b",
                            fontSize: "12px",
                            letterSpacing: "1.5px",
                          }}>
                          Services
                        </Typography>
                        {elem.services.map((item, index) => (
                          <Box
                            sx={{
                              paddingTop: "10px",
                              paddingBottom: "10px",
                              borderBottom: "1px solid #3c486b50",
                              display: "flex",
                              justifyContent: "space-between",
                            }}>
                            <Typography
                              sx={{ fontSize: "14px", color: "#3c486b" }}>
                              {item.text}
                            </Typography>
                            {item.checked ? (
                              <Check
                                sx={{ color: "#4daa57", fontSize: "20px" }}
                              />
                            ) : (
                              <Close
                                sx={{ color: "#ba000d", fontSize: "20px" }}
                              />
                            )}
                          </Box>
                        ))}
                      </Box>
                      <Box sx={{ width: "100%", padding: "22px" }}>
                        <Button
                          variant={"contained"}
                          sx={{
                            width: "100%",
                            backgroundColor: "#3c486b",
                            fontWeight: "700",
                          }}>
                          Choose this plan
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
        <div className="bl-app__section bl-app__background">
          <div className="bl-app__wrapper">
            {Title("Frequently Asked Questions (FAQ)")}
            {Subtitle(
              "Find Answers to the Most Common Questions About Our Services and Pricing"
            )}
            <Box sx={{ marginTop: "36px" }}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "16px",
                      backgroundColor: "#fff",
                      padding: "24px",
                      borderRadius: "8px",
                    }}>
                    <Box
                      sx={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#3c486b20",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                      }}>
                      <AccessTime sx={{ color: "#3c486b" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "calc(100% - 64px)",
                        gap: "10px",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          color: "#3c486b",
                          fontSize: "20px",
                        }}>
                        How long does it take to complete a project?
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          color: "#3c486b",
                          fontSize: "18px",
                        }}>
                        Smaller projects, such as basic website design or simple
                        mobile apps, are typically completed within 1 to 2
                        weeks. For more complex projects, like custom web
                        applications or advanced mobile solutions, the timeline
                        can extend to 1 to 3 months to allow for thorough
                        design, development, and testing.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "16px",
                      backgroundColor: "#fff",
                      padding: "24px",
                      borderRadius: "8px",
                      height: "250px",
                    }}>
                    <Box
                      sx={{
                        width: "52px",
                        height: "52px",
                        backgroundColor: "#3c486b20",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "6px",
                      }}>
                      <Payment sx={{ color: "#3c486b" }} />
                    </Box>
                    <Box
                      sx={{
                        width: "calc(100% - 64px)",
                        gap: "10px",
                        display: "flex",
                        flexDirection: "column",
                      }}>
                      <Typography
                        sx={{
                          fontWeight: "700",
                          color: "#3c486b",
                          fontSize: "20px",
                        }}>
                        What payment methods do you accept?
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          color: "#3c486b",
                          fontSize: "18px",
                        }}>
                        We offer a variety of payment methods for your
                        convenience, including bank transfers, PayPal, and all
                        major credit cards. This flexibility ensures you can
                        choose the option that best suits your preferences and
                        business needs.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default PricingPage;
