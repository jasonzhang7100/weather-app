import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 991px) {
    margin-top: 2rem;
  }
`;

const WeatherFutureItem = styled.div`
  width: 10rem;
  text-align: center;
`;
const ItemImg = styled.img`
  width: 50px;
  padding-top: 4px;
`;
const ItemInfo = styled.div`
  padding: 3px 0;
`;

const WeatherForecast = ({ weatherForecast }) => (
  <Wrapper>
    {weatherForecast.map((i) => (
      <WeatherFutureItem key={i.date}>
        <ItemInfo>{i.date}</ItemInfo>
        <ItemImg src={`https:${i.icon}`} />
        <ItemInfo>
          {i.tempForecast}
          °C
        </ItemInfo>
        <ItemInfo>{i.conditionForecast}</ItemInfo>
      </WeatherFutureItem>
    ))}
  </Wrapper>
);

export default WeatherForecast;
