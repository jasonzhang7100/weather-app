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

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: { name: "", coord: { lon: 0, lat: 0 } },
      weatherToday: { weather: "", temp: 0, humidity: 0, wind: 0 },
      loading: true,
    };
  }

  async getWeatherToday() {
    const { cityName } = this.props;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},au&units=metric&APPID=c6b62e270cc66f15079796009f3c3769`;
    const res = await fetch(url);
    const result = await res.json();
    const { name, coord, weather, main, wind } = result;
    this.setState({
      city: { name, coord },
      weatherToday: {
        weather: weather[0].main,
        temp: main.temp,
        humidity: main.humidity,
        wind: wind.speed,
      },
      loading: false,
    });
  }

  componentWillReceiveProps() {
    this.getWeatherToday();
  }

  componentDidMount() {
    this.getWeatherToday();
  }

  render() {
    const { city, weatherToday, loading } = this.state;
    return (
      <Layout>
        {loading ? (
          <div>loading</div>
        ) : (
          <React.Fragment>
            <WeatherToday city={city} weatherToday={weatherToday} />
            <TwitterFeed city={city}>TwitterFeed</TwitterFeed>
            <WeatherFuture city={city} />
          </React.Fragment>
        )}
      </Layout>
    );
  }
}

export default WeatherApp;
