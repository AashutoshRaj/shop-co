import { Box, styled } from "@mui/material";
import CartAccount from "./CartAccount/CartAccount";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";


const HeaderTop = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "15px",
  alignItems: "center",
  marginBottom:"24px",
  maxWidth:"1270px",
  margin:"0 auto 15px",
  padding:"0 15px",
  
  ".logoBlock ": {
    gridColumn: "span 2",
  },
  ".megaMenus": {
    gridColumn: "span 9",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ".cartAccountBlock": {
    gridColumn: "span 1",
  },
}));

const Header = () => {
  return (
    <HeaderTop>
      <Box className="logoBlock">
        <Logo />
      </Box>

      <Box className="megaMenus">
        <NavBar />
        <SearchBar />
      </Box>

      <Box className="cartAccountBlock">
        <CartAccount />
      </Box>
    </HeaderTop>
  );
};

export default Header;
