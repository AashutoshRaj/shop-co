import { Box } from "@mui/material";
import { color, fontSize, margin, styled } from "@mui/system";

const CountValueStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "64px",
  marginTop: "48px",
 
  fontFamily: "satoshi",
  flexWrap:"wrap",
  h2: {
    fontSize: "40px",

    margin: "0",
  },
  p: {
    margin: "0",
    color: "rgb(0 0 0 / 60%)",
  },
}));

const AllCounts = ({ countValue, subLine }) => {
  return (
    <Box>
      <h2>{countValue}</h2>
      <p>{subLine}</p>
    </Box>
  );
};

const Counts = () => {
  const listing = [
    {
      countValue: "200+",
      subLine: "International Brands",
    },
    {
      countValue: "2000+",
      subLine: "High-Quality Products",
    },
    {
      countValue: "32,000+",
      subLine: "Happy Customers",
    },
  ];

  return (
    <>
      <CountValueStyle>
        {listing.map((value, index) => (
          <AllCounts
            key={index}
            countValue={value.countValue}
            subLine={value.subLine}
          />
        ))}
      </CountValueStyle>
    </>
  );
};

export default Counts;
