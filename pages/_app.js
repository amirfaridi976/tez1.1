// pages/_app.js

import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Container } from '@mui/material';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);

  const theme = createTheme({
    palette: {
      mode: isDark ? 'dark' : 'light',
    },
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar dir='rtl' toggleTheme={toggleTheme} isDark={isDark} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
