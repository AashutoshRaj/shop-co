import {Box, styled } from "@mui/material"
import { Link } from "react-router-dom"

const NavBarStyle = styled(Box)(() => ({
  flex: '0 0 40%',
  display: 'flex',
  gap: '24px',
  button: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: '16px',
  },
}));


const NavBar = () => {
  return (
    <NavBarStyle>
    
      <Link
        to='/catagories'
        
       
      >
       Shop
      </Link>
      <Link
       to='/catagories'
      >
       on sale
      </Link>
      <Link
        to='/catagories'
      >
        new arrivals
      </Link>
      <Link
       to='/catagories'
      >
       brands
      </Link>
     
    </NavBarStyle>

  
  
  );
};

export default NavBar;
