// components/Navbar.js

import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch, Drawer, List, ListItem, ListItemText, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';

const Navbar = ({ toggleTheme, isDark }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ marginBottom: '2rem' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>
              TEZ
            </Link>
          </Typography>
          <Hidden smDown>
            <Button color="inherit">
              <Link href="/user/Create" style={{ color: 'white', textDecoration: 'none' }}>نشاء مستخدم</Link>
            </Button>
            <Button color="inherit">
              <Link href="/user/Search" style={{ color: 'white', textDecoration: 'none' }}>بحث عن مستخدم</Link>
            </Button>
          </Hidden>
          <IconButton edge="end" color="inherit" onClick={toggleTheme} sx={{marginRight: "1rem"}}>
            {isDark ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" onClick={handleDrawerOpen} >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText>
              <Link href="/user/Create" style={{ color: 'black', textDecoration: 'none' }}>إنشاء مستخدم</Link>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <ListItemText>
              <Link href="/user/Search" style={{ color: 'black', textDecoration: 'none' }}>بحث عن مستخدم</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
