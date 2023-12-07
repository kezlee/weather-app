import React from 'react';
import styled, { DefaultTheme, css } from 'styled-components';
import cloud from '../assets/images/sun.png'
import { SpaceBetween, DesktopOnly, MobileOnly, WeatherTypography } from '../styles/Styles';
import SearchHistory from './SearchHistory';
import { WeatherItem, HistoryItem } from '../utils/interface';
import { getCurrentDateTime, displayCelsius } from '../utils/helpers';

const DetailsContainer = styled.section(
  ({theme}: DefaultTheme) => css`
    background: ${theme.weatherDetailBg};
    color: #ffffff;
    border: 1px solid ${theme.weatherDetailBorder};
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
    color: ${theme.celcius};

    ${theme.breakpoints.up('sm')} {
      font-size: ${theme.typography.pxToRem(120)};
    }
`)

const WeatherInfo = styled(WeatherTypography)(
  ({theme}: DefaultTheme) => css`
    color: ${theme.weatherInfo};
`)

interface WeatherDetailsProps {
  data: WeatherItem
  historyList: HistoryItem[]
  setHistoryList: React.Dispatch<React.SetStateAction<HistoryItem[]>>
  setCountry: React.Dispatch<React.SetStateAction<string>>
  setTriggerSearch: React.Dispatch<React.SetStateAction<boolean>>
}

const WeatherDetails: React.FC<WeatherDetailsProps>  = ({data, historyList, setHistoryList, setCountry, setTriggerSearch}) => {
  return (
    <DetailsContainer>
      <WeatherImg>
        <img src={cloud} alt="Weather" />
      </WeatherImg>
      <WeatherTypography>Today's Weather</WeatherTypography>

      <SpaceBetween style={{alignItems: 'end'}}>
        <div>
          <Celsius>{displayCelsius(data.main.temp)}°</Celsius>
          <WeatherTypography>H: {displayCelsius(data.main.temp_max)}° L: {displayCelsius(data.main.temp_min)}°</WeatherTypography>
          <MobileOnly><WeatherInfo><b>{data.name}, {data.sys.country}</b></WeatherInfo></MobileOnly>
        </div>
        <MobileOnly style={{textAlign: 'right'}}>
          <WeatherInfo>{data.weather[0].main}</WeatherInfo>
          <WeatherInfo>Humidity: {data.main.humidity}%</WeatherInfo>
          <WeatherInfo>{getCurrentDateTime()}</WeatherInfo>
        </MobileOnly>
      </SpaceBetween>

      <DesktopOnly>
        <SpaceBetween>
          <WeatherInfo><b>{data.name}, {data.sys.country}</b></WeatherInfo>
          <WeatherInfo>{getCurrentDateTime()}</WeatherInfo>
          <WeatherInfo>Humidity: {data.main.humidity}%</WeatherInfo>
          <WeatherInfo>{data.weather[0].main}</WeatherInfo>
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