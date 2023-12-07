import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import React from 'react';

const theme = createTheme();

const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
};

export default Providers;