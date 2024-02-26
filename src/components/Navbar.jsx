import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";


const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000', top:0, justifycontent: 'space-between'}} 
    >
      <Link to="/" style={{display:'flex', alighItems: 'center'}}>
        <img src={logo} alt="logo" height={60} />
      </Link>
      <SearchBar />
    </Stack>
  )

export default Navbar