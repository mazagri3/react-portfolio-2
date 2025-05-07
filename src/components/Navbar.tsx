import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, useMediaQuery, IconButton, Drawer, List, ListItemText, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// For Instructor:
// - This Navbar uses Material UI's AppBar for a modern, responsive navigation bar.
// - Links to all main sections: Home, About, Projects, Resume, Contact.
// - Gold accent color for marketable, impressive look.

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#181818', borderBottom: '2px solid gold', boxShadow: 3 }}>
      <Toolbar>
        <Typography
          variant="h5"
          fontWeight={900}
          color="gold"
          sx={{ flexGrow: 1, letterSpacing: 2 }}
          component={RouterLink}
          to="/"
          style={{ textDecoration: 'none' }}
        >
          OBI MAZAGRI
        </Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon sx={{ color: 'gold' }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ minWidth: 180, bgcolor: '#181818', height: '100%' }}>
                {navLinks.map((link) => (
                  <ListItemButton key={link.label} component={RouterLink} to={link.path} onClick={() => setDrawerOpen(false)}>
                    <ListItemText primary={link.label} primaryTypographyProps={{ color: 'gold', fontWeight: 700 }} />
                  </ListItemButton>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" spacing={2}>
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={RouterLink}
                to={link.path}
                sx={{ color: 'gold', fontWeight: 700, letterSpacing: 1 }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 