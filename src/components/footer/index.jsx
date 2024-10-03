import { Box, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import logo from "../../logo.png";
import { GitHub, LinkedIn, Telegram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: "18px",
        paddingBottom: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}>
      <img width={100} src={logo} alt="" />

      <Box sx={{ display: "flex", gap: "16px" }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "1px solid #3c486b",
            width: 24,
            height: 24,
          }}>
          <IconButton
            sx={{
              scale: 0.7,
              color: "#3c486b",
              padding: 0,
            }}>
            <GitHub />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "1px solid #3c486b",
            width: 24,
            height: 24,
          }}>
          <IconButton
            sx={{
              scale: 0.7,
              color: "#3c486b",
              padding: 0,
            }}>
            <Twitter />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "1px solid #3c486b",
            width: 24,
            height: 24,
          }}>
          <IconButton
            sx={{
              scale: 0.7,
              color: "#3c486b",
              padding: 0,
            }}>
            <Telegram />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "1px solid #3c486b",
            width: 24,
            height: 24,
          }}>
          <IconButton
            sx={{
              scale: 0.7,
              color: "#3c486b",
              padding: 0,
            }}>
            <LinkedIn />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "50%",
            border: "1px solid #3c486b",
            width: 24,
            height: 24,
          }}>
          <IconButton
            sx={{
              scale: 0.7,
              color: "#3c486b",
              padding: 0,
            }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
