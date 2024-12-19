import { Box, CardContent, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Heading from "../../../ElementsComp/Heading/Heading";
import { styled } from "@mui/system";



const ReviewCardStyle = styled(Box)(() => ({
    margin:"80px 0",
  ".reviewSlider": {
    marginTop:"40px",
    ".revCards ": {
      border: "1px solid rgb(0 0 0 / 10%)",
      borderRadius: "20px",
      padding: "26px 32px",
    },
  },
  "&.detailsPagereview":{
    marginTop:"40px",
      h2:{
        display:"none",
      },
      ".reviewSlider":{
        display: 'grid',
gridTemplateColumns: 'repeat(2,1fr)',
gap: '16px',
      }
  }
}));

const labels: { [index: string]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const ReviewCard = ({ rating, customeName, custormerReview }:{ rating:any, customeName:string, custormerReview:string }) => {
  const value = 3.5;
  return (
    <CardContent className="revCards">
      <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
        <Rating
          name="text-feedback"
          value={value}
          readOnly
          precision={0.5}
          emptyIcon={rating}
        />
        <Box sx={{ ml: 2 }}>{labels[value]}</Box>
      </Box>
      <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
        {customeName}
      </Typography>
      <Typography gutterBottom>{custormerReview}</Typography>
    </CardContent>
  );
};

const Review = ({className}:any) => {
  const reviewCardBlock = [
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
    {
      rating: <StarIcon />,
      customeName: "Sarah M.",
      custormerReview:
        "I m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece Ive bought has exceeded my expectations.",
    },
  ];

  return (
    <ReviewCardStyle className={className}>
      <Heading headingValue="OUR HAPPY CUSTOMERS" variant="h2" className={className}/>
      <Box className="reviewSlider">
        {reviewCardBlock.map((value, index) => (
          <ReviewCard
            key={index}
            rating={value.rating}
            customeName={value.customeName}
            custormerReview={value.custormerReview}
          />
        ))}
      </Box>
    </ReviewCardStyle>
  );
};

export default Review;
