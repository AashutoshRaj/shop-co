
import CartValueCards from "./CartValues/CartValueCards"
import CartSummery from "./Summery/CartSummery"
import {Box, Container } from "@mui/material"
import BreadCrm from "../../BreadCrume/BreadCrm"
import Heading from "../../ElementsComp/Heading/Heading"
import {styled } from "@mui/system"

const CartPageStyle = styled(Box)(() => ({
  ".leftAlign":{
    marginBottom:"24px",
      h3:{
        textAlign:"left",
        color: 'black',
        fontFamily: '\'FONTSPRING DEMO - Integral CF\'',
        fontWeight: 'bold',
        lineHeight:"normal",

      },
  },
  ".cartSummery":{
      display:"flex",
      gap:"15px",
      marginBottom:"80px",
  }

}));



const CartPage = () => {
  return (
    <CartPageStyle>
       <Container
        maxWidth="xl"
        sx={{ maxWidth: "1270px!important", padding: "0 0px!important"}}>
          <BreadCrm/>
          <Heading headingValue="your cart" variant="h3" className="leftAlign" />
          <Box className="cartSummery">
              <CartValueCards/>
              <CartSummery/>
          </Box>
           
        </Container>
       
    </CartPageStyle>
  )
}

export default CartPage
