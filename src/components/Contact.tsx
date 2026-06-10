'use client';
import React, { useState, useRef } from 'react';
import { Container, Typography, Box, Button, TextField, Grid, Alert, Snackbar } from '@mui/material';
import { Email, Phone, GitHub, LinkedIn, Send } from '@mui/icons-material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // <-- EmailJS 

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;
    emailjs.sendForm(
      'service_yzregui', 
      'template_01yv1vi', 
      formRef.current, 
      'OBjciQl1lwE8F29Xc'
    )
    .then(() => {
      setLoading(false);
      setStatus({ success: true, message: "Message Sent Successfully!" });
      formRef.current?.reset(); 
    })
    .catch((error) => {
      setLoading(false);
      setStatus({ success: false, message: "Failed to send message. Please try again." });
      console.error("EmailJS Error:", error);
    });
  };

  return (
    <Container maxWidth="md" id="contact" sx={{ py: 10, borderTop: '1px solid #112240' }}>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="body2" sx={{ color: '#64ffda', fontFamily: 'monospace', mb: 1 }}>05. What's Next?</Typography>
          <Typography variant="h3" sx={{ color: '#ccd6f6', fontWeight: 'bold', mb: 2 }}>Get In Touch</Typography>
          <Typography variant="body1" sx={{ color: '#8892b0', maxWidth: '500px', mx: 'auto' }}>
            I'm always open to new full-stack opportunities or discussions. Drop a message, and I'll get back to you as soon as possible!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 3 }}>
            <Box>
              <Button href="mailto:zakraya60@gmail.com" startIcon={<Email />} sx={{ color: '#8892b0', '&:hover': { color: '#64ffda' }, textTransform: 'none', fontSize: '1rem' }}>
                zakraya60@gmail.com
              </Button>
            </Box>
            <Box>
              <Button href="tel:+971585133244" startIcon={<Phone />} sx={{ color: '#8892b0', '&:hover': { color: '#64ffda' }, textTransform: 'none', fontSize: '1rem' }}>
                +971 58 513 3244
              </Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
              <Button href="https://github.com/sameera-kp" target="_blank" variant="outlined" sx={{ color: '#64ffda', borderColor: '#64ffda', minWidth: 'auto', p: 1.5, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(100, 255, 218, 0.1)', borderColor: '#64ffda' } }}>
                <GitHub />
              </Button>
              <Button href="https://www.linkedin.com/in/sameera-manaf-dev" target="_blank" variant="outlined" sx={{ color: '#64ffda', borderColor: '#64ffda', minWidth: 'auto', p: 1.5, borderRadius: '50%', '&:hover': { bgcolor: 'rgba(100, 255, 218, 0.1)', borderColor: '#64ffda' } }}>
                <LinkedIn />
              </Button>
            </Box>
          </Grid>
        <Grid item xs={12} md={7}>
            <Box component="form" ref={formRef} onSubmit={sendEmail} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, bgcolor: '#112240', p: 4, borderRadius: 3, border: '1px solid #233554' }}>
              
              <TextField fullWidth label="Your Name" name="name" variant="outlined" required sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#233554' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } }, '& .MuiInputLabel-root': { color: '#8892b0' }, '& .MuiInputBase-input': { color: '#ccd6f6' } }} />
              
              <TextField fullWidth label="Your Email" type="email" name="email" variant="outlined" required sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#233554' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } }, '& .MuiInputLabel-root': { color: '#8892b0' }, '& .MuiInputBase-input': { color: '#ccd6f6' } }} />
              
              <TextField fullWidth label="Your Message" name="message" multiline rows={5} variant="outlined" required sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#233554' }, '&:hover fieldset': { borderColor: '#64ffda' }, '&.Mui-focused fieldset': { borderColor: '#64ffda' } }, '& .MuiInputLabel-root': { color: '#8892b0' }, '& .MuiInputBase-input': { color: '#ccd6f6' } }} />
              
              <Button type="submit" variant="contained" disabled={loading} endIcon={<Send />} sx={{ bgcolor: '#64ffda', color: '#0a192f', fontWeight: 'bold', py: 1.5, '&:hover': { bgcolor: '#52e0bd' }, textTransform: 'none' }}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
      <Snackbar open={status !== null} autoHideDuration={5000} onClose={() => setStatus(null)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={() => setStatus(null)} severity={status?.success ? 'success' : 'error'} sx={{ width: '100%' }}>
          {status?.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}