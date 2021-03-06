import React from "react";

export default function WeatherTemperatureConversionTwo(props) {
  if (props.unit === "celsius") {
    return (
      <div className="WeatherConditionsTwo">
        <ul>
          <li className="main-max">Max : {props.max} °C</li>
          <li className="main-min">Min : {props.min} °C</li>
          <li className="feels-like">Feels like : {props.feels} °C</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="WeatherConditionsTwo">
        <ul>
          <li className="main-max">
            Max : {Math.round((props.max * 9) / 5 + 32)} °F
          </li>
          <li className="main-min">
            Min : {Math.round((props.min * 9) / 5 + 32)} °F
          </li>
          <li className="feels-like">
            Feels like : {Math.round((props.feels * 9) / 5 + 32)} °F
          </li>
        </ul>
      </div>
    );
  }
}
