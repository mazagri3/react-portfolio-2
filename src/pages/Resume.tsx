import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

// For Instructor:
// - This Resume page displays the resume as an image and provides a download button.
// - Uses Material UI for layout and styling.
// - The resume image should be placed in src/assets/img/resume.jpg (replace placeholder as needed).

const resumeImg = require('../assets/img/resume.jpg'); // Replace with your actual resume image

const Resume: React.FC = () => (
  <Box sx={{ bgcolor: '#181818', color: '#fff', minHeight: '80vh', p: 4, textAlign: 'center' }}>
    <Typography variant="h3" fontWeight={700} color="gold" mb={4}>
      Resume
    </Typography>
    <Stack spacing={3} alignItems="center">
      <Box
        component="img"
        src={resumeImg}
        alt="Obi Mazagri Resume"
        sx={{ maxWidth: '100%', maxHeight: 600, border: '3px solid gold', borderRadius: 2, boxShadow: 3 }}
      />
      <Button
        href={resumeImg}
        download="Obi_Mazagri_Resume.jpg"
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{ bgcolor: 'gold', color: '#181818', fontWeight: 700, '&:hover': { bgcolor: '#ffd700' } }}
      >
        Download Resume
      </Button>
    </Stack>
  </Box>
);

export default Resume; 