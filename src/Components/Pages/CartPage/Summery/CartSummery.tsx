import { Box, styled } from "@mui/material";
import ButtonComponent from "../../../ElementsComp/ButtonComp/ButtonComponent";

const SummeryStyle = styled(Box)(() => ({
  width:"100%",
  maxWidth: '505px',
  border: '1px solid rgb(0 0 0 / 10%)',
  padding: '20px 24px',
  borderRadius: '20px',
  flex:"0 0 36%",
}));


const CartSummery = () => {
  return (
    <SummeryStyle>
        <Box>
          <ButtonComponent className="" buttonTitle="Go to Checkout" onClick={''} svgIcon={''}/>
        </Box>
    </SummeryStyle>
  )
}

export default CartSummery
