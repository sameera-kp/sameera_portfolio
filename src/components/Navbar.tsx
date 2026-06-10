'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Container } from '@mui/material';

export default function Navbar() {
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)', boxShadow: 'none', borderBottom: '1px solid #233554' }}>
      <Toolbar component={Container} maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: '#64ffda', letterSpacing: 1 }}>
          SAMEERA.MANAF
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <Button key={item} href={`#${item.toLowerCase()}`} sx={{ color: '#ccd6f6', '&:hover': { color: '#64ffda' }, textTransform: 'none', fontSize: '0.9rem' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}