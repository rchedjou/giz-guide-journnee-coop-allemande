import React, { useState } from 'react';
import {AppBar, Button, Tab, Tabs, Toolbar} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



const Header = () => {
    const [value, setValue]= useState();
  return (
    <React.Fragment>
        <AppBar sx={{background : "#063970"}}>
            <Toolbar>
                <ShoppingCartCheckoutIcon />
                <Tabs sx={{}} textColor="inherit" value={value} indicatorColor="primary" onChange={(e, value)=>{setValue(value)}}>
                    <Tab label="Products" />
                    <Tab label="Services" />
                    <Tab label="Contact Us" />
                    <Tab label="About Us" />
                </Tabs>
                <Button sx={{marginLeft : "auto"}} variant='contained'>Login{" "}</Button>
                <Button sx={{marginLeft : "10px"}} variant='contained'>Sign Up{" "}</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header
