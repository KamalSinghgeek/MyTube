import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import {logo} from '../utils/constants';
import SearchBar from "./SearchBar";


const Navbar = () => (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000', top:1, justifycontent: 'space-between'}} 
    >
      <Link to="/" style={{display:'flex', alighItems: 'center', marginRight: '800px'}}>
        <img src={logo} alt="logo" height={50} />
      </Link>
      <SearchBar/>
    </Stack>
  )

export default Navbar