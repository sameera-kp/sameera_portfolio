'use client';
import React from 'react';
import { Container, Typography, Box, Button, Avatar, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Download } from '@mui/icons-material';

export default function Hero() {
    return (
        <Container maxWidth="lg" id="hero" sx={{ minHeight: '85vh', display: 'flex', alignItems: 'center', py: { xs: 5, md: 0 } }}>
            <Grid container spacing={4} alignItems="center">
                {/* text section */}
              <Grid item xs={12} md={7}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <Typography variant="subtitle2" sx={{ color: '#64ffda', fontFamily: 'monospace', mb: 2 }}>
                            Hi, my name is
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                        <Typography variant="h2" sx={{ fontWeight: 800, color: '#ccd6f6', fontSize: { xs: '2.5rem', md: '4rem' }, mb: 1 }}>
                            Sameera Manaf.
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: '#8892b0', fontSize: { xs: '1.8rem', md: '3rem' }, mb: 3 }}>
                            I build scalable web applications.
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                        <Typography variant="body1" sx={{ color: '#8892b0', maxWidth: '600px', fontSize: '1.1rem', mb: 5, lineHeight: 1.6 }}>
                            I am a passionate Full Stack Developer with hands-on experience building web platforms using <span style={{ color: '#64ffda' }}>React.js, Next.js 15</span> on the frontend and <span style={{ color: '#64ffda' }}>Python, Django REST Framework</span> on the backend.
                        </Typography>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button href="#projects" variant="contained" sx={{ bgcolor: '#64ffda', color: '#0a192f', fontWeight: 'bold', px: 4, py: 1.5, '&:hover': { bgcolor: '#52e0bd' }, textTransform: 'none' }}>
                                View My Work
                            </Button>

                            {/* DOWNLOAD RESUME BUTTON */}
                            <Button href="/sameera_portfolio/resume.pdf" download variant="outlined" startIcon={<Download />} sx={{ borderColor: '#64ffda', color: '#64ffda', px: 4, py: 1.5, '&:hover': { borderColor: '#64ffda', bgcolor: 'rgba(100, 255, 218, 0.1)' }, textTransform: 'none' }}>
                                Download Resume
                            </Button>
                        </Box>
                    </motion.div>
                </Grid>

                {/* photo section */}
            <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <Box sx={{ position: 'relative', '&::after': { content: '""', display: 'block', position: 'absolute', width: '100%', height: '100%', border: '2px solid #64ffda', borderRadius: '16px', top: '15px', left: '15px', zIndex: -1, transition: '0.3s', }, '&:hover::after': { top: '10px', left: '10px' } }}>
                            <Avatar
                                src="/sameera_portfolio/my-photo.jpeg"
                                alt="Sameera Manaf"
                                variant="rounded"
                                sx={{
                                    width: { xs: 250, md: 320 },
                                    height: { xs: 250, md: 320 },
                                    borderRadius: '16px',
                                    objectFit: 'cover',
                                    border: '2px solid #64ffda'
                                }}
                            />
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
}