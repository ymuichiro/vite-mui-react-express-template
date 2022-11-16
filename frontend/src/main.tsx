import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './navigation/Root';
import CssBaseline from '@/components/atom/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <CssBaseline>
          <Root />
        </CssBaseline>
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);
