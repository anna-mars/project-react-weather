import React from "react";

export default function FormattedTime(props) {
  console.log(props.date);
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let year = props.date.getFullYear();

  let date = props.date.getDate();
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
  let month = months[props.date.getMonth()];

  return (
    <div>
      <ul>
        <li>
          {day} {hours}:{minutes}
        </li>
      </ul>
      {date}.{month}.{year}
    </div>
  );
}
