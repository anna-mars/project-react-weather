import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ done: false });
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      country: response.data.sys.country,
      date: "Sun 7:00",
      time: "28.12.2020",
      temperature: Math.round(response.data.main.temp),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperatureMax: Math.round(response.data.main.temp_max),
      temperatureMin: Math.round(response.data.main.temp_min),
      temperatureFeels: Math.round(response.data.main.feels_like),
      sky: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      pressure: response.data.main.pressure,
      done: true,
    });
  }
  if (weatherData.done) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6">
            <form>
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
                autoFocus="on"
              />
            </form>
          </div>
          <div className="col-6">
            <input type="submit" value="🔍" className="btn " />
            <button className="btn ">📍</button>
          </div>
        </div>
        <div className="basic-weather">
          <h1>
            <span>{weatherData.city}</span>,<span>{weatherData.country}</span>
          </h1>
          <ul>
            <li>
              <span>{weatherData.date}</span>
            </li>
            <li>{weatherData.time}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="clearfix ">
              <img src={weatherData.icon} alt="Rain" class="float-left" />
              <div className=" float-left">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="units">°C |°F</span>
              </div>
            </div>
            <div className="present-temp">
              <ul>
                <li className="main-max">
                  Max : {weatherData.temperatureMax} °
                </li>
                <li className="main-min">
                  Min : {weatherData.temperatureMin} °
                </li>
                <li className="feels-like">
                  Feels like : {weatherData.temperatureFeels}°
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Sky: {weatherData.sky}</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Pressure: {weatherData.pressure} hPa</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "58a0b6e26263101abdfda8d9e9d3a0f0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <Loader type="Puff" color="#0b4d74" height={100} width={100} />;
  }
}
