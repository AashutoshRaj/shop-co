import { Container, Grid } from "@mui/material";
import ProductsCategories from "./ProductsCategory/ProductsCategories";
import SideBarFilter from "./SideBarFilter/SideBarFilter";
import BreadCrm from "../../BreadCrume/BreadCrm";

const CatagoryPage = () => {
  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{ maxWidth: "1270px!important", padding: "0 0px!important" }}>
          <BreadCrm/>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBarFilter/>
          </Grid>
          <Grid item xs={8}>
          <ProductsCategories/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CatagoryPage;
