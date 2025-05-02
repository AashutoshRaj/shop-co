import {Box, Button, colors, styled} from '@mui/material';
import IconCart from '../../../../assets/Icons/IconLogo/IconCart/IconCart';
import React from 'react';
import ButtonComponent from '../../../ElementsComp/ButtonComp/ButtonComponent';
import { Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';
const CartStyling = styled(Box)(() => ({
    button: {  
      maxWidth:"100%",   
      "&:cartIcon":{
        background: "transparent",
        border: "0",
        cursor: "pointer",
        padding: "0",
        position:"relative",
      },
      "&.closeIcon":{
        position: 'absolute',
        background: 'transparent',
        border: '0',
        padding: '0',
        top: '15px',
        right: '15px',
        cursor: 'pointer',
        zIndex: '99',
      },
      ".cartValue":{
        position: 'absolute',
        background: 'red',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        top: '-4px',
        right: '13px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '9px'
      },
    },
    ".cartLinkPage":{
        textAlign:"center",
        color:"#000000",
        display:"block",
        textDecoration:"none",
        padding:"15px",
        "&:hover":{
          textDecoration:"underline",
        }
       
    },
    ".checkOut":{
      position: 'absolute',
      width: '100%',
      right: '0',
      maxWidth: '300px',
      padding: '15px',
      zIndex: '9',
      background: '#fff',
      boxShadow: '0 0 0 #000, 0 0 20px #f0ecec',
      borderRadius: '8px'

    },
  }));
const CartItems = () => {

    
      const [openCart, setOpenCart] = React.useState(false);

      const cartToggle = (()=>{
        setOpenCart((prev) => !prev); // Toggle the state
      })

      const closeCart = (()=>{
        setOpenCart((prev) => !prev); // Toggle the state
      })

  return (
    <CartStyling>
        <Box>      
        <Button onClick={cartToggle} className='cartIcon'>
             {" "}
          <IconCart />
             <span className='cartValue'>10</span>
        </Button>

      {openCart && (
          <Box className="checkOut" >
            <button className="closeIcon" onClick={closeCart}><Close/></button>  
            <Link to="/cart" className='cartLinkPage'>View Cart</Link>
              <ButtonComponent buttonTitle="Checkout" className=""  onClick={""}/>
            </Box>
      )

      }
        
      
        </Box>
      </CartStyling>
  )
}

export default CartItems
