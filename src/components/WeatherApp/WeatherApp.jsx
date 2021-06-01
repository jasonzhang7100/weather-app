import React from "react";
import styled from "styled-components";

import WeatherToday from "./components/WeatherToday";

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const TwitterFeed = styled.div`
  width: 50%;
  height: 10rem;
  background-color: #c5e2e7;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
const WeatherFuture = styled.div`
  width: 50%;
  height: 10rem;
  background-color: #d9c5e7;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherApp = () => {
  return (
    <Layout>
      <WeatherToday />
      <TwitterFeed>TwitterFeed</TwitterFeed>
      <WeatherFuture>WeatherFuture</WeatherFuture>
    </Layout>
  );
};

export default WeatherApp;
