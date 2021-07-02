import React from 'react';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout';
import WeatherApp from './components/WeatherApp';
import getNewsByCity from './apis/getNewsByCity';
import getWeatherByCity from './apis/getWeatherByCity';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: url("src/images/background.jpeg") no-repeat fixed center;
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
      totalNews: 0,
      newsArray: [],
      isLoading: true,
    };
    this.searchCity = this.searchCity.bind(this);
    this.getCityInfo = this.getCityInfo.bind(this);
  }

  componentDidMount() {
    this.getCityInfo();
  }

  async getCityInfo() {
    const { cityName } = this.state;
    const { current, forecast } = await getWeatherByCity(cityName);
    const { totalResults, articles } = await getNewsByCity(cityName);
    const {
      // eslint-disable-next-line camelcase
      temp_c,
      condition,
      wind_kph,
      humidity,
    } = current;
    const weatherForecast = forecast.forecastday.map(i => ({
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
      totalNews: totalResults,
      newsArray: articles,
      isLoading: false,
    });
  }

  searchCity(cityName) {
    this.setState({ isLoading: true, cityName }, this.getCityInfo);
  }

  render() {
    const {
      cityName,
      weatherCurrent,
      weatherForecast,
      totalNews,
      newsArray,
      isLoading,
    } = this.state;
    return (
      <>
        <GlobalStyle />
        <Layout title="Jason Zhang's Weather App" searchCity={this.searchCity}>
          <WeatherApp
            cityName={cityName}
            weatherCurrent={weatherCurrent}
            weatherForecast={weatherForecast}
            totalNews={totalNews}
            newsArray={newsArray}
            isLoading={isLoading}
          />
        </Layout>
      </>
    );
  }
}

export default App;
