import { Box, createTheme, ThemeProvider } from "@mui/material"
import Banner from "../Components/Banner/Banner"
import BannerSlide from "../Components/BrandsSlide/BannerSlide";
import ProductCard from "../Components/AllProducts/ProductCard/ProductCard";
import TopSelling from "../Components/AllProducts/ProductCard/TopSellingProducts";
import TopProductCard from "../Components/AllProducts/ProductCard/TopSellingProducts";
import DressItems from "../Components/DressStyleing/DressItems";
import Review from "../Components/Reviews/Review";
import Footer from "../../Footer/NewsLetter/Footer/Footer";


const theme = createTheme({
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
    },
    body1: {
      fontFamily: 'Open Sans, sans-serif',
    },
  },
});
const Home = () => {
  return (
    <ThemeProvider theme={theme}>
    <Box className="container">
        <Banner/>
        <BannerSlide/>
        <ProductCard/>
        <TopProductCard/>
        <DressItems/>
        <Review/>
     {/* <Footer/> */}
    </Box>
    </ThemeProvider>
  )
}

export default Home
