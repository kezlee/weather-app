import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import cloud from '../assets/images/sun.png'
import { SpaceBetween } from '../styles/Styles';
import SearchHistory from './SearchHistory';
import { WeatherItem } from '../utils/interface';

const DetailsContainer = styled.section`
  background: #1A1A1A4D;
  color: #ffffff;
  width: 100%;
  border-radius: 40px;
  position: relative;
  padding: 46px 50px;
  margin-top: 92px;

`

const WeatherImg = styled.div`
  position: absolute;
  right: 0;
  top: -100px;
  width: 300px;
`
interface WeatherDetailsProps {
  data: WeatherItem
}

const WeatherDetails: React.FC<WeatherDetailsProps>  = ({data}) => {
  const convertTempToDegree = (temp: number) => {
    const celsius = temp - 273.15;
    return celsius.toFixed(0)
  }

  const getCurrentDateTime = () => {  
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  
    return formattedDateTime;
  }

  return (
    <DetailsContainer>
      <WeatherImg>
        <img src={cloud} />
      </WeatherImg>
      <Typography>Today's Weather</Typography>
      <Typography variant="h1" sx={{fontWeight: 'bold',}}>{convertTempToDegree(data.main.temp)}°</Typography>
      <Typography>H: {convertTempToDegree(data.main.temp_max)}° L: {convertTempToDegree(data.main.temp_min)}°</Typography>
      <SpaceBetween>
        <p><b>{data.name}, {data.sys.country}</b></p>
        <p>{getCurrentDateTime()}</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>{data.weather[0].main}</p>
      </SpaceBetween>

      <SearchHistory></SearchHistory>
    </DetailsContainer>
  );
}

export default WeatherDetails;