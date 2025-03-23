import { Box } from "@mui/material";
import { styled } from "@mui/system";
import ProductCardBlocks from "../../Components/AllProducts/ProductCard/ProductCardBlocks";
import Pagenation from "../../Components/Pagenation/Pagenation";

const ProductCatStyle = styled(Box)(() => ({
  ".filterBar": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",

    h2: {
      margin: "0",
    },

    ".productCounts": {
      display: "flex",
      alignItems: "center",
      gap: "10px",

      p: {
        margin: "0",
      },
    },
  },
  ".productListing":{
      ".productCardBlock":{
        paddingTop: '0px!important',
        borderBottom: '1px solid rgb(128 128 128 / 10%)',
        paddingBottom: '24px!important',
        borderTop:"0!important",
          "> div":{
            marginTop:"0",
          },
          ".cardProdt":{
            maxWidth:"calc(100% / 3 - 15px)",
            flex:"0 0 33%",
          }
      }
  }
}));

interface ProductsCategoriesProps {
  className?: string;
}

const ProductsCategories: React.FC<ProductsCategoriesProps> = ({ className }) => {
  return (
    <ProductCatStyle className={className}>
      <Box>
        <Box className="filterBar">
          <h2>Casual</h2>
          <Box className="productCounts">
            <p>Showing 1-10 of 100 Products</p>
            <Box className="shortByP">
              <p>Sort by:</p>
            </Box>
          </Box>
        </Box>
        <Box className="productListing">
          <ProductCardBlocks className="productCardBlock" />
          <Pagenation/>
        </Box>
      </Box>
    </ProductCatStyle>
  );
};

export default ProductsCategories;
