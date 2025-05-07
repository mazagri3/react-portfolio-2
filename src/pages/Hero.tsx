import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// For Instructor:
// - This Hero section is the landing page and uses Material UI and Framer Motion for a modern, animated look.
// - It features a bold intro, animated text, and a call-to-action button.
// - The color palette is dark with gold accents for a marketable, impressive feel.

const Hero: React.FC = () => (
  <Box
    component={motion.div}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    minHeight="80vh"
    sx={{ bgcolor: '#181818', color: '#fff', textAlign: 'center', p: 4 }}
  >
    <Typography
      component={motion.h1}
      variant="h2"
      fontWeight={900}
      color="gold"
      gutterBottom
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      Obi Mazagri
    </Typography>
    <Typography
      component={motion.h2}
      variant="h5"
      color="#ccc"
      fontWeight={500}
      gutterBottom
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.7 }}
    >
      Software Developer | Engineer | Entrepreneur
    </Typography>
    <Typography
      component={motion.p}
      variant="body1"
      color="#eee"
      maxWidth={600}
      mb={4}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.7 }}
    >
      Building innovative, high-impact digital experiences. Let's connect and create something amazing!
    </Typography>
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Button
        component={RouterLink}
        to="/projects"
        variant="contained"
        size="large"
        sx={{ bgcolor: 'gold', color: '#181818', fontWeight: 700, '&:hover': { bgcolor: '#ffd700' } }}
      >
        View My Work
      </Button>
      <Button
        component={RouterLink}
        to="/contact"
        variant="outlined"
        size="large"
        sx={{ borderColor: 'gold', color: 'gold', fontWeight: 700, '&:hover': { borderColor: '#ffd700', color: '#ffd700' } }}
      >
        Contact Me
      </Button>
    </Stack>
  </Box>
);

export default Hero; 