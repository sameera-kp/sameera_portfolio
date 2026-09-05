'use client';
import React from 'react';
import { Container, Typography, Grid, Card, Avatar } from '@mui/material';
import { Place } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Container maxWidth="lg" id="about" sx={{ py: 10, borderTop: '1px solid #112240' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }} 
      >
        <Typography variant="h4" sx={{ color: '#ccd6f6', fontWeight: 700, mb: 4 }}>
          <span style={{ color: '#64ffda', fontFamily: 'monospace', fontSize: '1.5rem', marginRight: '10px' }}>01.</span> About Me
        </Typography>
        <Grid container spacing={4}>
       <Grid item xs={12} md={7}>
            <Typography variant="body1" sx={{ color: '#8892b0', mb: 2, lineHeight: 1.7 }}>
  I thrive at the intersection of frontend aesthetics and backend logic. As a Full Stack Developer, I specialize in building responsive web applications using <span style={{ color: '#64ffda' }}>React.js, Next.js, and TypeScript</span>, backed by powerful APIs powered by <span style={{ color: '#64ffda' }}>Python and Django REST Framework</span>.
</Typography>

<Typography variant="body1" sx={{ color: '#8892b0', lineHeight: 1.7 }}>
  Recently, I have been building dynamic real-time web solutions, including a live <span style={{ color: '#64ffda' }}>Kitchen Display System (KDS)</span> with WebSocket integrations for instant data sync, as well as freelancing on client-focused full-stack projects. My focus is always on writing clean, scalable code that delivers high performance and a seamless user experience.
</Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ bgcolor: '#112240', border: '1px solid #233554', borderRadius: 4, p: 3, textAlign: 'center', width: '100%' }}>
              <Avatar sx={{ bgcolor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', width: 60, height: 60, mx: 'auto', mb: 2 }}>
                <Place />
              </Avatar>
              <Typography variant="h6" sx={{ color: '#ccd6f6', fontWeight: 700 }}>Based in</Typography>
              <Typography variant="body2" sx={{ color: '#8892b0', mt: 0.5 }}>Dubai, UAE</Typography>
            </Card>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}