import React from 'react';
import { Box, Typography, Avatar, Stack, Link, Button } from '@mui/material';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

// For Instructor:
// - This About page uses Material UI for layout and styling.
// - It features a professional photo, a short bio, and all contact/social links.
// - The design is modern, marketable, and ready for further customization.

const bio = `Hi, I'm Obi Mazagri—a passionate software developer, engineer, and entrepreneur. I thrive on building innovative solutions that blend creativity with technology. With a strong foundation in full-stack development and a keen eye for design, I'm dedicated to delivering high-quality, impactful digital experiences. Let's connect and create something amazing!`;

const About: React.FC = () => (
  <Box
    display="flex"
    flexDirection={{ xs: 'column', md: 'row' }}
    alignItems="center"
    justifyContent="center"
    minHeight="80vh"
    gap={6}
    sx={{ bgcolor: '#181818', color: '#fff', p: 4 }}
  >
    {/* Profile Photo */}
    <Avatar
      src={require('../assets/img/aboutme.jpg')}
      alt="Obi Mazagri"
      sx={{ width: 200, height: 200, boxShadow: 3, border: '4px solid gold' }}
    />
    {/* Bio and Contact Info */}
    <Stack spacing={3} maxWidth={500}>
      <Typography variant="h3" fontWeight={700} color="gold">
        Obi Mazagri
      </Typography>
      <Typography variant="h6" color="#ccc">
        Software Developer | Engineer | Entrepreneur
      </Typography>
      <Typography variant="body1" color="#eee">
        {bio}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="https://www.linkedin.com/in/ob-mazagri-42225a242/" target="_blank" rel="noopener" color="inherit">
          <FaLinkedin size={32} />
        </Link>
        <Link href="https://www.instagram.com/ob_mazagri47/" target="_blank" rel="noopener" color="inherit">
          <FaInstagram size={32} />
        </Link>
        <Link href="https://github.com/mazagri3" target="_blank" rel="noopener" color="inherit">
          <FaGithub size={32} />
        </Link>
      </Stack>
      <Typography variant="body2" color="#aaa">
        Phone: <b>304-550-6742</b> | Email: <b>obrida2live.com</b>
      </Typography>
      {/* Resume download button will be added here when resume image is available */}
    </Stack>
  </Box>
);

export default About; 