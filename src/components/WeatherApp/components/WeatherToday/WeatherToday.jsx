import React from "react";
import styled from "styled-components";

import WeatherInfoToday from "./components/WeatherInfoToday";
import CityInfo from "./components/CityInfo";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  background-color: #c9e7c5;
`;

const WeatherToday = () => {
  return (
    <Wrapper>
      <WeatherInfoToday />
      <CityInfo />
    </Wrapper>
  );
};

export default WeatherToday;
