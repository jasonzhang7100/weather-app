import React from 'react';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout';
import WeatherApp from './components/WeatherApp';

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
    this.state = {
      cityName: 'Sydney',
      weatherCurrent: {
        tempCurrent: 0,
        conditionCurrent: '',
        humidityCurrent: 0,
        windCurrent: 0,
      },
      weatherForecast: [],
      isLoading: true,
    };
    this.searchCity = this.searchCity.bind(this);
    this.getWeatherInfo = this.getWeatherInfo.bind(this);
  }

  componentDidMount() {
    this.getWeatherInfo();
  }

  async getWeatherInfo() {
    const { cityName } = this.state;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=88016988f0944ac0a3b103809211206&q=${cityName}&days=3&aqi=no&alerts=no`;
    const res = await fetch(url);
    const result = await res.json();
    const { current, forecast } = result;
    const {
      // eslint-disable-next-line camelcase
      temp_c, condition, wind_kph, humidity,
    } = current;
    const weatherForecast = forecast.forecastday.map((i) => ({
      date: i.date,
      conditionForecast: i.day.condition.text,
      icon: i.day.condition.icon,
      tempForecast: i.day.avgtemp_c,
    }));
    this.setState({
      weatherCurrent: {
        tempCurrent: temp_c,
        conditionCurrent: condition.text,
        humidityCurrent: humidity,
        windCurrent: wind_kph,
      },
      weatherForecast,
      isLoading: false,
    });
  }

  searchCity(cityName) {
    this.setState({ isLoading: true, cityName }, this.getWeatherInfo);
  }

  render() {
    const {
      cityName, weatherCurrent, weatherForecast, isLoading,
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <Layout title="Jason Zhang's Weather App" searchCity={this.searchCity}>
          <WeatherApp
            cityName={cityName}
            weatherCurrent={weatherCurrent}
            weatherForecast={weatherForecast}
            isLoading={isLoading}
          />
        </Layout>
      </>
    );
  }
}

export default App;
