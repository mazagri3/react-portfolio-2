import React from 'react';
import { Box, Typography, Stack, Link, IconButton } from '@mui/material';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

// For Instructor:
// - This Footer uses Material UI for a modern, responsive look with gold accents.
// - Displays social links (LinkedIn, Instagram, GitHub) and contact info.
// - Ready for further customization.

const Footer: React.FC = () => (
  <Box sx={{ bgcolor: '#181818', color: 'gold', py: 3, borderTop: '2px solid gold', mt: 6 }}>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="space-between" maxWidth={900} mx="auto" px={2}>
      <Typography variant="body2" fontWeight={700}>
        &copy; {new Date().getFullYear()} Obi Mazagri
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <IconButton component={Link} href="https://www.linkedin.com/in/ob-mazagri-42225a242/" target="_blank" rel="noopener" sx={{ color: 'gold' }}>
          <FaLinkedin size={24} />
        </IconButton>
        <IconButton component={Link} href="https://www.instagram.com/ob_mazagri47/" target="_blank" rel="noopener" sx={{ color: 'gold' }}>
          <FaInstagram size={24} />
        </IconButton>
        <IconButton component={Link} href="https://github.com/mazagri3" target="_blank" rel="noopener" sx={{ color: 'gold' }}>
          <FaGithub size={24} />
        </IconButton>
      </Stack>
      <Typography variant="body2" color="#ccc">
        Contact: 304-550-6742 | obrida2live.com
      </Typography>
    </Stack>
  </Box>
);

export default Footer; 