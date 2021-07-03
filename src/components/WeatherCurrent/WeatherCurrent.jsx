import React from 'react';
import styled from 'styled-components';

import WeatherCurrentInfo from './components/WeatherCurrentInfo';
import CityInfo from './components/CityInfo';
import cloudy from '../../assets/images/cloudy.jpeg';
import rainy from '../../assets/images/rainy.jpeg';
import sunny from '../../assets/images/sunny.jpeg';

const weatherImgs = {
  cloudy,
  rainy,
  sunny,
};

const Wrapper = styled.div`
  display: flex;
  height: 20rem;
  background: no-repeat fixed center
    url(${({ caseName }) => weatherImgs[caseName]});
  background-size: cover;
  color: ${({ caseName }) => (caseName === 'sunny' ? '#000' : '#fff')};
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const WeatherCurrent = ({ cityName, weatherCurrent }) => {
  const { conditionCurrent } = weatherCurrent;
  const caseName = conditionCurrent.includes('ain')
    ? 'rainy'
    : conditionCurrent.includes('loud')
    ? 'cloudy'
    : 'sunny';
  return (
    <Wrapper caseName={caseName}>
      <WeatherCurrentInfo weatherCurrent={weatherCurrent} />
      <CityInfo cityName={cityName} />
    </Wrapper>
  );
};

export default WeatherCurrent;
