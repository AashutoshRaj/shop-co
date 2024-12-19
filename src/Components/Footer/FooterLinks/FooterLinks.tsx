import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../Header/Logo/Logo";
import LogoIcon from "../../../assets/Icons/IconLogo/Logo";
import { color, Container, fontSize, margin, styled, textTransform } from "@mui/system";

const FooterStyleing = styled(Box)(({ theme }) => ({
  backgroundColor: "#F0F0F0",
  width: "100vw",
  transform: "translateX(-50%)",
  marginLeft: "50%",
  padding: "140px 15px 50px",
  ".footerQuickLinks": {
    display: "flex",
    ".footerAbout": {},
    ul:{
      listStyle: 'none',
      li:{
        a:{
          fontSize: '16px',
            lineHeight: '40px',
            textDecoration: 'none',
            color: 'black',
            opacity: '0.6',
            fontFamily: '\'Satoshi\'',
            fontWeight: '400',
            "&:hover":{
              opacity:"1",
            }
        },
        "&:first-child":{
            fontSize:"16px",
            marginBottom:"20px",
            textTransform:"uppercase",
        }
      },
    },
  },
}));

const FooterMain = ():any => {
  return (
    <Container
      className="footerQuickLinks"
      maxWidth="xl"
      sx={{ maxWidth: "1270px!important", padding: "0 0px!important" }}
    >
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <Box className="footerAbout">
            <Link to="">
              <LogoIcon />
            </Link>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={8}>
        <Grid container spacing={0}>
            <Grid item  xs={3}>
            <ul>
              <li>
                <strong>Help</strong>
              </li>
              <li>
                <Link to="" className="items">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Delivery Details
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            </Grid>
            <Grid item  xs={3}>
            <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <Link to="" className="items">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Works
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Career
                </Link>
              </li>
            </ul>
              </Grid>
              <Grid item  xs={3}>
              <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <Link to="" className="items">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Works
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Career
                </Link>
              </li>
            </ul>
              </Grid>
              <Grid item  xs={3}>
              <ul>
              <li>
                <strong>Company</strong>
              </li>
              <li>
                <Link to="" className="items">
                  About
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Features
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Works
                </Link>
              </li>
              <li>
                <Link to="" className="items">
                  Career
                </Link>
              </li>
            </ul>
              </Grid>
          </Grid>
          <Box className="footerLinks">
          
            
            
            
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const FooterLinks = () => {
  return (
    <FooterStyleing>
      <FooterMain />
    </FooterStyleing>
  );
};

export default FooterLinks;
