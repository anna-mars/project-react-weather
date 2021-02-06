import React, { useState } from "react";

export default function WeatherTemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperatureConversion">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |{""}
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
          °F
        </span>
      </div>
    );
  }
}
