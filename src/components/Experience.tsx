'use client';
import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';

export default function Experience() {
  return (
    <Container maxWidth="lg" id="experience" sx={{ py: 10, borderTop: '1px solid #112240' }}>
      <Typography variant="h4" sx={{ color: '#ccd6f6', fontWeight: 'bold', mb: 4 }}>
        <span style={{ color: '#64ffda', fontFamily: 'monospace', fontSize: '1.5rem', marginRight: '10px' }}>03.</span> Experience
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Card sx={{ bgcolor: '#112240', border: '1px solid #233554', p: 4, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mb: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ color: '#ccd6f6', fontWeight: 'bold' }}>Full Stack Developer Intern</Typography>
              <Typography variant="subtitle1" sx={{ color: '#64ffda' }}>Upcode Software Labs (Remote/Hybrid)</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#8892b0', fontFamily: 'monospace', mt: { xs: 1, sm: 0 } }}>June 2025 - Present</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Typography variant="body2" sx={{ color: '#8892b0' }}>
              • Built a full-featured CRM platform frontend with Next.js 15 & MUI and backend with Django REST Framework.
            </Typography>
            <Typography variant="body2" sx={{ color: '#8892b0' }}>
              • Developed and consumed REST APIs for Deals, Leads, Contacts, and Companies modules including CRUD and CSV data handling.
            </Typography>
            <Typography variant="body2" sx={{ color: '#8892b0' }}>
              • Improved data loading efficiency by 20% and boosted performance & SEO by 25% using Next.js SSR and Redux state optimization.
            </Typography>
            <Typography variant="body2" sx={{ color: '#8892b0' }}>
              • Collaborated in an Agile team of 5+ developers, delivering sprint goals ahead of schedule.
            </Typography>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}