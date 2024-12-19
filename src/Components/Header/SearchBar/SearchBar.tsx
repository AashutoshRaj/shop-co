import { Search } from "@mui/icons-material"
import {  Box,} from "@mui/material"
import { color, styled } from "@mui/system";
import IconSearch from "../../../assets/Icons/IconLogo/IconSearch/IconSearcj";

const SearchBarStyle = styled(Box)(({theme}) => ({
  flex: '0 0 60%',
  position:"relative",
  input:{
    width: '100%',
    height: '48px',
    borderRadius: '30px',
    border: '0',
    background: 'rgb(0 0 0 / 7%)',
    padding: '0 15px 0px 52px',
    outline:"unset",
    "&::placeholder":{
        fontSoze:"16px",
        color:"rgb(0 0 0 / 40%)",
    },
  },
  ".searchIcon":{
    position: 'absolute',
    top: '14px',
    left: '15px',
    svg:{

    },
  },
}));



const SearchBar = () => {
  return (
      <SearchBarStyle>
          <input type="search" placeholder="Search for products..."/>
          <Box className="searchIcon">
         <IconSearch/>
          </Box>
      </SearchBarStyle>
  )
}

export default SearchBar
