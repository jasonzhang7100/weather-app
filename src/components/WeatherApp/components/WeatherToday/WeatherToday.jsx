import React from "react";
import styled from "styled-components";

import WeatherInfoToday from "./components/WeatherInfoToday";
import CityInfo from "./components/CityInfo";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  background: url("src/images/cloudy.jpeg") no-repeat fixed center;
  background-size: cover;
  color: #fff;
`;

const WeatherToday = ({ city, weatherToday }) => {
  return (
    <Wrapper>
      <WeatherInfoToday weatherToday={weatherToday} />
      <CityInfo city={city} />
    </Wrapper>
  );
};

export default WeatherToday;
