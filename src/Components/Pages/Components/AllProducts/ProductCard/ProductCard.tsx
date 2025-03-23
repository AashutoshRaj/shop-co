import { Box } from "@mui/material";
import Heading from "../../../../ElementsComp/Heading/Heading";
import ButtonComponentOutline from "../../../../ElementsComp/ButtonComp/ButtonComponent";
import ProductCardBlocks from "./ProductCardBlocks";

interface ProductCardProps {
  className?: string;
}
const ProductCard: React.FC<ProductCardProps> = ({ className }) => {
  return (
    <Box sx={{ padding: "72px 0 64px" }} className={className}>
      <Heading headingValue="NEW ARRIVALS" variant="h2" />
      <ProductCardBlocks className="" />
      
      <Box
        className="outline"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "36px",
        }}
      >
        <ButtonComponentOutline buttonTitle="View All" className="" />
      </Box>
    </Box>
  );
};

export default ProductCard;
