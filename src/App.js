import React, { Component } from "react";
import "./scss/App.scss";
import Welcome from "./pages/Welcome";
import Result from "./pages/Result";

const APIKey = "21616adb3fd00d6404ecb4db65520d8a";

class App extends Component {
  state = {
    value: "",
    city: "",
    date: "",
    temp_max: "",
    temp_min: "",
    feels_temp: "",
    pressure: "",
    wind: "",
    humidity: "",
    humidity_id: "",
    cloud_description: "",
    err: false,
    display: false,
    switchCheck: false,
    tempDegree: false,
    coord: [],
  };
  handleFormChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSwitchChange = () => {
    this.setState({
      switchCheck: !this.state.switchCheck,
    });
  };
  handleDegreeChange = () => {
    this.setState({
      tempDegree: !this.state.tempDegree,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          this.setState((prevState) => ({
            coord: data.coord,
            city: data.name,
          }));
        })
        .catch((error) => {
          this.setState((prevState) => ({
            err: true,
            display: false,
          }));
        });
    }
    if (prevState.coord !== this.state.coord) {
      const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.coord.lat}&lon=${this.state.coord.lon}&
    exclude={part}&appid=${APIKey}&units=metric`;
      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(response.status);
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date();
          const day = time.getDay();
          this.setState((prevState) => ({
            date: day,
            pressure: data.current.pressure,
            wind: data.current.wind_speed,
            temp_max: data.daily[0].temp.max,
            temp_min: data.daily[0].temp.min,
            feels_temp: data.current.feels_like,
            actual_temp: data.current.temp,
            humidity: data.current.humidity,
            humidity_id: data.daily[0].weather[0].id,
            cloud_description: data.daily[0].weather[0].description,
            day1: data.daily[1],
            day2: data.daily[2],
            day3: data.daily[3],
            day4: data.daily[4],
            day5: data.daily[5],
            day6: data.daily[6],
            day7: data.daily[7],
            err: false,
            display: true,
          }));
        })
        .catch((error) => {
          this.setState((prevState) => ({
            err: true,
            display: false,
          }));
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.display ? (
          <Result
            state={this.state}
            switchChange={this.handleSwitchChange}
            switch={this.state.switchCheck}
            change={this.handleFormChange}
            tempDegreeChange={this.handleDegreeChange}
          />
        ) : (
          <Welcome
            state={this.state}
            switchChange={this.handleSwitchChange}
            change={this.handleFormChange}
          />
        )}
      </div>
    );
  }
}

export default App;
