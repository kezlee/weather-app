import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import cloud from '../assets/images/sun.png'
import { SpaceBetween } from '../styles/Styles';
import SearchHistory from './SearchHistory';
import { WeatherItem, HistoryItem } from '../utils/interface';
import { getCurrentDateTime } from '../utils/helpers';

const DetailsContainer = styled.section`
  background: #1A1A1A4D;
  color: #ffffff;
  width: 100%;
  border-radius: 40px;
  position: relative;
  padding: 46px 50px;
  margin-top: 112px;
`

const WeatherImg = styled.div`
  position: absolute;
  right: 0;
  top: -100px;
  width: 300px;
`
interface WeatherDetailsProps {
  data: WeatherItem
  historyList: HistoryItem[]
  setHistoryList: React.Dispatch<React.SetStateAction<HistoryItem[]>>
  setCountry: React.Dispatch<React.SetStateAction<string>>
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const WeatherDetails: React.FC<WeatherDetailsProps>  = ({data, historyList, setHistoryList, setCountry, setTriggerSearch}) => {
  
  const convertTempToDegree = (temp: number) => {
    const celsius = temp - 273.15;
    return celsius.toFixed(0)
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

      {historyList && historyList.length > 1 && <SearchHistory 
        historyList={historyList} 
        setHistoryList={setHistoryList} 
        setCountry={setCountry} 
        setTriggerSearch={setTriggerSearch}
      />}
    </DetailsContainer>
  );
}

export default WeatherDetails;