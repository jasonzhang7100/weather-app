import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 0.5rem;
`;

const WeatherToday = styled.div`
  flex: 1;
  height: 10rem;
  background-color: #c9e7c5;
`;
const TwitterFeed = styled.div`
  flex: 1;

  height: 10rem;
  background-color: #c5e2e7;
`;
const WeatherFuture = styled.div`
  flex: 1;

  height: 10rem;
  background-color: #d9c5e7;
`;

const WeatherApp = () => {
  return (
    <Layout>
      <WeatherToday>WeatherToday</WeatherToday>
      <TwitterFeed>TwitterFeed</TwitterFeed>
      <WeatherFuture>WeatherFuture</WeatherFuture>
    </Layout>
  );
};

export default WeatherApp;
