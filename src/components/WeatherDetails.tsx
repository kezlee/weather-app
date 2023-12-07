import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import cloud from '../assets/images/sun.png'
import { SpaceBetween, DesktopOnly, MobileOnly, WeatherTypography } from '../styles/Styles';
import SearchHistory from './SearchHistory';
import { WeatherItem, HistoryItem } from '../utils/interface';
import { getCurrentDateTime } from '../utils/helpers';

const DetailsContainer = styled.section(
  ({theme}: DefaultTheme) => css`
    background: #1A1A1A4D;
    color: #ffffff;
    width: 100%;
    border-radius: 20px;
    position: relative;
    padding: 20px 26px;
    margin-top: 140px;

    ${theme.breakpoints.up('sm')} {
      margin-top: 112px;
      padding: 46px 50px;
      border-radius: 40px;
    }
  `
)

const WeatherImg = styled.div(
  ({theme}: DefaultTheme) => css`
    position: absolute;
    right: 0;
    top: -61px;
    width: 158px;

    ${theme.breakpoints.up('sm')} {
      width: 300px;
      top: -100px;
    }
  `
)

const Celsius = styled.h1(
  ({theme}: DefaultTheme) => css`
    font-size: ${theme.typography.pxToRem(60)};
    line-height: 1;
    margin: 0;

    ${theme.breakpoints.up('sm')} {
      font-size: ${theme.typography.pxToRem(120)};
    }
`)

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
      <WeatherTypography>Today's Weather</WeatherTypography>

      <SpaceBetween style={{alignItems: 'end'}}>
        <div>
          <Celsius>{convertTempToDegree(data.main.temp)}°</Celsius>
          <WeatherTypography>H: {convertTempToDegree(data.main.temp_max)}° L: {convertTempToDegree(data.main.temp_min)}°</WeatherTypography>
          <MobileOnly><WeatherTypography><b>{data.name}, {data.sys.country}</b></WeatherTypography></MobileOnly>
        </div>
        <MobileOnly style={{textAlign: 'right'}}>
          <WeatherTypography>{data.weather[0].main}</WeatherTypography>
          <WeatherTypography>Humidity: {data.main.humidity}%</WeatherTypography>
          <WeatherTypography>{getCurrentDateTime()}</WeatherTypography>
        </MobileOnly>
      </SpaceBetween>

      <DesktopOnly>
        <SpaceBetween>
          <WeatherTypography><b>{data.name}, {data.sys.country}</b></WeatherTypography>
          <WeatherTypography>{getCurrentDateTime()}</WeatherTypography>
          <WeatherTypography>Humidity: {data.main.humidity}%</WeatherTypography>
          <WeatherTypography>{data.weather[0].main}</WeatherTypography>
        </SpaceBetween>
      </DesktopOnly>

      <SearchHistory 
        historyList={historyList} 
        setHistoryList={setHistoryList} 
        setCountry={setCountry} 
        setTriggerSearch={setTriggerSearch}
      />
    </DetailsContainer>
  );
}

export default WeatherDetails;