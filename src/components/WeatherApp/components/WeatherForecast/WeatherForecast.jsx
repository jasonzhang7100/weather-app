import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 10rem;
  background-color: #fff;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherFutureItem = styled.div`
  text-align: center;
`;
const ItemDate = styled.div``;
const ItemImg = styled.img`
  /* padding: 5px 10px; */
  width: 50px;
`;
const ItemTemp = styled.div``;
const ItemWeather = styled.div``;

const WeatherForecast = ({ weatherForecast }) => {
  return (
    <Wrapper>
      {weatherForecast.map(i => (
        <WeatherFutureItem key={i.date}>
          {/* <div>{new Date(i.date * 1000).getDate()}日</div> */}
          <div>{i.date}</div>
          <ItemImg src={`https:${i.icon}`} />
          <div>{i.tempForecast}</div>
          <div>{i.conditionForecast}</div>
        </WeatherFutureItem>
      ))}
    </Wrapper>
  );
};

export default WeatherForecast;
