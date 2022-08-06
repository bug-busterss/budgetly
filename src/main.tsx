import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import useGoogleFonts from 'use-google-fonts';
import './index.css';
import { ModalsProvider } from '@mantine/modals';

const Main = () => {
  useGoogleFonts([['Poppins', '500']]);
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <React.StrictMode>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            fontFamily: 'Poppins',
            headings: { fontFamily: 'Poppins' },
            components: {
              Input: {
                styles: theme => ({
                  input: { borderColor: theme.colors.gray[6] },
                }),
              },
            },
          }}
        >
          <ModalsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Main />
);
