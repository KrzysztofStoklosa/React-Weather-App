import React from "react";
import "../scss/ForcastDay.scss";
import IconList from "./IconsList";
const ForcastDay = (props) => {
  let description = "";
  if (props.day) {
    description = props.day.weather[0].description;
    description = description.split(" ");
  }
  let farenheit_max = 0;
  let farenheit_min = 0;
  let c_max = 0;
  let c_min = 0;
  if (props.day) {
    farenheit_max = (props.day.temp.max * 9) / 5 + 32;
    farenheit_min = (props.day.temp.min * 9) / 5 + 32;
    c_max = props.day.temp.max;
    c_min = props.day.temp.min;
  }
  const DayName = (day) => {
    if (day === 0) {
      return "Sun";
    } else if (day === 1) {
      return "Mon";
    } else if (day === 2) {
      return "Tues";
    } else if (day === 3) {
      return "Wed";
    } else if (day === 4) {
      return "Thu";
    } else if (day === 5) {
      return "Fri";
    } else if (day === 6) {
      return "Sat";
    } else if (day === 7) {
      return "Sun";
    } else if (day === 8) {
      return "Mon";
    } else if (day === 9) {
      return "Tue";
    } else if (day === 10) {
      return "Wed";
    } else if (day === 11) {
      return "Thu";
    } else if (day === 12) {
      return "Fri";
    } else if (day === 13) {
      return "Sat";
    }
  };
  return (
    <div className="forcastDay___container">
      <h6> {DayName(props.date)}</h6>
      <div className="forcastDay__container_icon">
        {props.day ? <IconList code={props.day.weather[0].id} /> : null}
      </div>
      <h6>{props.day ? description[0] : null} </h6>
      <div className="forcastDay__container_temp">
        {props.tempDegree ? (
          <span>
            {parseInt(farenheit_max)}F/{parseInt(farenheit_min)}F
          </span>
        ) : (
          <span>
            {parseInt(c_max)}&#176;/{parseInt(c_min)}&#176;
          </span>
        )}
      </div>
    </div>
  );
};

export default ForcastDay;
