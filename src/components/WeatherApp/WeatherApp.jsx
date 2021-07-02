import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from './components/WeatherCurrent';
import WeatherForecast from './components/WeatherForecast';
import NewsFeed from './components/NewsFeed/NewsFeed';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const WeatherApp = ({
  cityName,
  weatherCurrent,
  weatherForecast,
  totalNews,
  newsArray,
  isLoading,
}) => (
  <Layout>
    {isLoading ? (
      <div>loading</div>
    ) : (
      <>
        <WeatherCurrent cityName={cityName} weatherCurrent={weatherCurrent} />
        <NewsFeed
          cityName={cityName}
          totalNews={totalNews}
          newsArray={newsArray}
        />
        <WeatherForecast weatherForecast={weatherForecast} />
      </>
    )}
  </Layout>
);

export default WeatherApp;
