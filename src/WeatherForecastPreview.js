import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function dayAndMonth() {
    let dateNew = new Date(props.data.dt * 1000);

    let date = dateNew.getDate();
    if (date < 10) {
      date = `0${date}`;
    }
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];
    let month = months[dateNew.getMonth()];

    return `${date}/${month}`;
  }
  if (props.unit === "celsius") {
    return (
      <div className="col-sm">
        <ul>
          <li className="day">{dayAndMonth()}</li>
          <li className="image">
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li className="temp-max">{Math.round(props.data.temp.max)} °C</li>
          <li className="temp-min">{Math.round(props.data.temp.min)} °C</li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="col-sm">
        <ul>
          <li className="day">{dayAndMonth()}</li>
          <li className="image">
            <WeatherIcon code={props.data.weather[0].icon} />
          </li>
          <li className="temp-max">
            {Math.round((props.data.temp.max * 9) / 5 + 32)} °F
          </li>
          <li className="temp-min">
            {Math.round((props.data.temp.min * 9) / 5 + 32)} °F
          </li>
        </ul>
      </div>
    );
  }
}
