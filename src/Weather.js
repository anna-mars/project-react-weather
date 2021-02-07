import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherConditions from "./WeatherConditions";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ done: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      icon: response.data.weather[0].icon,
      temperatureMax: Math.round(response.data.main.temp_max),
      temperatureMin: Math.round(response.data.main.temp_min),
      temperatureFeels: Math.round(response.data.main.feels_like),
      sky: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      lon: response.data.coord.lon,
      lat: response.data.coord.lat,
      done: true,
    });
  }
  function search() {
    const apiKey = "b426f7367970b839034fbb8086165d3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleSearchingCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.done) {
    return (
      <div className="Weather">
        <div class="weather-app-top">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleSearchingCity}
                />
              </div>
              <div className="col-6">
                <input type="submit" value="🔍" className="btn " />
                <button className="btn ">📍</button>
              </div>
            </div>
          </form>
          <div className="basic-weather">
            <WeatherConditions data={weatherData} />
          </div>
        </div>
        <div class="weather-app-bottom">
          <WeatherForecast
            city={weatherData.city}
            lon={weatherData.lon}
            lat={weatherData.lat}
          />
        </div>
      </div>
    );
  } else {
    search();
    return <Loader type="Puff" color="#0b4d74" height={100} width={100} />;
  }
}
