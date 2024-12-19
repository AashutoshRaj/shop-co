import * as React from "react";
import { Box } from "@mui/material";

import CartItems from "./CartPage/CartItems";
import UserInformation from "./UserInfo/UserInformation";
import { styled } from "@mui/system";

const CartUserStyle = styled(Box)(({theme}) => ({
    display:"flex",
}));



const CartAccount = () => {
  return (
    <CartUserStyle>
        <CartItems />
        <UserInformation />
    </CartUserStyle>
  );
};

export default CartAccount;
