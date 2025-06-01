import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShieldIcon from '@mui/icons-material/Shield';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import MonitorIcon from '@mui/icons-material/Monitor';
import StorageIcon from '@mui/icons-material/Storage';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import '../assets/styles/Main.scss';

// Styled Components
const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 160,
  height: 160,
  border: '2px solid rgba(0, 243, 255, 0.3)',
  boxShadow: '0 0 15px rgba(0, 243, 255, 0.2)',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    border: '2px solid rgba(0, 243, 255, 0.5)',
  }
}));

const SocialButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  padding: theme.spacing(1),
  minWidth: 'auto',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#00f3ff',
    transform: 'translateY(-2px)',
  }
}));

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(12, 0, 6),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
}));

const SectionContent = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: theme.spacing(0, 4),
  position: 'relative',
  zIndex: 1,
  overflow: 'hidden',
  marginBottom: theme.spacing(4)
}));

const DecorativeImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 243, 255, 0.15)',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  border: '2px solid rgba(0, 243, 255, 0.3)',
  overflow: 'hidden',
  objectFit: 'cover',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 25px rgba(0, 243, 255, 0.25)',
    border: '2px solid rgba(0, 243, 255, 0.5)',
  }
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '250px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  [theme.breakpoints.down('md')]: {
    height: '200px',
  }
}));

const SkillContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2)
  }
}));

const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  background: 'rgba(0, 243, 255, 0.05)',
  transition: 'all 0.3s ease',
  minWidth: '140px',
  '&:hover': {
    background: 'rgba(0, 243, 255, 0.1)',
    transform: 'translateY(-2px)'
  }
}));

const SkillIcon = styled(Box)(({ theme }) => ({
  color: '#00f3ff',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    fontSize: '1.2rem'
  }
}));

function Main() {
  return (
    <Box>
      <Section id="home">
        <SectionContent>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, mt: 2 }}>
                <ProfileAvatar
                  src="https://github.com/inog9.png"
                  alt="Guntur Wahyu Ramadhan"
                />
                <Box sx={{ ml: 3 }}>
                  <Chip 
                    label="Ranah Security Engineer Transformasi Jiwa" 
                    size="small" 
                    sx={{ 
                      mb: 1.5,
                      background: 'rgba(0, 243, 255, 0.1)',
                      border: '1px solid rgba(0, 243, 255, 0.3)',
                      color: '#fff',
                      fontSize: '0.85rem',
                      height: '26px'
                    }} 
                  />
                  <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                      fontWeight: 600,
                      letterSpacing: '-0.02em',
                      color: '#fff',
                      lineHeight: 1.2
                    }}
                  >
                    Guntur Wahyu Ramadhan
                  </Typography>
                </Box>
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  opacity: 0.9,
                  color: '#00f3ff',
                  fontWeight: 500
                }}
              >
                Information Security Engineer | Security Analyst | Penetration Tester
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  lineHeight: 1.7,
                  opacity: 0.9,
                  color: '#fff',
                  maxWidth: '92%'
                }}
              >
                Professional in cybersecurity with expertise in security analysis,
                penetration testing, and implementing robust security solutions. Committed
                to protecting digital assets and addressing the latest cyber threats.
              </Typography>

              <Box sx={{ display: 'flex', gap: 0.5, mb: 3 }}>
                <SocialButton
                  onClick={() => window.open('https://github.com/inog9', '_blank')}
                  startIcon={<GitHubIcon />}
                />
                <SocialButton
                  onClick={() => window.open('https://www.linkedin.com/in/guntur-wahyu-ramadhan-21a897260/', '_blank')}
                  startIcon={<LinkedInIcon />}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ mt: 2, ml: { md: 2 } }}>
                <ImageContainer>
                  <DecorativeImage
                    sx={{
                      backgroundImage: 'url(https://wallpapercave.com/wp/wp14093339.jpg)',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  />
                </ImageContainer>
                <SkillContainer>
                  <SkillItem>
                    <SkillIcon>
                      <ShieldIcon />
                    </SkillIcon>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Security Monitoring
                    </Typography>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon>
                      <SecurityIcon />
                    </SkillIcon>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Incident Response
                    </Typography>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon>
                      <BugReportIcon />
                    </SkillIcon>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Vulnerability Assessment
                    </Typography>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon>
                      <MonitorIcon />
                    </SkillIcon>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      SIEM Management
                    </Typography>
                  </SkillItem>
                  <SkillItem>
                    <SkillIcon>
                      <StorageIcon />
                    </SkillIcon>
                    <Typography
                      sx={{
                        color: '#fff',
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}
                    >
                      Security Operations
                    </Typography>
                  </SkillItem>
                </SkillContainer>
              </Box>
            </Grid>
          </Grid>
        </SectionContent>
      </Section>
    </Box>
  );
}

export default Main;