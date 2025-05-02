import { Box, styled } from "@mui/material"
import { useContext, useState } from "react";

const CartStyle = styled(Box)(() => ({
    position: 'fixed',
    zIndex: '9',
    width: '100%',
    right: '-100%',
    maxWidth: '400px',
    background: '#fff',
    height: '100vh',
    top: '0',
    boxShadow: '0 0 0 #000, -8px -1px 20px #00000036',
    padding: '30px',
    transition:"all 0.2s linear",
    "&.active":{
        right:"0",
    },
  }));

// useContext

//localstroge- get,set,removeitems
//Differecnce between local and session storage.
//env

//


const CartPopUp = () => {

const [cartToggal, setCartToggal] = useState<string>("");
const cartSideBar = (()=>{
    setCartToggal((prevClass) => (prevClass === "active" ? "" : "active"));
})
  return (
    <CartStyle className={`${cartToggal}`}>
        <button onClick={cartSideBar}>X</button>
        <Box >
             cartPop     
        </Box>
    </CartStyle>
  )
}

export default CartPopUp
