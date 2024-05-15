import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const sidebarItems = [
  { text: 'Home', icon: <HomeIcon />, path: '/' },
  { text: 'About', icon: <InfoIcon />, path: '/about' },
  { text: 'Video', icon: <VideoLibraryIcon />, path: '/admin' }
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          boxSizing: 'border-box',
          overflowX: 'hidden', // Hide horizontal scrollbar
        },
      }}
    >
      <List>
        <ListItem button onClick={handleDrawerToggle}>
          <ListItemIcon>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </ListItemIcon>
          {open ? <ListItemText primary="Collapse" /> : null}
        </ListItem>

        {sidebarItems.map((item, index) => (
          <Tooltip title={item.text} placement="right" key={index}>
            <ListItem button component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open ? <ListItemText primary={item.text} /> : null}
            </ListItem>
          </Tooltip>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
