import React from "react";
import styled from "styled-components";

import clouds from "../../../../images/svg/clouds.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  height: 10rem;
  background-color: #fff;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const WeatherFutureItem = styled.div`
  text-align: center;
`;
const ItemDate = styled.div``;
const ItemImg = styled.img`
  padding: 5px 10px;
  width: 45px;
`;
const ItemTemp = styled.div``;
const ItemWeather = styled.div``;

class WeatherFuture extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = { weatherFuture: [] };
  }

  async getWeatherFuture() {
    const { city } = this.props;
    console.log(city);
    const { lat, lon } = city.coord;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely,hourly,alerts&appid=c6b62e270cc66f15079796009f3c3769`;
    const res = await fetch(url);
    const result = await res.json();
    const weatherFuture = result.daily.map(i => ({
      date: i.dt,
      weather: i.weather[0].main,
      temp: i.temp.day,
    }));
    this.setState({ weatherFuture });
    console.log(this.state);
  }

  componentDidMount() {
    this.getWeatherFuture();
  }

  render() {
    const weatherFiveDays = this.state.weatherFuture.slice(1, 6);
    return (
      <Wrapper>
        {weatherFiveDays.map(i => (
          <WeatherFutureItem key={i.date}>
            <div>{new Date(i.date * 1000).getDate()}日</div>
            <ItemImg src={clouds} />
            <div>{i.temp}</div>
            <div>{i.weather}</div>
          </WeatherFutureItem>
        ))}
      </Wrapper>
    );
  }
}

export default WeatherFuture;
