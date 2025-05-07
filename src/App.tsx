import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import About from './pages/About';
import Hero from './pages/Hero';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Components (to be created)
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Hero from './pages/Hero';
// import Projects from './pages/Projects';
// import Resume from './pages/Resume';
// import Contact from './pages/Contact';

// TODO: Create the above components/pages and import them here

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg" disableGutters>
        <Box sx={{ minHeight: '100vh', bgcolor: '#181818', color: '#fff' }}>
          {/*
            For Instructor:
            - This layout uses Material UI for a modern, responsive look.
            - Routing is set up for all main sections (to be implemented next).
            - Navbar and Footer will be added for navigation and social links.
          */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<div>Projects Section (to be implemented)</div>} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
