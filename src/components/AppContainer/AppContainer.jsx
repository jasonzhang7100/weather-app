import React from 'react';
import styled from 'styled-components';

import WeatherCurrent from '../WeatherCurrent';
import WeatherForecast from '../WeatherForecast';
import NewsFeed from '../NewsFeed';
import VerticleDivider from '../VerticleDivider';
import spinner from '../../assets/images/spinner.svg';

const Bottom = styled.div`
  display: flex;
  align-items: center;
  height: 12rem;
  background-color: #e5ece6;
  @media screen and (max-width: 991px) {
    flex-direction: column;
    height: 20rem;
  }
  @media screen and (max-width: 767px) {
    height: 25rem;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32rem;
  /* color: #fff;
  font-size: 3rem; */
`;

const AppContainer = ({
  cityName,
  weatherCurrent,
  weatherForecast,
  totalNews,
  newsArray,
  isLoading,
}) => {
  return (
    <>
      {isLoading ? (
        <Loading>
          <img src={spinner} />
        </Loading>
      ) : (
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
      )}
    </>
  );
};

export default AppContainer;
