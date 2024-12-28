import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import productImg1 from  './Asstes/image 2 (1).png'
import productImg2 from  './Asstes/image 5.png'
import productImg3 from  './Asstes/image 6.png'
import { styled} from "@mui/system";


const ProductThumbStyle = styled(Box)(({}) => ({
 ".fullImageblock":{
  paddingLeft:"25px",
  
  img:{
    width:'100%',
  }
 }
}));

interface ProductThumbProps {
  thumbImg: string;
  
}

const ProductThumb = () => {
  const thumbImages: ProductThumbProps[] = [
    { thumbImg: productImg1 },
    { thumbImg: productImg2 },
    { thumbImg: productImg3 },
    
  ];

  const [selectedThumb, setSelectedThumb] = useState<string>("");

  const handleThumb = (thumb: string) => {
    setSelectedThumb(thumb);
    console.log("Selected Thumbnail:", thumb);
  };

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item xs={3}>
          {thumbImages.map((value, index) => (
            <Box key={index}>
              <Button onClick={() => handleThumb(value.thumbImg)}>
                <img src={value.thumbImg}/>
              </Button>
            </Box>
          ))}
        </Grid>

        <Grid item xs={9}>
          <Box mt={2} textAlign="center" className="fullImageblock">
            <img src={selectedThumb || '1'} className=""/>
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const ProductMedia = () => {
  return (
    <ProductThumbStyle>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <ProductThumb />
        </Grid>
      </Grid>
    </ProductThumbStyle>
  );
};

export default ProductMedia;
