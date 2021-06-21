import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from './components/WeatherCurrent';
import WeatherForecast from './components/WeatherForecast';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const TwitterFeed = styled.div`
  width: 55%;
  height: 10rem;
  background-color: #c5e2e7;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherApp = ({
  cityName,
  weatherCurrent,
  weatherForecast,
  isLoading,
}) => (
  <Layout>
    {isLoading ? (
      <div>loading</div>
    ) : (
      <>
        <WeatherCurrent cityName={cityName} weatherCurrent={weatherCurrent} />
        <TwitterFeed cityName={cityName}>TwitterFeed</TwitterFeed>
        <WeatherForecast weatherForecast={weatherForecast} />
      </>
    )}
  </Layout>
);

export default WeatherApp;
