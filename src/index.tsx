import React from 'react';

import { Router } from 'Router';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'ress';
import { ThemeProvider } from 'styled-components';

import * as theme from 'utils/theme';

import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    <ToastContainer autoClose={1000} />
  </React.StrictMode>,
);
