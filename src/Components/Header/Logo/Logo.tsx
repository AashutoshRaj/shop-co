import { Link } from "react-router-dom"
import LogoIcon from "../../../assets/Icons/IconLogo/Logo"
import Box from '@mui/material/Box'

const Logo = () => {
  return (
    <Box>
      <Link to='/'>      
          <LogoIcon/>
      </Link>
    </Box>
  )
}

export default Logo
