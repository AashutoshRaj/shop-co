import { Box, styled, Typography } from "@mui/material";

const HeadingH = styled(Box)(({theme}) => ({
  
  h1:{   
    fontSize:"64px",
    color:"black",
    fontFamily:"'FONTSPRING DEMO - Integral CF'",
    fontWeight:"bold",
  },
  h2:{
    fontSize:"48px",
    color:"black",
    fontFamily:"'FONTSPRING DEMO - Integral CF'",
    fontWeight:"bold",
    textAlign:"center",
   
  },
  ".ligntScheme": {
  
    h3: {
      color: "#ffffff",   
      fontFamily:"'FONTSPRING DEMO - Integral CF'",
      fontWeight:"bold",
      textAlign:"center",
      textAlign:"left",
      fontSize:"40px",
    },
  },
  ".dark": {  
      h3: {
        color: "#000000",   
        fontFamily:"'FONTSPRING DEMO - Integral CF'",
        fontWeight:"bold",
        textAlign:"center",
        textAlign:"left",
        fontSize:"40px",
      },
  },
}));


const Heading = ({headingValue, variant, className}) => {
  return (
    <HeadingH>
      <Box className={className}>
         <Typography variant={variant}>{headingValue}</Typography>         
      </Box>
    </HeadingH>
  )
}

export default Heading
