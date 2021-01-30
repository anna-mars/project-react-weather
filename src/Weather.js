import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6">
          <form>
            <input
              type="text"
              placeholder="Search for a city"
              className="form-control"
              autocomplete="off"
            />
          </form>
        </div>
        <div className="col-6">
          <input type="submit" value="🔍" className="btn btn-info" />
          <button className="btn btn-info">📍</button>
        </div>
      </div>
      <div className="basic-weather">
        <h1>
          <span>Amsterdam</span>,<span>NL</span>
        </h1>
        <ul>
          <li>
            <span>Sun 7:00</span>
          </li>
          <li>28.12.2020</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="clearfix weather-temperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Rain"
              class="float-left"
            />
            <div className=" float-left">
              <strong>28</strong>
              <span className="units">°C |°F</span>
            </div>
          </div>
          <div className="present-temp">
            <ul>
              <li>
                Max : <span>28</span>°
              </li>
              <li>
                Min : <span>23</span>°
              </li>
              <li>
                Feels like : <span>23</span>°
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <ul>
            <li>
              Sky: <span>Rain</span>
            </li>
            <li>
              Humidity: <span>93</span> %
            </li>
            <li>
              Wind: <span>43</span> km/h
            </li>
            <li>
              Pressure: <span>1007</span> hPa
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}