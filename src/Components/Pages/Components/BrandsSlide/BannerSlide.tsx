import { Box } from "@mui/material";
import { styled } from "@mui/system";
import versace from "../../../../assets/Images/var.png";
import zara from "../../../../assets/Images/gucci-logo-1 1.png";
import gucci from "../../../../assets/Images/zara-logo-1 1.png";
import parada from "../../../../assets/Images/prada-logo-1 1.png";
import calvin from "../../../../assets/Images/Group.png";

const BrandSlideStyle = styled(Box)(() => ({
  background: "black",
  width: "100vw",
  transform: "translateX(-50%)",
  marginLeft: "50%",
  marginTop: "0",
  ".brandNames": {
    maxWidth: "1270px",
    padding: "0 26px",
    margin: "auto",
    display: "flex",
    gap: "106px",
    ".brandImage": {
      flex: "0 0 100%",
      maxWidth: "calc(100% / 5 - 85px)",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      paddingTop: "10%",
      img: {
        width: "100%",
        maxWidth: "206px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
      "&.zara": {
        img: {
          maxWidth: "110px",
        },
      },
    },
  },
}));

interface Brands {
  brandImg: string;
  className: string;
}

const Brands: React.FC<Brands> = ({ brandImg, className }) => {
  return (
    <div className={`brandImage ${className}`}>
      <img src={brandImg} />
    </div>
  );
};

const BannerSlide = () => {
  const brands = [
    {
      bImage: versace,
    },
    {
      bImage: zara,
    },
    {
      bImage: gucci,
    },
    {
      bImage: parada,
    },
    {
      bImage: calvin,
    },
  ];

  return (
    <BrandSlideStyle>
      <Box className="brandNames">
        {brands.map((value, index) => (
          <Brands
            key={index}
            brandImg={value.bImage}
            className={index === 2 ? "zara" : ""}
          />
        ))}
      </Box>
    </BrandSlideStyle>
  );
};

export default BannerSlide;
