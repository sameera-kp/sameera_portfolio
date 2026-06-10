'use client';
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { Code, Speed, Storage, Terminal } from '@mui/icons-material';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', icon: <Code sx={{ color: '#64ffda' }} />, skills: ['React.js / Next.js 15', 'TypeScript / JavaScript', 'HTML5 / CSS3 / SCSS', 'Bootstrap'] },
    { title: 'UI & State', icon: <Speed sx={{ color: '#64ffda' }} />, skills: ['Material UI (MUI)', 'Tailwind CSS', 'Redux Toolkit', 'Context API'] },
    { title: 'Backend & DB', icon: <Storage sx={{ color: '#64ffda' }} />, skills: ['Python / Django', 'Django REST (DRF)', 'GraphQL / REST APIs', 'PostgreSQL / Prisma'] },
    { title: 'Tools & Soft Skills', icon: <Terminal sx={{ color: '#64ffda' }} />, skills: ['Git / GitHub', 'Vercel / Postman', 'Problem-Solving', 'Agile Collaboration'] }
  ];

  return (
    <Container maxWidth="lg" id="skills" sx={{ py: 10, borderTop: '1px solid #112240' }}>
      <Typography variant="h4" sx={{ color: '#ccd6f6', fontWeight: 'bold', mb: 5 }}>
        <span style={{ color: '#64ffda', fontFamily: 'monospace', fontSize: '1.5rem', marginRight: '10px' }}>02.</span> Technical Skills
      </Typography>
      <Grid container spacing={3}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ bgcolor: '#112240', border: '1px solid #233554', h: '100%', borderRadius: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  {category.icon}
                  <Typography variant="subtitle1" sx={{ color: '#ccd6f6', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: 1 }}>
                    {category.title}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {category.skills.map((skill, i) => (
                    <Typography key={i} variant="body2" sx={{ color: '#8892b0' }}>
                      • {skill}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}