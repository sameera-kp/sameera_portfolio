import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda', // Teal Accent Color
    },
    background: {
      default: '#0a192f', // Dark Navy Background
      paper: '#112240',   // Light Navy Card Background
    },
    text: {
      primary: '#ccd6f6',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
});

export default theme;