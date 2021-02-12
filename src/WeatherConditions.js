import React from "react";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperatureConversion from "./WeatherTemperatureConversion";
import WeatherTemperatureConversionTwo from "./WeatherTemperatureConversionTwo";

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
          <div className="clearfix">
            <div className=" float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className=" float-left">
              <WeatherTemperatureConversion
                celsius={props.data.temperature}
                unit={props.unit}
                setUnit={props.setUnit}
              />
            </div>
          </div>
          <div className="present-temp">
            <WeatherTemperatureConversionTwo
              celsius={props.data.temperature}
              max={props.data.temperatureMax}
              min={props.data.temperatureMin}
              feels={props.data.temperatureFeels}
              unit={props.unit}
              setUnit={props.setUnit}
            />
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
