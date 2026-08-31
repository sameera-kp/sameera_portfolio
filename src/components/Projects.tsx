'use client';
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Chip } from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

export default function Projects() {
  const projectsList = [
    { 
      name: 'Atelier - Luxury Interior Design Studio', 
      desc: 'High-end responsive portfolio website featuring dynamic video banners, custom image sliders, and an interactive Before/After renovation showcase.', 
      tech: ['Next.js 15', 'React', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/sameera-kp', 
      liveUrl: 'https://atelier-website-ten.vercel.app/' 
    },
    { 
      name: 'CRM Live Platform', 
      desc: 'Full stack CRM with Deals, Leads, Contacts & Companies modules. Implemented advanced filters, pagination, and lead-to-deal conversion flows.', 
      tech: ['Next.js 15', 'MUI', 'Redux Toolkit', 'Django DRF', 'PostgreSQL'],
      githubUrl: 'https://github.com/sameera-kp/CRM_APP.git' 
    },
    { 
      name: 'Kitchen Display System (KDS)', 
      desc: 'Real-time kitchen management app enabling order updates and status tracking between counter and kitchen staff using WebSockets.', 
      tech: ['FastAPI', 'Python', 'React', 'WebSockets', 'SQLAlchemy'],
      githubUrl: 'https://github.com/sameera-kp/restaurant-kds-project.git' 
    },
    { 
      name: 'Nexus Commerce Engine', 
      desc: 'High-performance commerce platform with complex filtering, search, and dynamic layout routing using GraphQL for efficient fetching.', 
      tech: ['Next.js 15', 'GraphQL', 'TypeScript', 'App Router'],
      githubUrl: 'https://github.com/sameera-kp/nexus-commerce-engine.git'
    },
    { 
      name: 'Health Track Pro', 
      desc: 'Healthcare management system focusing on secure patient data handling and a real-time responsive appointment scheduling interface.', 
      tech: ['React', 'Python', 'Prisma', 'PostgreSQL'],
      githubUrl: 'https://github.com/sameera-kp/health-track-pro.git' 
    },
    { 
      name: 'Expense Tracker', 
      desc: 'A comprehensive personal finance tracking application built to manage daily incomes and expenses, featuring user authentication, category-wise breakdown, and clean data logs.', 
      tech: ['Python', 'Django', 'Bootstrap', 'SQLite'],
      githubUrl: 'https://github.com/sameera-kp/expense-tracker-django.git' 
    }
  ];

  return (
    <Container maxWidth="lg" id="projects" sx={{ py: 10, borderTop: '1px solid #112240' }}>
      <Typography variant="h4" sx={{ color: '#ccd6f6', fontWeight: 'bold', mb: 5 }}>
        <span style={{ color: '#64ffda', fontFamily: 'monospace', fontSize: '1.5rem', marginRight: '10px' }}>04.</span> Projects
      </Typography>
      <Grid container spacing={3}>
        {projectsList.map((project, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ bgcolor: '#112240', border: '1px solid #233554', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: 3, p: 1 }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: '#ccd6f6', fontWeight: 'bold', mb: 1.5 }}>{project.name}</Typography>
                <Typography variant="body2" sx={{ color: '#8892b0', mb: 3, lineHeight: 1.6 }}>{project.desc}</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map((t, i) => (
                    <Chip key={i} label={t} size="small" sx={{ bgcolor: 'rgba(100, 255, 218, 0.05)', color: '#64ffda', borderRadius: '4px', fontFamily: 'monospace', fontSize: '0.75rem' }} />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ px: 2, pb: 2, display: 'flex', gap: 2 }}>
                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small" 
                    startIcon={<GitHub />} 
                    sx={{ color: '#ccd6f6', '&:hover': { color: '#64ffda' }, textTransform: 'none' }}
                  >
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small" 
                    startIcon={<Launch />} 
                    sx={{ color: '#64ffda', '&:hover': { color: '#fff' }, textTransform: 'none' }}
                  >
                    Live Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}