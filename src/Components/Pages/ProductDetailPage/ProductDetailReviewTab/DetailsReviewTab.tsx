import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Review from "../../Components/Reviews/Review";
import {styled } from "@mui/system";

const ReviewRatingStyle = styled(Box)(() => ({
   ".tabsButton":{
        ".MuiTabs-flexContainer":{
            button:{
                flex:"1",
                width:"100%",
                maxWidth:"100%",
                fontSize:"20px",
                fontWeight:"400",
                color:"#000000",
                opacity:"0.6",
                fontFamily:"satoshi",
                "&.Mui-selected":{
                  opacity:"1",
                }
            },
        },
        ".MuiTabs-indicator":{
            backgroundColor:"#000000" ,
        }
   }
}));



const TabReviewDetails = () => {
  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other }:any = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
      

        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number):any => {
    setValue(newValue);
  };

  return (
    <ReviewRatingStyle>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className="tabsButton"
          >
            <Tab label="Product Details" {...a11yProps(0)} />
            <Tab label="Rating & Reviews" {...a11yProps(1)} />
            <Tab label="FAQs" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} >
            <Review className='detailsPagereview'/>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </ReviewRatingStyle>
  );
};

const DetailsReviewTab = () => {
  return (
    <>
      <TabReviewDetails />
    </>
  );
};

export default DetailsReviewTab;
