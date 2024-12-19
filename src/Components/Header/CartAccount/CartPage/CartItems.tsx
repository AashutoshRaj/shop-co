import {Box, Button, styled} from '@mui/material';
import IconCart from '../../../../assets/Icons/IconLogo/IconCart/IconCart';
const CartStyling = styled(Box)(() => ({
    button: {
      background: "transparent",
      border: "0",
      cursor: "pointer",
      padding: "0",
    },
  }));
const CartItems = () => {

    // const [open, setOpen] = React.useState(false);
    // const [placement, setPlacement] = React.useState<PopperPlacementType>();
  
    // const handleClick =
    //   (newPlacement: PopperPlacementType) =>
    //   (event: React.MouseEvent<HTMLButtonElement>) => {      
    //     setOpen((prev) => placement !== newPlacement || !prev);
    //     setPlacement(newPlacement);
    //   };


  return (
    <CartStyling>
        <Box>      
        <Button>
          {" "}
          <IconCart />
        </Button>
        </Box>
      </CartStyling>
  )
}

export default CartItems
