import React, {useEffect, useState} from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems } from '../Constantes/navBarItems';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { useTranslation } from "react-i18next";


import logo from "../Images/giz-logo.gif";


const item = {
  py: '2px',
  px: 3,
  color: 'rgba(195, 15, 8, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(195, 15, 8, 0.08)',
  },
  
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};



export default function Navigator(props) {
  //const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl]= useState("accueil");
  const { t } = useTranslation();

  useEffect(()=>{
		//console.log(location.pathname);
		const parseTitle = location.pathname.replace(/\W/g, '');
		setUrl(parseTitle);
	  }, [location]);

  const { ...other } = props;

  //console.log(other.locale);
  return (
    <Drawer variant="permanent" {...other}>
      {/* disablePadding */}
      <List >
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
        <img src={logo} style={{width : "200px", heigth : "auto", justifyContent : "center"}} alt="Giz" />
        </ListItem>
        
        {mainNavBarItems.map(({ id, children}) => (
          <Box key={t(id)}  sx={{ bgcolor: '#fff'}}>
            <ListItem 
              sx={{ 
                py: 2, 
                px: 3,
              }}>
              <ListItemText sx={{ color: '#ff0000' }}>{t(id)}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, label, route, active }) => (
              <ListItem 
                sx={{display : 'block'}}
                disablePadding 
                key={t(label)}
                onClick={() => navigate(route)}
              >
                <ListItemButton 
                  selected={(route === url)} 
                  sx={item}
                >
                  <ListItemIcon
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                  >
                    {t(label)}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
