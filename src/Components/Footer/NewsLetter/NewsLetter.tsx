import { Box, Grid, styled } from "@mui/material";

import Heading from "../../ElementsComp/Heading/Heading";
import ButtonComponent from "../../ElementsComp/ButtonComp/ButtonComponent";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const NewsLetterStyle = styled(Box)(() => ({
  backgroundColor: "#000000",
  padding: "43px 64px",
  borderRadius: "20px",
  position:"relative",
  zIndex:"1",
  marginBottom:"-100px",

  ".newLetterField":{
    position:"relative",
    maxWidth:"350px",
    margin:"0 0 0 auto",
    input: {
      height: "48px",
      width: "100%",
      borderRadius: "30px",
      border: "0",
      outline:"unset",
      fontSize:"16px",
      fontFamily:"satoshi",
      padding:"0px 15px 0 50px",
      boxSizing:"border-box",

     
    },
    ".mailIcon":{
      position: 'absolute',
      top: '14px',
      left: '15px',
      opacity: '0.5'
    },
    button:{
      width:"100%",
      maxWidth:"100%",
      marginTop:"15px",
    }
  },
}));
const NewsLetter = () => {
  return (
    <NewsLetterStyle>
      <Box>
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Heading
              className="ligntScheme"
              variant="h3"
              headingValue="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="newLetterField">
              <input type="text"  placeholder="Enter your email address"/>
              <MailOutlineIcon className="mailIcon"/>
            <ButtonComponent buttonTitle="Subscribe to Newletter" className='whiteButton' />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </NewsLetterStyle>
  );
};

export default NewsLetter;
