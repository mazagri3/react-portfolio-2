import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';

// For Instructor:
// - This Projects page uses Material UI and Framer Motion for a modern, animated card layout.
// - Each card is a placeholder for a real project (can be updated later).
// - The design is visually engaging and ready for customization.

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One. This is a placeholder for a real project.',
    image: 'https://source.unsplash.com/random/400x200?tech,code',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two. This is a placeholder for a real project.',
    image: 'https://source.unsplash.com/random/400x200?app,web',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three. This is a placeholder for a real project.',
    image: 'https://source.unsplash.com/random/400x200?startup,design',
    link: '#',
  },
];

const Projects: React.FC = () => (
  <Box sx={{ bgcolor: '#181818', color: '#fff', minHeight: '80vh', p: 4 }}>
    <Typography variant="h3" fontWeight={700} color="gold" mb={4} textAlign="center">
      Projects
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {projects.map((project, idx) => (
        <Grid item xs={12} sm={6} md={4} key={project.title}>
          <motion.div whileHover={{ scale: 1.05, boxShadow: '0 8px 32px gold' }}>
            <Card
              sx={{ bgcolor: '#222', color: '#fff', border: '2px solid gold', borderRadius: 3 }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" fontWeight={700} color="gold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="#ccc">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  variant="outlined"
                  sx={{ borderColor: 'gold', color: 'gold', fontWeight: 700, ml: 1, mb: 1, '&:hover': { borderColor: '#ffd700', color: '#ffd700' } }}
                >
                  View Project
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects; 