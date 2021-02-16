import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import WeatherConditions from "./WeatherConditions";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ done: false });
  const [city, setCity] = useState(props.defaultCity);
  const cityKrakow = "Krakow";
  const cityAmsterdam = "Amsterdam";
  const cityBenidorm = "Benidorm";
  const [unit, setUnit] = useState("celsius");

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
  function searchAmsterdam() {
    const apiKey = "b426f7367970b839034fbb8086165d3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityAmsterdam}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchKrakow() {
    const apiKey = "b426f7367970b839034fbb8086165d3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityKrakow}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function searchBenidorm() {
    const apiKey = "b426f7367970b839034fbb8086165d3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityBenidorm}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleSubmitAmsterdam(event) {
    event.preventDefault();
    searchAmsterdam();
  }
  function handleSubmitKrakow(event) {
    event.preventDefault();
    searchKrakow();
  }
  function handleSubmitBenidorm(event) {
    event.preventDefault();
    searchBenidorm();
  }

  function handleSearchingCity(event) {
    setCity(event.target.value);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  function searchLocation(position) {
    let lon = position.coords.longitude;
    let lat = position.coords.latitude;
    let apiKey = "b426f7367970b839034fbb8086165d3a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.done) {
    return (
      <div className="Weather">
        <div className="weather-app-top">
          <h4>Weather Forecast</h4>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-7">
                <input
                  type="search"
                  placeholder="Search for a city"
                  className="form-control"
                  autoFocus="on"
                  onChange={handleSearchingCity}
                />
              </div>
              <div className="col-5">
                <input type="submit" value="🔍" className="btn " />
                <button className="btn " onClick={getCurrentLocation}>
                  📍
                </button>
              </div>
            </div>
          </form>
          <div className="city-buttons">
            <ul>
              <li className="amsterdam" onSubmit={handleSubmitAmsterdam}>
                <button className="amsterdam" onClick={searchAmsterdam}>
                  Amsterdam
                </button>
              </li>
              <li onSubmit={handleSubmitKrakow}>
                <button className="krakow" onClick={searchKrakow}>
                  Krakow
                </button>
              </li>
              <li onSubmit={handleSubmitBenidorm}>
                <button className="benidorm" onClick={searchBenidorm}>
                  Benidorm
                </button>
              </li>
            </ul>
          </div>
          <div className="basic-weather">
            <WeatherConditions
              data={weatherData}
              unit={unit}
              setUnit={setUnit}
            />
          </div>
        </div>
        <div className="weather-app-bottom">
          <h5>Daily Forecast</h5>
          <WeatherForecast
            city={weatherData.city}
            lon={weatherData.lon}
            lat={weatherData.lat}
            unit={unit}
          />
        </div>
      </div>
    );
  } else {
    search();
    return <Loader type="Puff" color="#0b4d74" height={100} width={100} />;
  }
}
