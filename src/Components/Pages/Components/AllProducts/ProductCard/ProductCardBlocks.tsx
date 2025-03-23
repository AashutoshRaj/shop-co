import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Box } from "@mui/material";
import productImage from "../../../../../assets/Images/bannerImage1.png";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import ProductInfo from "../../../ProductDetailPage/ProductInfo/ProductInfo";

const ProductCardStyle = styled(Box)(() => ({ 
  display: "flex",
  margin: "55px 0 0",
  gap: "20px",
  flexWrap:"wrap",

  ".cardProdt": {
    flex: "0 0 25%",
    maxWidth: "calc(100% / 4 - 15px)",

    ".cardOuter": {
      border: "0",
      boxShadow: "unset",

      ".productImage": {
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

      ".pridListBlock": {
        display: "flex",
        alignItems: "center",
        gap: "10px",

        p: {
          margin: "0",
          fontSize: "24px",
          fontWeight: "bold",

          "&.regularPrice": {
            color: "#000000",
          },
          "&.oldPrice": {
            opacity: "0.4",
          },
          "&.discount": {
            color: "#FF3333",
            fontSize: "12px",
            background: "rgb(255 51 51 / 10%)",
            borderRadius: "30px",
            padding: "6px 13px",
          },
          "&:empty": {
            display: "none",
          },
        },
      },
    },
  },

  h5: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "satoshi",
  },
}));

interface ProductCardProps {
  pImage: string;
  starsRating: JSX.Element;
  price: string;
  discount?: string;
  pName: string;
  oldPrice?: string;
  className?: string;
}

// Individual Product Card Component
const ProductCard: React.FC<ProductCardProps> = ({
  pImage,
  starsRating,
  price,
  discount,
  pName,
  oldPrice,
  className,
}) => {
  return (
    <Box className={className}>
      <Card sx={{ maxWidth: 345 }} className="cardOuter">
        <CardActionArea>
          <Box className="productImage">
            <CardMedia component="img" image={pImage} alt={pName} />
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5">
             <Link to="/ProductDetail"> {pName}</Link>
            </Typography>
            <Box className="ratingBlock">{starsRating}</Box>
            <Box className="pridListBlock">
              <p className="regularPrice">{price}</p>
              {oldPrice && <p className="oldPrice">{oldPrice}</p>}
              {discount && <p className="discount">{discount}</p>}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

interface ProductCardBlocksProps {
  className?: string;
}

// Product Card Block Component
const ProductCardBlocks: React.FC<ProductCardBlocksProps> = ({ className }) => {
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
    <Box style={{ padding: "72px 0 64px", borderTop: "0px solid #f2f2f2" }} className={className}>
      <ProductCardStyle>
        {productInfo.map((value, index) => (
          <ProductCard
            key={index}
            pImage={value.pImage}
            pName={value.pName}
            price={value.price}
            oldPrice={value.oldPrice}
            discount={value.discount}
            starsRating={value.starsRating}
            className="cardProdt"
          />
        ))}
      </ProductCardStyle>
    </Box>
  );
};

export default ProductCardBlocks;
