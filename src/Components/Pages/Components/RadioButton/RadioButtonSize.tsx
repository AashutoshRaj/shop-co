import { Box, styled } from "@mui/material";
import React from "react";

// Define the props interface
interface RadioButtonSizeProps {
  sizeValue: string; // Explicitly type the `sizeValue` prop
}
const SelectSizeRadio = styled(Box)(({}) => ({
  position: "relative",
  maxWidth: "max-content",
  ".sizeButton": {
    position: "relative",
    input: {
      appearance: "none",
      position: "relative",
      minWidth: "80px",
      minHeight: "40px",
      backgroundColor: "#f0f0f0",
      margin: "0",
      borderRadius: "30px",
      cursor: "pointer",
      //   "&:after": {
      //     content: "''",
      //   },
      "&:checked": {
        backgroundColor: "black",
        " + span": {
          color: "#fff",
        },
      },
    },
    span: {
      position: "absolute",
      left: "50%",
      width: "100%",
      textAlign: "center",
      display: "flex",
      pointerEvents: "none",
      justifyContent: "center",
      fontSize: "14px",
      height: "40px",

      alignItems: "center",
      top: "45%",
      border: "0",
      boxShadow: "unset",
      color: "#464646",

      fontWeight: "400",
      transform: "translate(-50%,-50%)",
      cursor: "pointer",
    },
  },
}));

interface SizeSelectButton {
    sizeValue: string;
    
  }
const SizeSelectButton = ({sizeValue}:any) => {
    return(
    <SelectSizeRadio>
      <Box className="sizeButton">
        <input type="radio" />
        <span>{sizeValue}</span>
      </Box>
    </SelectSizeRadio>
    )
}



const RadioButtonSize: React.FC<RadioButtonSizeProps> = () => {
  return (
    
        <SizeSelectButton sizeValue="XL"/>
  );
};

export default RadioButtonSize;
