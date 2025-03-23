import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { borderColor, Box, styled } from "@mui/system";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
interface PaginationBlockProps {
    buttonNext: string;
  buttonPrev:string;
}

const PagenationStyle = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:"83px",
    button:{
        borderColor:"rgb(0 0 0 / 10%)",
        color:"#000000",
        gap:"10px",
    },
    ul:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        listStyle:"none",
        padding:"0",
        gap:"8px",
        li:{
            a:{
                display: 'flex',
                width: '40px',
                height: '40px',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: 'none',
                fontSize: '14px',
                color: '#000',
                fontWeight: '600',
                opacity: '0.7',
                borderRadius:"4px",
                "&:is(:hover, .active)":{
                   background: 'rgb(0 0 0 / 6%)',
                       
                        color:"#000000",
                }
            }
        }
    },
  }));
const PaginationBlock: React.FC<PaginationBlockProps> = ({ buttonNext, buttonPrev }) => {
  return (
   <PagenationStyle>
       
        <Button  variant="outlined" ><ArrowBackIcon/>  {buttonPrev}</Button>
                <ul>
                    <li className="">
                        <Link to="" className="active">1</Link>
                    </li>
                    <li className="">
                        <Link to="">2</Link>
                    </li>
                    <li className="">
                        <Link to="">3</Link>
                    </li>
                </ul>
        <Button  variant="outlined" >{buttonNext} <ArrowForwardIcon/>   </Button>
      
   </PagenationStyle>

  );
};

const Pagination: React.FC = () => {
  return (
    <div>
      <PaginationBlock buttonNext="Next"  buttonPrev="Prev  " />
    </div>
  );
};

export default Pagination;
