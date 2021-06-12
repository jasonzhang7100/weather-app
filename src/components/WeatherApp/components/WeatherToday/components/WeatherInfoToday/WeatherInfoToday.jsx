import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 1;
`;

const InfoCard = styled.div`
  width: 20rem;
  margin: 3rem auto;
`;

const TempMetric = styled.div`
  width: 100%;
  font-size: 4rem;
  text-align: center;
`;

const WeatherMetirc = styled.div`
  width: 100%;
  text-align: center;
`;

const OtherMetirc = styled.span`
  display: inline-block;
  width: 50%;
  text-align: center;
`;

const WeatherInfoToday = ({ weatherToday }) => {
  const { weather, temp, humidity, wind } = weatherToday;
  return (
    <Wrapper>
      <InfoCard>
        <TempMetric>{temp}度</TempMetric>
        <WeatherMetirc>{weather}</WeatherMetirc>
        <OtherMetirc>HUMIDITY {humidity}%</OtherMetirc>
        <OtherMetirc>WIND {wind} K/M</OtherMetirc>
      </InfoCard>
    </Wrapper>
  );
};

export default WeatherInfoToday;
