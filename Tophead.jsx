import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import './Tophead.css'; // Optional for additional custom styles
import { HiOutlineNewspaper } from "react-icons/hi2";


const Tophead = () => {
    return (
        <AppBar position="static" color="blue">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <HiOutlineNewspaper />

                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Latest</Button>
                <Button color="inherit">News</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Sports</Button>
                <Button color="inherit">Business</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Tophead;
