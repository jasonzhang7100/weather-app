import React from "react";
import styled from "styled-components";

import WeatherCurrentInfo from "./components/WeatherCurrentInfo";
import CityInfo from "./components/CityInfo";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  background: no-repeat fixed center
    url("src/images/${({ caseName }) => caseName}.jpeg");
  background-size: cover;
  color: ${({ caseName }) => (caseName == "sunny" ? "#000" : "#fff")};
`;

const WeatherCurrent = ({ cityName, weatherCurrent }) => {
  const { conditionCurrent } = weatherCurrent;
  const caseName = conditionCurrent.includes("rain")
    ? "rainy"
    : conditionCurrent.includes("cloud")
    ? "cloudy"
    : "sunny";
  return (
    <Wrapper caseName={caseName}>
      <WeatherCurrentInfo weatherCurrent={weatherCurrent} />
      <CityInfo cityName={cityName} />
    </Wrapper>
  );
};

export default WeatherCurrent;
