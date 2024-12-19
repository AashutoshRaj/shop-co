import {
  Box,
  Button,  
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          display: "flex",
          background: "green",
          textAlign: "center",
          color: "#fff",
          justifyContent: "center",          
          borderRadius: "30px",
          maxWidth: "max-content",
          fontSize: "16px",
          textTransform: "capitalize",
          boxShadow: "0 4px 4px rgb(0 0 0 / 50%)",
          fontFamily: "satoshi",
          border: "1px solid #000",
          minHeight: "52px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          "&:after": {
            content: "''",
            width: "100%",
            position: "absolute",
            background: "rgb(255 255 255 / 15%)",
            top: "0",
            left: "0",
            height: "100%",
            transform: "rotateY(90deg)",
            transition: "transform 0.2s linear",
          },
          "&:hover": {
            color: "#ffffff",
            BorderColor: "black",
            background: "black",
            "&:after": {
              transform: "rotateY(0deg)",
            },
          },
        },
      },
    },
  },
});

const ButtonComponentOutline = ({className, buttonTitle}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={className}>
       <Button>{buttonTitle}</Button>
      </Box>
    </ThemeProvider>
  );
};


export default ButtonComponentOutline;
