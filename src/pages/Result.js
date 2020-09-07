import React from "react";
import "../scss/Result.scss";
import Header from "../components/Header";
import Form from "../components/Form";
import CurrentWeather from "../components/CurrentWeather";
import Forcast from "../components/Forcast";
import Graph from "../components/Graph";
const Result = (props) => {
  return (
    <div
      className={
        props.state.switchCheck ? "result__darkness" : "result__container"
      }
    >
      <Header
        switchChange={props.switchChange}
        switch={props.state.switchCheck}
      />
      <Form value={props.state.value} change={props.change} />
      <CurrentWeather
        state={props.state}
        tempDegreeChange={props.tempDegreeChange}
      />
      <Forcast state={props.state} />
      <Graph
        state={props.state}
        date={props.state.date}
        display={props.state.display}
      />
      <div style={{ height: "30px" }}></div>
    </div>
  );
};

export default Result;
