import React from 'react';
import background from './assets/images/bg-dark.png';
import './App.css';
import styled, { css } from 'styled-components'
import WeatherApp from './modules/WeatherApp';

const Main = styled.section(
  () => css`
    background: url(${background}) center center;
    padding: 26px 0 40px;
    width: 100%;
    min-height: 100vh;
    background-size: cover;
  `
)

function App() {
  return (
    <Main>
      <WeatherApp></WeatherApp>
    </Main>
  );
}

export default App;
