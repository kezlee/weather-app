import React from 'react';
import Search from '../components/Search';
import { MainContainer } from '../styles/Styles';
import WeatherDetails from '../components/WeatherDetails';

function WeatherApp() {
  return (
    <MainContainer>
      <Search></Search>
      <WeatherDetails></WeatherDetails>
    </MainContainer>
  );
}

export default WeatherApp;