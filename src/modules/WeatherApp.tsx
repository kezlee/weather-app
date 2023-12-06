import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { MainContainer } from '../styles/Styles';
import WeatherDetails from '../components/WeatherDetails';
import { Alert } from '@mui/material';

const WeatherApp = () => {
  const [country, setCountry] = useState('')
  const [hasError, setHasError] = useState(false)
  const [triggerSearch, setTriggerSearch] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = '5f081e14e5bae4e2f8a895b7f857c6b4';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
        
        setData(data);
        setHasError(data.cod !== 200)
      } catch (error) {
      } finally {
        setTriggerSearch(false)
        setCountry('')
      }
    };

    if (triggerSearch) {
      fetchData();
    }
  }, [triggerSearch]);

  return (
    <MainContainer>
      <Search country={country} setCountry={setCountry} setTriggerSearch={setTriggerSearch}></Search>
      {hasError && <Alert severity="error">City not found</Alert>}
      {data && !hasError && <WeatherDetails data={data}></WeatherDetails>}
    </MainContainer>
  );
}

export default WeatherApp;