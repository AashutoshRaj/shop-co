import { Box, styled } from '@mui/material'

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const UserProfile = styled(Box)(({ theme }) => ({
    button: {
      background: "transparent",
      border: "0",
      cursor: "pointer",
      padding: "0",
    },
  }));


const UserInformation = () => {
  return (
    <Box>
       <UserProfile>
            <AccountCircleOutlinedIcon />
      </UserProfile>
    </Box>
  )
}

export default UserInformation
