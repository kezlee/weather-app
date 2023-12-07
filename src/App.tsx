import React, { useState } from 'react';
import './App.css';
import styled, { css, ThemeProvider, DefaultTheme } from 'styled-components'
import WeatherApp from './modules/WeatherApp';
import { lightTheme, darkTheme } from './styles/Theme';
import { Switch, FormGroup, FormControlLabel } from '@mui/material';

const Main = styled.section(
  ({theme}: DefaultTheme) => css`
    background: url(${theme.background}) center center;
    padding: 70px 0 40px;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
  `
)

const Switcher = styled.div(
  ({theme}: DefaultTheme) => css`
    position: absolute;
    right: 20px;
    top: 20px;
    color: ${theme.text};

    span {
      font-size: 14px;
    }
`)

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  const updateTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDarkTheme(event.target.checked);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Main>
        <Switcher>
          <FormGroup>
            <FormControlLabel control={<Switch color="default" checked={isDarkTheme} onChange={updateTheme} />} label="Dark Mode" />
          </FormGroup>
        </Switcher>
        <WeatherApp></WeatherApp>
      </Main>
    </ThemeProvider>

  );
}

export default App;
