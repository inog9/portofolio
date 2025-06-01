import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faBug, faCode, faSearch } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Chip, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.2); }
  50% { box-shadow: 0 0 20px rgba(0, 243, 255, 0.4); }
  100% { box-shadow: 0 0 5px rgba(0, 243, 255, 0.2); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    animation: `${glow} 3s infinite`,
  }
}));

const Title = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontSize: '3.5rem',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  textShadow: `
    0 0 10px rgba(0, 243, 255, 0.5),
    0 0 20px rgba(0, 243, 255, 0.3),
    0 0 30px rgba(0, 243, 255, 0.2)
  `,
  position: 'relative',
  zIndex: 2,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100px',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    borderRadius: '2px',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '60px',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, #00f3ff, transparent)',
    borderRadius: '1px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
  }
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
  }
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  background: 'rgba(0, 243, 255, 0.05)',
  backdropFilter: 'blur(8px)',
  borderRadius: '12px',
  padding: theme.spacing(2),
  border: '2px solid rgba(0, 243, 255, 0.3)',
  boxShadow: '0 4px 20px rgba(0, 243, 255, 0.15)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, transparent, rgba(0, 243, 255, 0.05), transparent)',
    transform: 'translateX(-100%)',
    transition: 'transform 0.6s ease',
  },
  '&:hover': {
    transform: 'scale(1.02)',
    border: '2px solid rgba(0, 243, 255, 0.5)',
    boxShadow: '0 8px 25px rgba(0, 243, 255, 0.25)',
    '&::before': {
      transform: 'translateX(100%)',
    },
    '& .skill-icon': {
      color: '#00f3ff',
      transform: 'scale(1.1) rotate(10deg)',
    },
    '& .skill-title': {
      color: '#00f3ff',
      textShadow: '0 0 10px rgba(0, 243, 255, 0.5)',
    }
  }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  color: 'rgba(0, 243, 255, 0.7)',
  marginBottom: theme.spacing(2),
  transition: 'all 0.4s ease',
  animation: `${float} 3s ease-in-out infinite`,
  '& svg': {
    fontSize: '2.5rem',
  },
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  color: '#fff',
  marginBottom: theme.spacing(1.5),
  fontSize: '1.25rem',
  fontWeight: 600,
  letterSpacing: '-0.02em',
  transition: 'all 0.3s ease',
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
}));

const SkillDescription = styled(Typography)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.9)',
  marginBottom: theme.spacing(2),
  fontSize: '0.85rem',
  lineHeight: 1.5,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
}));

const ChipsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.75),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  background: 'rgba(0, 243, 255, 0.1)',
  color: '#fff',
  border: '1px solid rgba(0, 243, 255, 0.3)',
  borderRadius: '8px',
  fontSize: '0.75rem',
  fontWeight: 500,
  height: '24px',
  transition: 'all 0.3s ease',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    background: 'rgba(0, 243, 255, 0.15)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 20px rgba(0, 243, 255, 0.15)',
    border: '1px solid rgba(0, 243, 255, 0.5)',
  },
}));

const labelsFirst = [
    "SIEM",
    "EDR",
    "IDS/IPS",
    "Threat Hunting",
    "Incident Response",
    "Log Analysis",
    "Security Monitoring",
    "Vulnerability Management",
    "Security Tools",
    "Compliance"
];

const labelsSecond = [
    "Web App Testing",
    "Network Testing",
    "API Security",
    "OWASP Top 10",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Kali Linux",
    "Security Tools"
];

const labelsThird = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "Git"
];

const labelsFourth = [
    "Disk Forensics",
    "Memory Analysis",
    "Network Forensics",
    "Mobile Forensics",
    "Malware Analysis",
    "Evidence Collection",
    "Forensic Tools",
    "Incident Investigation"
];

function Expertise() {
    return (
        <StyledContainer id="expertise">
            <Title variant="h1">Expertise</Title>
            <SkillsGrid>
                <SkillCard elevation={0}>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faShieldAlt} />
                    </IconWrapper>
                    <SkillTitle>Security Operations Center</SkillTitle>
                    <SkillDescription>
                        Experienced in managing and operating Security Operations Centers (SOC), implementing security monitoring solutions, and responding to security incidents. Proficient in SIEM tools, threat hunting, and security event analysis.
                    </SkillDescription>
                    <ChipsContainer>
                        {labelsFirst.map((label, index) => (
                            <StyledChip key={index} label={label} />
                        ))}
                    </ChipsContainer>
                </SkillCard>

                <SkillCard elevation={0}>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faBug} />
                    </IconWrapper>
                    <SkillTitle>Penetration Testing</SkillTitle>
                    <SkillDescription>
                        Skilled in conducting comprehensive security assessments including web application penetration testing, network security testing, and API security testing. Experienced in identifying and exploiting vulnerabilities while providing detailed remediation guidance.
                    </SkillDescription>
                    <ChipsContainer>
                        {labelsSecond.map((label, index) => (
                            <StyledChip key={index} label={label} />
                        ))}
                    </ChipsContainer>
                </SkillCard>

                <SkillCard elevation={0}>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faCode} />
                    </IconWrapper>
                    <SkillTitle>Web Development</SkillTitle>
                    <SkillDescription>
                        Proficient in modern web development technologies and frameworks. Experienced in building secure, responsive, and user-friendly web applications with a focus on security best practices and clean code architecture.
                    </SkillDescription>
                    <ChipsContainer>
                        {labelsThird.map((label, index) => (
                            <StyledChip key={index} label={label} />
                        ))}
                    </ChipsContainer>
                </SkillCard>

                <SkillCard elevation={0}>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faSearch} />
                    </IconWrapper>
                    <SkillTitle>Digital Forensics</SkillTitle>
                    <SkillDescription>
                        Experienced in digital forensics investigations, evidence collection, and analysis. Proficient in various forensic tools and techniques for disk analysis, memory forensics, and network forensics to support incident response and legal proceedings.
                    </SkillDescription>
                    <ChipsContainer>
                        {labelsFourth.map((label, index) => (
                            <StyledChip key={index} label={label} />
                        ))}
                    </ChipsContainer>
                </SkillCard>
            </SkillsGrid>
        </StyledContainer>
    );
}

export default Expertise;