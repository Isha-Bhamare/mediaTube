import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';

const NavBar = () => (
        <Stack direction="row" alignItems="center"  p={1} px={2} sx={{position: 'sticky', background: '#000', top: 0, 
        justifyContent: 'space-between',}}>
            <Link to="/" style={{display: 'flex', alignItems: 'center',color:'white'}}>
                <img src={logo} alt="logo" height={45} />
               <h1 className="title-heading" style={{fontWeight:'bold', marginLeft:'2.5px'}}> MediaTube </h1>
            </Link>
            <SearchBar />
        </Stack>
  )


export default NavBar
