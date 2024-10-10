import React from 'react';
import { Box, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <Box className="sidebar-container">
      <List>
        <ListItem>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        {/* <ListItem button component={Link} to="/">
          <ListItemText primary="Logout" />
        </ListItem> */}
      </List>
    </Box>
  );
};

export default Sidebar;
