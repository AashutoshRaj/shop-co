import { Box, Typography } from "@mui/material";
import Heading from "../../../ElementsComp/Heading/Heading";
import { styled} from "@mui/system";
import fromal from "../../../../assets/Images/fromal.png";
import casual from "../../../../assets/Images/dress2.png";
import party from "../../../../assets/Images/dress3.png";
import gym from "../../../../assets/Images/dress4.png";
import { Link } from "react-router-dom";

const BrowseDressStyle = styled(Box)(() => ({
  backgroundColor: "#F0F0F0",
  borderRadius: "40px",
  padding: "70px 64px",
  ".DressCards": {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "64px",
    ".dressCarsBlock": {
      flex: "0 0 36%",
      maxWidth: "36%",
      maxHeight: "290px",
      overflow: "hidden",
      borderRadius: "20px",
      position: "relative",
     
      img: {
        width: "100%",
        height: "290px",
        objectFit: "cover",
        transition:"all 0.2s linear",
      },
      "&:not(:first-child, :last-child)": {
        flex: "0 0 63%",
        maxWidth: "calc(64% - 20px)",
      },
      h5: {
        position: "absolute",
        top: "25px",
        left: "36px",
        fontSize: "36px",
        fontWeight: "bold",
        textTransform: "capitalize",
        fontFamily: "'Satoshi'",
        color:"#000000",
      },
      "&:hover":{
        img:{
            transform:"scale(1.1)"
        }
      }
    },
  },
}));

const BrowseDress = ({ dressName, dressImage }:any) => {
  return (
    <>
      <Link to='' className="dressCarsBlock">
        <Box className="">
          <img src={dressImage} />
        </Box>

        <Typography gutterBottom variant="h5">
          {dressName}
        </Typography>
      </Link>
    </>
  );
};

const DressItems = () => {
  const browseItems = [
    {
      dressName: "casual",
      dressImage: casual,
    },
    {
      dressName: "Formal",
      dressImage: fromal,
    },
    {
      dressName: "Party",
      dressImage: party,
    },
    {
      dressName: "Gym",
      dressImage: gym,
    },
  ];

  return (
    <BrowseDressStyle>
      <Heading headingValue="BROWSE BY dress STYLE" variant="h2" />
      <Box className="DressCards">
        {browseItems.map((value, index) => (
          <BrowseDress
            key={index}
            dressName={value.dressName}
            dressImage={value.dressImage}
          />
        ))}
      </Box>
    </BrowseDressStyle>
  );
};

export default DressItems;
