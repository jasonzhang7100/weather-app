import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from './components/WeatherCurrent';
import WeatherForecast from './components/WeatherForecast';
import NewsFeed from './components/NewsFeed/NewsFeed';

const WeatherApp = ({
  cityName,
  weatherCurrent,
  weatherForecast,
  totalNews,
  newsArray,
  isLoading,
}) => (
  <>
    <WeatherCurrent cityName={cityName} weatherCurrent={weatherCurrent} />
    <NewsFeed cityName={cityName} totalNews={totalNews} newsArray={newsArray} />
    <WeatherForecast weatherForecast={weatherForecast} />
  </>
);

export default WeatherApp;
