import { Box, Button, Grid, Rating } from "@mui/material";
import Heading from "../../../ElementsComp/Heading/Heading";
import {
  display,
  height,
  maxWidth,
  styled,
  textAlign,
  width,
} from "@mui/system";
import ButtonComponent from "../../../ElementsComp/ButtonComp/ButtonComponent";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import TopProductCard from "../../Components/AllProducts/ProductCard/TopSellingProducts";
const ProductDetailsStyle = styled(Box)(({}) => ({
  marginBottom: "80px",
  ".pridListBlock": {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    p: {
      margin: "0",
      fontSize: "32px",
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
  ".chooseValue": {
    display: "block",
    borderTop: "1px solid rgb(0 0 0 / 6%)",
    borderBottom: "1px solid rgb(0 0 0 / 6%)",
    margin: "24px 0",
    paddingBottom: "24px",
    label: {
      margin: "24px 0 16px",
      display: "block",
    },
    ".sizeButtons": {
      display: "flex",
      gap: "12px",
    },
  },
  ".cartAddValue": {
    maxWidth: "170px",
    display: "flex",
    background: "#F0F0F0",
    borderRadius: "30px",
    overflow: "hidden",
    button: {
      svg: {
        fill: "#000000",
      },
    },
    input: {
      width: "100%",
      border: "0",
      color: "black",
      height: "52px",
      backgroundColor: "transparent",
      outline: "unset",
      textAlign: "center",
    },
  },
}));

const ProductInfoBlock = () => {
  const [unit, setUnit] = useState(0);

  const addUnit = () => {
    setUnit(unit + 1);
    if (unit >= 20) {
      setUnit(unit);
    }
  };

  const removeUnit = () => {
    setUnit(unit - 1);
    if (unit <= 0) {
      setUnit(0);
    }
  };

  return (
    <ProductDetailsStyle>
      <Box>
        <Heading
          variant="h3"
          headingValue="One Life Graphic T-shirt"
          className="dark"
        />
        <Rating sx={{margin:"15px 0"}} />
        <Box className="pridListBlock">
          <p className="regularPrice">$260</p>
          <p className="oldPrice">$300</p>
          <p className="discount">-40%</p>
        </Box>
        <Box className="description">
          <p>
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>
        </Box>

        <Box className="chooseValue">
          <label>Choose Size</label>
          <Box className="sizeButtons">
            <ButtonComponent buttonTitle="Small" className="grayButton" />
            <ButtonComponent buttonTitle="Medium" className="grayButton" />
            <ButtonComponent buttonTitle="Large" className="grayButton" />
            <ButtonComponent buttonTitle="X-Large" className="grayButton" />
          </Box>
        </Box>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Box className="cartAddValue">
              <Button onClick={removeUnit}>
                <RemoveIcon />
              </Button>
              <input type="" className="" value={unit} />
              <Button onClick={addUnit}>
                <AddIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <ButtonComponent buttonTitle="Add to Cart" className="fullWidth" />
          </Grid>
        </Grid>
      </Box>
      
    </ProductDetailsStyle>
    
  );
};

const ProductInfo = () => {
  return (
    <div>
      <ProductInfoBlock />
    </div>
  );
};

export default ProductInfo;
