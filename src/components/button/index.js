import React from "react";
import { Button as MUIButton } from "@mui/material";
import "../../styles/navbar.css"; // Ensure correct path

const Button = ({ variant, text, onClick, className }) => {
  return (
    <MUIButton
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
      }}>
      {text}
    </MUIButton>
  );
};

export default Button;
