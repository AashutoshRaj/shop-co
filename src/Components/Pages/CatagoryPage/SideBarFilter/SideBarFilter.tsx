import { Box } from "@mui/material";
import {styled} from "@mui/system";
import IconFilter from "../../../../assets/Icons/IconLogo/IconFilter/IconFilter";
import IconArrow from "../../../../assets/Icons/IconLogo/IconArrow/IconArrow";
import { useState } from "react";
import RadioButtonSize from "../../Components/RadioButton/RadioButtonSize";

const FilterStyle = styled(Box)(() => ({
  border: "1px solid #f2f2f2",
  borderRadius: "20px",   
  padding: "20px 24px",
  ".itemsAccording":{
    paddingBottom: '24px',
    borderBottom: '1px solid #f2f2f2', 
    flex:"0 0 100%",   
      ul:{
        padding:"0",
        listStyle:"none",
        marginBottom:"0",
        li:{
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          flexWrap:"wrap",
          opacity:"0.6",
          button:{
           backgroundColor: 'transparent',
            border: '0',
            cursor:"pointer",
            transform:"rotate(90deg)",
          },
          "&:not(:last-child)":{
            marginBottom:"20px"
          },
          ul:{
            "&.ItemsListing":{
                flex:"0 0 100%",
            }
          }
        }
      }
  },
  ".headingBlock": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    h2: {
      margin: "0",
    },
    button: {
      backgroundColor: "transparent",
      border: "0",
      cursor: "pointer",
    },
    ".FilterValues": {
      flex: "0 0 100%",
      marginTop:"20px",
    },
    "&:first-child":{
      paddingBottom:"24px",
      borderBottom: "1px solid #f2f2f2",
    },
    "&:not(:first-child)": {
      margin: "24px 0",
    },
    "&:not(:first-child, :last-child)": {
      borderBottom: "1px solid #f2f2f2",
      paddingBottom: "24px",
    },
    "&.colorFilter":{
        ".FilterValues":{
            ".colorSelection":{
              ".checkColor":{
                position:"relative",
                input:{
                  appearance: 'none',
                  width: '37px',
                  height: '37px',
                  position: 'relative',
                  borderRadius:"50%",
                  cursor:"pointer",
                  border:"2px solid rgb(0 0 0 / 22%)",
                  "&:checked":{
                    "&:after":{
                      content: "''",
                      border: '1px solid #fff',
                      width: '12px',
                      height: '6px',
                      position: 'absolute',
                      transform: 'translate(-50%,-50%) rotate(-45deg)',
                      zIndex: '1',
                      left: '50%',
                      top: '45%',
                      borderTop: '0',
                      borderRight: '0'
                    }
                  }
                  },
                span:{
                  width:"37px",
                  height:"37px",
                  display:"block",
                  borderRadius:"50%",
                  cursor:"pointer",
                },
              },
             
            },
        }, 
    },
  },
}));
const SideBarFilter = () => {
  interface FilterSideBar {}
  const FilterSideBar: React.FC<FilterSideBar> = ({}) => {

    // Filters Types
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [isColorVisible, setColorIsVisible] = useState<boolean>(true);
    const [isSizeVisible, setSizeIsVisible] = useState<boolean>(true);
    const [isDressVisible, setDressIsVisible] = useState<boolean>(true);
    // Function to toggle visibility
    const toggleVisibility = () => {
      setIsVisible((prev) => !prev); // Toggle the state
    };
    const colorToggleVisibility = () => {
      
      setColorIsVisible((prev) => !prev); // Toggle the state
    };
    const sizeToggleVisibility = () => {
      setSizeIsVisible((prev) => !prev); // Toggle the state
    };
    const dressToggleVisibility = () => {
      setDressIsVisible((prev) => !prev); // Toggle the state
    };
// Size Filter
// interface SubItem {
//   id: number;
//   itemProducts: number;
// }

// interface Item {
//   id: number;
//   itemsValues: string;
//   subItemsValues?: SubItem[]; // Optional as not all items have it
// }
  const itemsValues = [
    {
      id:1,
      itemsValues:"T-shirts",
       
    },
    {
      id:1,
      itemsValues:"Shorts",
      
    },
    {
      id:1,
      itemsValues:"Shirts",
    },
    {
      id:1,
      itemsValues:"Hoodi",
    }
  ]  

 

    return (
      <Box>
        <Box className="headingBlock">
          <h2>Filters</h2>
          <IconFilter />
        </Box>
        <Box className="itemsAccording">
            <ul>
            {itemsValues.map((items)=>(
                  <li>{items.itemsValues}<button onClick={toggleVisibility}>
                  {isVisible ? <IconArrow /> : <IconArrow />}
                </button>
                            
                </li>
            ))}

              
            </ul>
        </Box>


        <Box className="headingBlock priceFilter">
          <h2>Price</h2>
          <button onClick={toggleVisibility}>
            {isVisible ? <IconArrow /> : <IconArrow />}
          </button>
          {isVisible && (
            <Box className="FilterValues">
              <h2>Values</h2>
            </Box>
          )}
        </Box>
        <Box className="headingBlock colorFilter">
          <h2>Color</h2>
          <button onClick={colorToggleVisibility}>
            {isColorVisible ? <IconArrow /> : <IconArrow />}
          </button>
          {isColorVisible && (
           <Box className="FilterValues">
            <Box className="colorSelection">
              <Box className="checkColor">
                <input type="checkbox" style={{background:"red"}}/>
              {/* <span style={{background:"red"}}></span> */}
              </Box>
            </Box>
         </Box>
          )}
          
        </Box>
        <Box className="headingBlock sizeFilter">
          <h2>Size</h2>
          <button onClick={sizeToggleVisibility}>
            {isSizeVisible ? <IconArrow /> : <IconArrow />}
          </button>
          {isSizeVisible && (
            <Box className="FilterValues">
                  <RadioButtonSize sizeValue=""/>
                
            </Box>
          )}
         
        </Box>
        <Box className="headingBlock">
          <h2>Dress Style</h2>
          <button onClick={dressToggleVisibility}>
            {isVisible ? <IconArrow /> : <IconArrow />}
          </button>
          {isDressVisible && (
           <Box className="itemsAccording">
           <ul>
           {itemsValues.map((items)=>(
                 <li>{items.itemsValues}<button onClick={toggleVisibility}>
                 {isVisible ? <IconArrow /> : <IconArrow />}
               </button>
               {/* <ul className="ItemsListing">
                   {itemsValues.map((item) =>
                     item.subItemsValues?.map((subItem) => (
                       <li key={subItem.id}>{subItem.itemProducts}</li>
                     ))
                   )}
                 </ul> */}
               
               </li>
           ))}

             
           </ul>
       </Box>
          )}
         
        </Box>
      </Box>
    );
  };

  return (
    <>
      <FilterStyle>
        <FilterSideBar />
      </FilterStyle>
    </>
  );
};

export default SideBarFilter;
