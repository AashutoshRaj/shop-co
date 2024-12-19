import {

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
          background: "black",
          textAlign: "center",
          color: "#fff",
          justifyContent: "center",
          padding: "10px 64px",
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
          "&.whiteButton":{
            backgroundColor:"#ffffff",
            color:"#000000",
          },
          "&.grayButton":{
            backgroundColor: 'rgb(225 225 225)',
            border: '0',
            boxShadow: 'unset',
            color: '#464646',
            fontSize: '16px',
            fontWeight: '400',
            padding: '12px 24px'

          },
          "&.fullWidth":{
            maxWidth:"100%",
          },
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

const ButtonComponent = ({ buttonTitle, className }) => {
  return (
      <ThemeProvider theme={theme}>
      <Button className={className}>{buttonTitle}</Button>
    </ThemeProvider>
  );
};


export default ButtonComponent;
