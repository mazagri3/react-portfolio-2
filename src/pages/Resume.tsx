import React from 'react';
import { Box, Typography, Stack, Divider } from '@mui/material';

// For Instructor:
// - This Resume page displays the resume as styled text for clarity and professionalism.
// - Uses Material UI for layout and styling.
// - Content is based on the student's provided resume.

const Resume: React.FC = () => (
  <Box sx={{ bgcolor: '#181818', color: '#fff', minHeight: '80vh', p: 4, textAlign: 'left', maxWidth: 800, mx: 'auto' }}>
    <Typography variant="h3" fontWeight={700} color="gold" mb={2} textAlign="center">
      Resume
    </Typography>
    <Typography variant="h5" fontWeight={700} mb={1}>
      Obi Mazagri
    </Typography>
    <Typography variant="body1" mb={1}>
      2354 Indiana Avenue, Columbus, OH, 43201<br />
      <b>obrida@live.com</b> • <b>304.550.6742</b>
    </Typography>
    <Divider sx={{ bgcolor: 'gold', my: 2 }} />
    <Typography variant="h6" fontWeight={700} color="gold" mb={1}>Experience</Typography>
    <Stack spacing={2}>
      <Box>
        <Typography fontWeight={700}>Real Estate Investor & Landlord</Typography>
        <Typography fontSize={14}>Self-Employed | Huntington, WV | Jan 2020 – Present</Typography>
        <ul>
          <li>Purchased and renovated investment properties into fully furnished, high-income duplex units.</li>
          <li>Oversee all leasing, tenant relations, maintenance, and compliance.</li>
          <li>Manage utilities, building systems, and financial operations, ensuring property habitability and tenant satisfaction.</li>
        </ul>
      </Box>
      <Box>
        <Typography fontWeight={700}>Commercial Roofing Sales Executive</Typography>
        <Typography fontSize={14}>Highland Roofing & Construction | Charleston, WV | Feb 2024 – Present</Typography>
        <ul>
          <li>Closed large-scale commercial roofing deals through consultative selling and solution-based presentations.</li>
          <li>Managed field assessments, client education, and project scoping.</li>
          <li>Cultivated long-term partnerships and consistently exceeded sales benchmarks.</li>
        </ul>
      </Box>
      <Box>
        <Typography fontWeight={700}>International Physical Therapy Technician</Typography>
        <Typography fontSize={14}>Golden Co. Medical Services | Tripoli, Libya | Sep 2023 – Feb 2024</Typography>
        <ul>
          <li>Delivered therapy support and patient care in a cross-cultural healthcare setting.</li>
          <li>Guided patients and families through treatment plans, exercises, and equipment usage.</li>
        </ul>
      </Box>
      <Box>
        <Typography fontWeight={700}>Logistics & Distribution Clerk</Typography>
        <Typography fontSize={14}>Cedar Distribution | Huntington, WV | Feb 2020 – Sep 2022</Typography>
        <ul>
          <li>Directed shipping operations, managed inventory systems, and improved fulfillment workflows.</li>
          <li>Led coordination across vendors and departments for high-volume order execution.</li>
          <li>Streamlined warehouse management and data entry for tracking systems.</li>
        </ul>
      </Box>
    </Stack>
    <Divider sx={{ bgcolor: 'gold', my: 2 }} />
    <Typography variant="h6" fontWeight={700} color="gold" mb={1}>Education</Typography>
    <ul>
      <li>Software Engineering & Development Boot Camp (In Progress) – The Ohio State University | Certificate Expected Summer 2025</li>
      <li>Bachelor of Science, Exercise Physiology – Marshall University | May 2020 – Pre-Physician Assistant Track – GPA: 3.45</li>
      <li>Associate of Science, Exercise Physiology – Columbus State Community College | May 2022 – GPA: 3.65 (Dean's List)</li>
    </ul>
    <Divider sx={{ bgcolor: 'gold', my: 2 }} />
    <Typography variant="h6" fontWeight={700} color="gold" mb={1}>Skills</Typography>
    <Typography variant="body1" mb={2}>
      • JavaScript • HTML/CSS • Git & GitHub • Real Estate Operations • CRM Systems • Sales Strategy • Healthcare Support<br />
      • Bilingual: English & Arabic • Microsoft Office Suite • Team Leadership • Communication • Time Management
    </Typography>
    <Divider sx={{ bgcolor: 'gold', my: 2 }} />
    <Typography variant="h6" fontWeight={700} color="gold" mb={1}>Leadership & Volunteer Experience</Typography>
    <ul>
      <li>Leader in community-led mosque construction initiatives in Charleston and Huntington, WV</li>
      <li>Volunteered 300+ hours at PALS Disability Services (shadowing/interning in patient support)</li>
      <li>ESL Instructor at School of Tabarak in Libya, organizing student learning and engagement.</li>
    </ul>
  </Box>
);

export default Resume; 