import React from "react";
import { Button as MUIButton } from "@mui/material";
import "../../styles/navbar.css"; // Ensure correct path
import { Link } from "react-router-dom";

const Button = ({ variant, text, onClick, className, to }) => {
  return (
    <MUIButton
      to={to}
      component={Link}
      variant={variant}
      onClick={onClick}
      className={className}
      sx={{
        backgroundColor: variant === "contained" ? "#3c486b" : undefined,
        color: variant === "contained" ? "#ffffff" : "#3c486b",
        borderColor: "#3c486b",
        textTransform: "none",
        "&:hover": {
          backgroundColor: variant === "contained" ? "#5a6b8a" : undefined,
        },
        fontWeight: "600",
      }}>
      {text}
    </MUIButton>
  );
};

export default Button;
