import {useState} from 'react'
import {useNavigate} from "react-router-dom";

import {Paper,IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
// e is submit event
  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      //`` is used for dynamic temp string 
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  };
// fefew
  return (
    <Paper 
    // it will produce a simple white div 
      component='form'
      onSubmit={onhandleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #808080',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        backgroundColor: '#191919',
      }}
    >
      {/* inside that search bar it will contain these items. */}
      <input
        className='search-bar'
        placeholder='Search YouTube'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* button for icon */}
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar
