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

const WeatherInfoToday = () => {
  return (
    <Wrapper>
      <InfoCard>
        <TempMetric>12℃</TempMetric>
        <WeatherMetirc>CLOUDY</WeatherMetirc>
        <OtherMetirc>HUMIDITY 64%</OtherMetirc>
        <OtherMetirc>WIND 12K/M</OtherMetirc>
      </InfoCard>
    </Wrapper>
  );
};

export default WeatherInfoToday;
