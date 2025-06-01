import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FolderIcon from '@mui/icons-material/Folder';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 240;

interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Main', id: 'home', icon: <HomeIcon /> },
  { label: 'Expertise', id: 'expertise', icon: <CodeIcon /> },
  { label: 'History', id: 'history', icon: <WorkHistoryIcon /> },
  { label: 'Articles', id: 'articles', icon: <FolderIcon /> },
  { label: 'Contact', id: 'contact', icon: <ContactMailIcon /> }
];

// Styled components
const NeonButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  position: 'relative',
  padding: '8px',
  margin: '0 4px',
  transition: 'all 0.3s ease',
  fontSize: '0.75rem',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 'auto',
  width: '40px',
  height: '40px',
  '& .MuiSvgIcon-root': {
    fontSize: '1.2rem',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    background: 'transparent',
    transition: 'all 0.3s ease',
  },
  '&:hover': {
    color: '#00f3ff',
    textShadow: '0 0 8px #00f3ff, 0 0 12px #00f3ff',
    '&::before': {
      boxShadow: '0 0 10px #00f3ff, 0 0 20px #00f3ff',
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(18, 18, 18, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    background: 'rgba(18, 18, 18, 0.95)',
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    background: 'rgba(18, 18, 18, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  color: '#fff',
  transition: 'all 0.3s ease',
  borderRadius: '12px',
  margin: '4px 8px',
  justifyContent: 'center',
  '&:hover': {
    color: '#00f3ff',
    textShadow: '0 0 8px #00f3ff, 0 0 12px #00f3ff',
    background: 'rgba(0, 243, 255, 0.1)',
  },
}));

const NavContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}));

function Navigation({parentToChild, modeChange}: any) {
  const {mode} = parentToChild;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const scrolled = window.scrollY > navbar.clientHeight;
        setScrolled(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top" style={{ 
        color: '#00f3ff', 
        textShadow: '0 0 8px #00f3ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '12px',
        fontSize: '0.75rem'
      }}>
        <ListIcon sx={{ fontSize: '0.9rem' }}/>
      </p>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <StyledListItemButton onClick={() => scrollToSection(item.id)}>
              {item.icon}
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <StyledAppBar id="navigation" className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar' sx={{ justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              mr: 2, 
              display: { sm: 'none' },
              color: '#00f3ff',
              '&:hover': {
                color: '#fff',
                textShadow: '0 0 8px #00f3ff',
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {mode === 'dark' ? (
              <LightModeIcon 
                onClick={() => modeChange()}
                sx={{ 
                  color: '#00f3ff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#fff',
                    textShadow: '0 0 8px #00f3ff',
                  }
                }}
              />
          ) : (
              <DarkModeIcon 
                onClick={() => modeChange()}
                sx={{ 
                  color: '#00f3ff',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  '&:hover': {
                    color: '#fff',
                    textShadow: '0 0 8px #00f3ff',
                  }
                }}
              />
          )}
          </Box>
          <NavContainer sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <NeonButton key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.icon}
              </NeonButton>
            ))}
          </NavContainer>
        </Toolbar>
      </StyledAppBar>
      <nav>
        <StyledDrawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </StyledDrawer>
      </nav>
    </Box>
  );
}

export default Navigation;