import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MedicalInformationIcon from '@mui/icons-material/MedicalServices';


const item = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  py: 3,
};

const itemCategory = {
  backgroundColor: '#232f3e',
  boxShadow: '0 -1px 0 #404854 inset',
  '&:first-of-type': {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 22,
    color: '#fff',
    pl: 3,
  },
  '&:nth-of-type(n+2)': {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    pl: 4,
  },
};

export default function Navigator(props) {
  const { onTabChange, selectedTab, ...other } = props;
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    if (onTabChange) {
      onTabChange(tab);
    }
    navigate('/' + tab);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={require("../assets/4807695.png")}
              alt="logo"
              width="150" 
              height="150" 
              style={{ display: "block", margin: "auto" }}
            />
          </div>
        </ListItem>
        <ListItem disablePadding key='Home'>
          <ListItemButton selected={selectedTab === 'home'} sx={item} onClick={() => navigate('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding key='Authentication'>
          <ListItemButton selected={selectedTab === 'authentification'} sx={item} onClick={() => handleTabClick('authentification')}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText>Authentication</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding key='TipsManagement'>
          <ListItemButton selected={selectedTab === 'tipsmanagement'} sx={item} onClick={() => navigate('/tipsmanagement')}>
            <ListItemIcon><MedicalInformationIcon /></ListItemIcon>
            <ListItemText>Tips Management</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ mt: 2 }} />
      </List>
    </Drawer>
  );
}
