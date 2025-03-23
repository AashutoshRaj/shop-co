import { Box, styled } from "@mui/material";
import { Link } from "react-router-dom"


const BreadCrmStyle = styled(Box)(() => ({
   
       ul:{
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        padding: '0',
        li:{
            a: {
                color: 'black',
                textTransform: 'capitalize',
                fontSize: '16px',
                textDecoration:"none"
              },
        }
       },

  
  }));
const BreadCrm = () => {
  return (
    <BreadCrmStyle>
    <Box>

        <ul>
            <li><Link to=''>Home</Link></li>
            <li><span className="currentPAge">Casual</span></li>
        </ul>
    </Box>

    </BreadCrmStyle>
  )
}

export default BreadCrm
