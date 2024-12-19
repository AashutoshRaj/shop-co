import { Box, Grid, Typography } from "@mui/material";
import Heading from "../../../ElementsComp/Heading/Heading.js";
import "./BannerStyle.js";
import bannerImage from "../../../../assets/Images/bannerImage1.png";
import ButtonComponent from "../../../ElementsComp/ButtonComp/ButtonComponent.js";
import {
  styled,

} from "@mui/system";
import Counts from "./Counts/Counts.js";
// import IconStar from "../../../../assets/Icons/IconLogo/IconStar/IconStar.js";

const BannerStyling = styled(Box)(({}) => ({
  background: "#f2f0f1",
  width: "100vw",
  transform: "translateX(-50%)",
  marginLeft: "50%",
  overflow: "hidden",
  ".bannerCard": {
    alignItems: "end",
    maxWidth: "1270px",
    margin: "auto",
    padding: "0 15px",
   " .bannerTextBlock":{
        margin:"106px 0 116px",
    },  
    h6: {
      margin: "32px 0",
      opacity: "0.6",
      fontFamily: "satoshi",
    },
    img: {
      width: "100%",
      position: "relative",
      top: "5px",
    },
    ".bannerImage": {
      position: "relative",
      svg: {
        "&.bigStar": {
          position: "absolute",
          top: "86px",
          right: "0",
        },
        "&.smallStar": {
          position: "absolute",
          top: "207px",
          width: "56px",
        },
      },
    },
  },
}));

const Banner = ({}) => {
  return (
    <>
      <BannerStyling>
        <Grid container spacing={0} className="bannerCard">
          <Grid item xs={12} md={6} className="bannerTextBlock">
            <Heading
              headingValue="FIND CLOTHES THAT MATCHES YOUR STYLE"
              variant='h1'
            />
            <Typography variant="subtitle1" gutterBottom>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Typography>
            <ButtonComponent buttonTitle="shop now"  className=''/>
            <Counts />
          </Grid>
          <Grid item xs={12} md={6} className="bannerImage">
            <Box>
              <img src={bannerImage} alt="image" />
            </Box>
            {/* <IconStar className="bigStar" />
            <IconStar className="smallStar" /> */}
          </Grid>
        </Grid>
      </BannerStyling>
    </>
  );
};

export default Banner;
