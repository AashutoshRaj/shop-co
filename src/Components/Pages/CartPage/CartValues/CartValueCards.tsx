import { Box, styled } from "@mui/material";
import productImage from "../../../../assets/Images/dress2.png"
import { Delete } from "@mui/icons-material";

const YourCartStyle = styled(Box)(() => ({
  flex: '1',
  maxWidth: '715px',
  border: '1px solid rgb(0 0 0 / 10%)',
  padding: '20px 24px',
  borderRadius: '20px',
  ul:{
  padding:"0",
  listStyle:"none",
  li:{
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    '.productImage':{
      maxWidth: '124px',
height: '124px',
borderRadius: '15px',
overflow: 'hidden',
gridArea: '1/1/3/1',
      
        img:{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
      },
    },
    ".productDetails":{
      gridArea: '1/2/1/5',
  },
  ".productPrice":{
      p:{
        margin:"0",
      }
  },
  ".productdltIcon":{
    textAlign:"right",
  },
  ".productQty":{
    gridArea: '2/5/2/5'
  }

  }
  },
}));

const CartValueCards = () => {

  const items = []
  return (
    <YourCartStyle>
        <Box>
           <ul>            
            <li>
              <Box className="productImage">
                 <img src= {productImage}/>
              </Box>
              <Box className="productDetails">
                  {"Details"}
              </Box>
              <Box className="productdltIcon">
                  {<Delete/>}
              </Box>
              <Box className="productPrice">
                 <p> {"price"}</p>
              </Box>
             
              <Box className="productQty">
                  {"Qty"}
              </Box>
            </li>
           </ul>
        </Box>
    </YourCartStyle>
  )
}

export default CartValueCards
