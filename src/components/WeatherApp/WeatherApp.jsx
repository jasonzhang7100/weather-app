import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from '../WeatherCurrent';
import WeatherForecast from '../WeatherForecast';
import NewsFeed from '../NewsFeed';
import VerticleDivider from '../VerticleDivider';

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 12rem;
  background-color: #e5ece6;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    height: 20rem;
  }
`;

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
    <Bottom>
      <NewsFeed
        cityName={cityName}
        totalNews={totalNews}
        newsArray={newsArray}
      />
      <VerticleDivider
        height={'8rem'}
        color={'rgb(0, 0, 0, 0.2)'}
        threshold={'991px'}
      />
      <WeatherForecast weatherForecast={weatherForecast} />
    </Bottom>
  </>
);

export default WeatherApp;
