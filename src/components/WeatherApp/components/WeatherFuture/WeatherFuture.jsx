import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  height: 10rem;
  background-color: #d9c5e7;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherFutureItem = styled.div``;
const ItemDate = styled.div``;
const ItemImg = styled.img``;
const ItemTemp = styled.div``;
const ItemWeather = styled.div``;

const weatherFuture = [
  {
    dt: 1622509200,
    temp: {
      day: 16.25,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
      },
    ],
  },
  {
    dt: 1622509200,
    temp: {
      day: 16.25,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
      },
    ],
  },
  {
    dt: 1622509200,
    temp: {
      day: 16.25,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
      },
    ],
  },
  {
    dt: 1622509200,
    temp: {
      day: 16.25,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
      },
    ],
  },
  {
    dt: 1622595600,
    temp: {
      day: 16.85,
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
      },
    ],
  },
];

const WeatherFuture = () => {
  return (
    <Wrapper>
      {weatherFuture.map(item => (
        <WeatherFutureItem>
          <ItemDate>{item.dt}</ItemDate>
          <ItemImg></ItemImg>
          <ItemTemp>{item.temp.day}</ItemTemp>
          <ItemWeather>{item.weather[0].main}</ItemWeather>
        </WeatherFutureItem>
      ))}
    </Wrapper>
  );
};

export default WeatherFuture;
