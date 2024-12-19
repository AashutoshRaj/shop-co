
import { Box, Container } from '@mui/material'
import NewsLetter from '../NewsLetter'
import FooterLinks from '../../FooterLinks/FooterLinks'

const Footer = () => {
  return (
    <Box>
      <Container maxWidth="xl"
          sx={{ maxWidth: "1270px!important", padding: "0 0px!important" }}>
          <NewsLetter/>
          <FooterLinks/>
      </Container>

    </Box>
  )
}

export default Footer
