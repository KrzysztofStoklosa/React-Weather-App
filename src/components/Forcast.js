import React from "react";
import "../scss/Forcast.scss";
import ForcastDay from "../components/ForcastDay";

const Forcast = (props) => {
  const {
    date,
    day1,
    day2,
    day3,
    day4,
    day5,
    day6,
    day7,
    tempDegree,
  } = props.state;
  return (
    <div className="forcast__wraper">
      <h6>Extended Forecast</h6>
      <div className="forcast__container">
        <ForcastDay day={day1} date={date} tempDegree={tempDegree} />
        <ForcastDay day={day2} date={date + 1} tempDegree={tempDegree} />
        <ForcastDay day={day3} date={date + 2} tempDegree={tempDegree} />
        <ForcastDay day={day4} date={date + 3} tempDegree={tempDegree} />
        <ForcastDay day={day5} date={date + 4} tempDegree={tempDegree} />
        <ForcastDay day={day6} date={date + 5} tempDegree={tempDegree} />
        <ForcastDay day={day7} date={date + 6} tempDegree={tempDegree} />
      </div>
    </div>
  );
};

export default Forcast;
