import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    console.log(response.data);
    setForecast(response.data);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.daily[1]} />
        <WeatherForecastPreview data={forecast.daily[2]} />
        <WeatherForecastPreview data={forecast.daily[3]} />
        <WeatherForecastPreview data={forecast.daily[4]} />
        <WeatherForecastPreview data={forecast.daily[5]} />
        <WeatherForecastPreview data={forecast.daily[6]} />
      </div>
    );
  } else {
    let apiKey = "b426f7367970b839034fbb8086165d3a";
    let exclude = "&exclude=hourly,minutely";
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}${exclude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}