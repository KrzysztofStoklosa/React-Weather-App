import React from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import "../scss/Welcome.scss";
const Welcome = (props) => {
  return (
    <div
      className={props.state.switchCheck ? "darkness" : "welcome__container"}
    >
      <Header
        switchChange={props.switchChange}
        switch={props.state.switchCheck}
      />
      <Form value={props.state.value} change={props.change} />
    </div>
  );
};

export default Welcome;
