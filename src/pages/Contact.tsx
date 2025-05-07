import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Stack, Alert } from '@mui/material';

// For Instructor:
// - This Contact page features a modern, user-friendly form and displays phone/email.
// - Uses Material UI for layout and styling.
// - Form submission is simulated (no backend integration).

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ bgcolor: '#181818', color: '#fff', minHeight: '80vh', p: 4, textAlign: 'center' }}>
      <Typography variant="h3" fontWeight={700} color="gold" mb={4}>
        Contact
      </Typography>
      <Stack spacing={3} alignItems="center" maxWidth={500} mx="auto">
        <Typography variant="body1" color="#ccc">
          Phone: <b>304-550-6742</b> | Email: <b>obrida2live.com</b>
        </Typography>
        {submitted && <Alert severity="success">Thank you! Your message has been sent.</Alert>}
        <Box component="form" onSubmit={handleSubmit} width="100%">
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: 'gold' } }}
              InputProps={{ style: { color: '#fff', borderColor: 'gold' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gold' },
                  '&:hover fieldset': { borderColor: '#ffd700' },
                },
                '& label': { color: 'gold' },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: 'gold' } }}
              InputProps={{ style: { color: '#fff', borderColor: 'gold' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gold' },
                  '&:hover fieldset': { borderColor: '#ffd700' },
                },
                '& label': { color: 'gold' },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              minRows={4}
              value={form.message}
              onChange={handleChange}
              required
              InputLabelProps={{ style: { color: 'gold' } }}
              InputProps={{ style: { color: '#fff', borderColor: 'gold' } }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'gold' },
                  '&:hover fieldset': { borderColor: '#ffd700' },
                },
                '& label': { color: 'gold' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: 'gold', color: '#181818', fontWeight: 700, '&:hover': { bgcolor: '#ffd700' } }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Contact; 