import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Layout from './components/Layout';
import AppContainer from './components/AppContainer';
import getNewsByCity from './apis/getNewsByCity';
import getWeatherByCity from './apis/getWeatherByCity';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
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
    const { temp_c, condition, wind_kph, humidity } = current;
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
          <AppContainer
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
