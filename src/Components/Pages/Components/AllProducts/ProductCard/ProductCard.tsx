import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button } from "@mui/material";
import productImage from "../../../../../assets/Images/bannerImage1.png";
import StarIcon from "@mui/icons-material/Star";
import { border, color, display, fontFamily, fontSize, fontWeight, margin, positions, styled, ThemeProvider } from "@mui/system";
import Heading from "../../../../ElementsComp/Heading/Heading";
import ButtonComponentOutline from "../../../../ElementsComp/ButtonComp/ButtonComponent";
import { Link } from "react-router-dom";

const ProductCardStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 0 0",
  gap: "20px",
  ".cardProdt":{
    flex: '0 0 25%',
    maxWidth: 'calc(100% / 4 - 15px)',
    ".cardOuter":{
        border:"0",
        boxShadow:"unset",
        ".prodcutImage": {
            paddingTop: "100%",
            position: "relative",
            background: "#F0EEED",
            borderRadius: "20px",
            overflow: "hidden",
            img: {
              position: "absolute",
              top: "50%",
              maxWidth: "230px",
              left: "50%",
              transform: "translate(-50%,-50%)",
            },
          
          },
          ".pridListBlock":{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            p:{
                margin:"0",
                fontSize:"24px",
                   fontWeight:"bold", 
               "&.regularPrice":{                   
                   color:"#000000",
               } ,
               "&.oldPrice":{                   
                  opacity:"0.4",
               } ,
               "&.discount":{
                color: '#FF3333',
                fontSize: '12px',
                background: 'rgb(255 51 51 / 10%)',
                borderRadius: '30px',
                padding: '6px 13px'
               },
               "&:empty":{
                display:"none",
               }
            }
          }
      },
  },


  h5:{
    fontSize:"20px",
    fontWeight:"bold", 
    fontFamily:"satoshi",
},
}));





const Productcards = ({
  pImage,
  starsRating,
  price,
  discount,
  pName,
  oldPrice,
}) => {
  return (
    <>
      <Box className="cardProdt">
        <Card sx={{ maxWidth: 345 }} className="cardOuter">
          <CardActionArea>
            <Box className="prodcutImage">
              <CardMedia component="img" image={pImage} alt="green iguana" />
            </Box>
            <CardContent>
              <Link to='/productdetail'>
              <Typography gutterBottom variant="h5">
              
                {pName}
              </Typography>
              </Link>
              <Box className="ratingBlock">{starsRating}</Box>
              <Box className="pridListBlock">
                <p className="regularPrice">{price}</p>
                <p className="oldPrice">{oldPrice}</p>
                <p className="discount">{discount}</p>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
       
      </Box>
      
    </>
  );
};

const ProductCard = () => {
  const productInfo = [
    {
      pImage: productImage,
      pName: "T-shirt with Tape Details",
      starsRating: <StarIcon />,
      oldPrice: "",
      price: "$120",
      discount: "",
    },
    {
      pImage: productImage,
      pName: "T-shirt with Tape Details",
      starsRating: <StarIcon />,
      oldPrice: "$560",
      price: "$120",
      discount: "-20%",
    },
    {
      pImage: productImage,
      pName: "T-shirt with Tape Details",
      starsRating: <StarIcon />,
      oldPrice: "$560",
      price: "$120",
      discount: "-20%",
    },
    {
      pImage: productImage,
      pName: "T-shirt with Tape Details",
      starsRating: <StarIcon />,
      oldPrice: "$560",
      price: "$120",
      discount: "-20%",
    },
  ];

  return (
    
    <Box style={{ padding: "72px 0 64px" }}>
      <Heading headingValue="NEW ARRIVALS" variant="h2" />
      <ProductCardStyle>
        {productInfo.map((value, index) => (
          <Productcards
            key={index}
            pImage={value.pImage}
            pName={value.pName}
            price={value.price}
            oldPrice={value.oldPrice}
            discount={value.discount}
            starsRating={value.starsRating}
          
          />
        ))}
      </ProductCardStyle>
       
        <Box   className='outline' style={{display: 'flex',justifyContent: 'center', alignItems: 'center', marginTop:"36px"}} >
            <ButtonComponentOutline
                buttonTitle='ViewAll'          
            />
          
        </Box>       
     
    </Box>
   
  );
};

export default ProductCard;
