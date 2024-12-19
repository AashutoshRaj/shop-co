import {Link, styled } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const NavBarStyle = styled(Box)(({theme}) => ({
  flex: '0 0 40%',
  display: 'flex',
  gap:"24px",
  button:{
    color:"black",
    textTransform: "capitalize",
    fontSize:"16px",
    }
}));


const NavBar = () => {
  return (
    <NavBarStyle>
      <Link
     
        variant="body2"
        underline="none"
       
      >
       Shop
      </Link>
      <Link
        component="button"
        variant="body2"
        underline="none"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
       on sale
      </Link>
      <Link
        component="button"
        variant="body2"
        underline="none"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
        new arrivals
      </Link>
      <Link
        component="button"
        variant="body2"
        underline="none"
        onClick={() => {
          console.info("I'm a button.");
        }}
      >
       brands
      </Link>
     
    </NavBarStyle>

  
  
  );
};

export default NavBar;
