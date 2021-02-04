import React from "react";
import FormattedTime from "./FormattedTime";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherCondition">
      <div className="basic-weather">
        <h1>
          <span>{props.data.city}</span>,<span>{props.data.country}</span>
        </h1>
        <ul>
          <li>
            <span>
              <FormattedTime date={props.data.date} />
            </span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix ">
            <img src={props.data.icon} alt="Rain" class="float-left" />
            <div className=" float-left">
              <span className="temperature">{props.data.temperature}</span>
              <span className="units">°C |°F</span>
            </div>
          </div>
          <div className="present-temp">
            <ul>
              <li className="main-max">Max : {props.data.temperatureMax} °</li>
              <li className="main-min">Min : {props.data.temperatureMin} °</li>
              <li className="feels-like">
                Feels like : {props.data.temperatureFeels}°
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>Sky: {props.data.sky}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Pressure: {props.data.pressure} hPa</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
