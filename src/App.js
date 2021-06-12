import React from "react";
import regeneratorRuntime from "regenerator-runtime";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import WeatherApp from "./components/WeatherApp/WeatherApp";

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: url("src/images/background.jpg") no-repeat fixed center;
    background-size: cover
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cityName: "Sydney" };
    this.searchCity = this.searchCity.bind(this);
  }

  searchCity(cityName) {
    this.setState({ cityName });
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Layout title="Jason Zhang's Weather App" searchCity={this.searchCity}>
          <WeatherApp cityName={this.state.cityName} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
