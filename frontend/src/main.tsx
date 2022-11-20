import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/languages/index';
import Root from './navigation/Root';
import CssBaseline from '@/components/atom/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        <link rel='icon' type='image/svg+xml' href='/vite.svg' />
        <title>Vite + React + TS</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <CssBaseline>
            <Root />
          </CssBaseline>
        </RecoilRoot>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
