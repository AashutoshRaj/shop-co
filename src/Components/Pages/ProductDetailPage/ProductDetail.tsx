import { Box, Grid, styled } from "@mui/material"
import ProductMedia from "./ProductMedia/ProductMedia"
import ProductInfo from "./ProductInfo/ProductInfo"
import TopProductCard from "../Components/AllProducts/ProductCard/TopSellingProducts";
import DetailsReviewTab from "./ProductDetailReviewTab/DetailsReviewTab";

const ProductDatailStyle = styled(Box)(({}) => ({
  maxWidth:"1270px",
  padding:"46px 15px",
  margin:"auto",
}));
const ProductDetail = () => {
  return (
    <ProductDatailStyle>
      <Box >     
        <Grid container spacing={2}>          
            <Grid item xs={12} md={6}>
               <ProductMedia/>
            </Grid>
            <Grid item xs={12} md={6}>
              <ProductInfo/>
            </Grid>
        </Grid> 
        </Box>
        <DetailsReviewTab/>
        <TopProductCard />
    </ProductDatailStyle>
  )
}

export default ProductDetail
