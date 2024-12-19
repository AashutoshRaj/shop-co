import { Box, Button, Fade, Paper, Popper, PopperPlacementType, styled, Typography } from '@mui/material';
import React from 'react'
import IconCart from '../../../../assets/Icons/IconLogo/IconCart/IconCart';
const CartStyling = styled(Box)(({ theme }) => ({
    button: {
      background: "transparent",
      border: "0",
      cursor: "pointer",
      padding: "0",
    },
  }));
const CartItems = () => {

    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState<PopperPlacementType>();
  
    const handleClick =
      (newPlacement: PopperPlacementType) =>
      (event: React.MouseEvent<HTMLButtonElement>) => {      
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
      };


  return (
    <CartStyling>
        <Box>
        <Popper open={open} placement={placement}>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps}>
              <Paper>
                <Typography sx={{ p: 2 }}>
                  The content of the Popper.
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Button onClick={handleClick("bottom-start")}>
          {" "}
          <IconCart />
        </Button>
        </Box>
      </CartStyling>
  )
}

export default CartItems
