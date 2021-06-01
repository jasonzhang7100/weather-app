import React from "react";
import styled from "styled-components";

import WeatherToday from "./components/WeatherToday";
import WeatherFuture from "./components/WeatherFuture";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const TwitterFeed = styled.div`
  width: 40%;
  height: 10rem;
  background-color: #c5e2e7;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherApp = () => {
  return (
    <Layout>
      <WeatherToday />
      <TwitterFeed>TwitterFeed</TwitterFeed>
      <WeatherFuture />
    </Layout>
  );
};

export default WeatherApp;
