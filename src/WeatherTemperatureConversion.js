import React from "react";

import "./WeatherTemperatureConversion.css";

export default function WeatherTemperatureConversion(props) {
  function showFahrenheitTemp(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function showCelsiusTemp(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperatureConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <span className="active">°C</span>|{""}
          <a href="/" onClick={showFahrenheitTemp}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperatureConversion">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsiusTemp}>
            °C
          </a>
          {""}|{""}
          <span className="active">°F</span>
        </span>
      </div>
    );
  }
}
