import { Box } from "@mui/material";
import Heading from "../../../../ElementsComp/Heading/Heading";
import ButtonComponentOutline from "../../../../ElementsComp/ButtonComp/ButtonComponent";
import ProductCardBlocks from "./ProductCardBlocks";

const TopProductCard = () => {
  return (
    <Box style={{ padding: "72px 0 64px", borderTop: "1px solid #f2f2f2" }}>
      <Heading headingValue="Top Selling" variant="h2" />
      <ProductCardBlocks />
      <Box
        className="outline"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "36px",
        }}
      >
        <ButtonComponentOutline buttonTitle="ViewAll" className="" />
      </Box>
    </Box>
  );
};

export default TopProductCard;
