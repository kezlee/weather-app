import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import cloud from '../assets/images/sun.png'
import { SpaceBetween } from '../styles/Styles';
import SearchHistory from './SearchHistory';

const DetailsContainer = styled.section`
  background: #1A1A1A4D;
  color: #ffffff;
  width: 100%;
  border-radius: 40px;
  position: relative;
  padding: 46px 50px;
`

const WeatherImg = styled.div`
  position: absolute;
  right: 0;
  top: -100px;
  width: 300px;
`

function WeatherDetails() {
  return (
    <DetailsContainer>
      <WeatherImg>
        <img src={cloud} />
      </WeatherImg>
      <Typography>Today’s Weather</Typography>
      <Typography variant="h1" sx={{fontWeight: 'bold',}}>26°</Typography>
      <Typography>H: 29° L: 26°</Typography>
      <SpaceBetween>
        <p><b>Johor, MY</b></p>
        <p>01-09-2022 09:41am</p>
        <p>Humidity: 58%</p>
        <p>Clouds</p>
      </SpaceBetween>

      <SearchHistory></SearchHistory>
    </DetailsContainer>
  );
}

export default WeatherDetails;