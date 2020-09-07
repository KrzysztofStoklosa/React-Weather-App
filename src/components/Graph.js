import React from "react";
import "../scss/Graph.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Graph = (props) => {
  const DayName = (day) => {
    if (day === 0) {
      return ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
    } else if (day === 1) {
      return ["Tues", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];
    } else if (day === 2) {
      return ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tues"];
    } else if (day === 3) {
      return ["Thu", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"];
    } else if (day === 4) {
      return ["Fri", "Sat", "Sun", "Mon", "Tues", "Wed", "Thu"];
    } else if (day === 5) {
      return ["Sat", "Sun", "Mon", "Tues", "Wed", "Thu", "Fri"];
    } else if (day === 6) {
      return ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
    }
  };
  let name = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];
  if (props.display) {
    name = DayName(props.date);
  }
  const data = [
    {
      name: "Today",
      range: 100,
      temperatures: props.state.actual_temp,
      wind: props.state.wind,
      humidity: props.state.humidity,
    },
    {
      name: name[0],
      range: 0,
      temperatures: props.display ? props.state.day1.temp.day : null,
      wind: props.display ? props.state.day1.wind_speed : null,
      humidity: props.display ? props.state.day1.humidity : null,
    },
    {
      name: name[1],
      range: 100,
      temperatures: props.display ? props.state.day2.temp.day : null,
      wind: props.display ? props.state.day2.wind_speed : null,
      humidity: props.display ? props.state.day2.humidity : null,
    },
    {
      name: name[2],
      range: 100,
      temperatures: props.display ? props.state.day3.temp.day : null,
      wind: props.display ? props.state.day3.wind_speed : null,
      humidity: props.display ? props.state.day3.humidity : null,
    },
    {
      name: name[3],
      range: 100,
      temperatures: props.display ? props.state.day4.temp.day : null,
      wind: props.display ? props.state.day4.wind_speed : null,
      humidity: props.display ? props.state.day4.humidity : null,
    },
    {
      name: name[4],
      range: 100,
      temperatures: props.display ? props.state.day5.temp.day : null,
      wind: props.display ? props.state.day5.wind_speed : null,
      humidity: props.display ? props.state.day5.humidity : null,
    },
    {
      name: name[5],
      range: 100,
      temperatures: props.display ? props.state.day6.temp.day : null,
      wind: props.display ? props.state.day6.wind_speed : null,
      humidity: props.display ? props.state.day6.humidity : null,
    },
    {
      name: name[6],
      range: 100,
      temperatures: props.display ? props.state.day7.temp.day : null,
      wind: props.display ? props.state.day7.wind_speed : null,
      humidity: props.display ? props.state.day7.humidity : null,
    },
  ];
  return (
    <div className="graph__container">
      <LineChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="range" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperatures" stroke="#8884d8" />
        <Line type="monotone" dataKey="wind" stroke="#82ca9d" />
        <Line type="monotone" dataKey="humidity" stroke="#231a5c" />
      </LineChart>
    </div>
  );
};

export default Graph;
