import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout/Layout";
import WeatherApp from "./components/WeatherApp/WeatherApp";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Layout title="weather app">
        <WeatherApp />
      </Layout>
    </React.Fragment>
  );
};

export default App;
