import React from "react";
import "../scss/CurrentWeather.scss";
import { Checkbox } from "semantic-ui-react";
import IconList from "./IconsList";
const Current_weather = (props) => {
  const {
    temp_max,
    temp_min,
    feels_temp,
    pressure,
    wind,
    humidity,
    humidity_id,
    tempDegree,
    actual_temp,
    cloud_description,
  } = props.state;
  const farenheit = (actual_temp * 9) / 5 + 32;
  const farenheit_feels = (feels_temp * 9) / 5 + 32;
  const farenheit_max = (temp_max * 9) / 5 + 32;
  const farenheit_min = (temp_min * 9) / 5 + 32;
  const imperial = wind * 0.62;

  return (
    <div className="weather">
      <div className="weather__header">
        <h6>Current Weather</h6>
        <Checkbox
          toggle
          checked={props.tempDegree}
          onChange={props.tempDegreeChange}
        />
      </div>
      <div className="content">
        <div className="content__left">
          <h4>{props.state.city}</h4>
          <div className="content__left_icon">
            <IconList code={humidity_id} />
            <div className="content__left_icon_temp">
              {tempDegree ? (
                <span> {parseInt(farenheit_feels)}F</span>
              ) : (
                <span>{parseInt(actual_temp)}&#176; </span>
              )}
            </div>
          </div>
          <h6>{cloud_description}</h6>
        </div>
        <div className="content__right">
          <p className="content__right_p">
            Feels Like
            {tempDegree ? (
              <span> {parseInt(farenheit)}F</span>
            ) : (
              <span>{parseInt(actual_temp)}&#176; </span>
            )}
          </p>
          <div className="maxmin_container">
            <div className="content__right_maxmin ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="21"
                viewBox="0 0 16 21"
              >
                <path
                  d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z"
                  transform="translate(20 23) rotate(180)"
                />
              </svg>
              <span>
                {tempDegree ? (
                  <span> {parseInt(farenheit_max)}F</span>
                ) : (
                  <span>{parseInt(actual_temp)}&#176; </span>
                )}
              </span>
            </div>
            <div className="content__right_maxmin ">
              <span className="svg_span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                >
                  <path
                    d="M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z"
                    transform="translate(20 23) rotate(180)"
                  />
                </svg>
              </span>
              <span>
                {tempDegree ? (
                  <span> {parseInt(farenheit_min)}F</span>
                ) : (
                  <span>{parseInt(actual_temp)}&#176; </span>
                )}
              </span>
            </div>
          </div>
          <div className="content__right_cell_container">
            <div className="content__right_humidity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="18"
                viewBox="0 0 12 18"
              >
                <path
                  d="M12,1a.667.667,0,0,0-.536.272l-.02.026C9.87,3.324,6,9.682,6,13a6,6,0,1,0,12,0c0-3.314-3.861-9.66-5.439-11.693,0,0,0,0,0,0l-.025-.034A.667.667,0,0,0,12,1Zm2.333,13.333a1,1,0,1,1-1,1A1,1,0,0,1,14.333,14.333Z"
                  transform="translate(-6 -1)"
                />
              </svg>
              <span>Humidity</span>
              <span> {humidity}% </span>
            </div>
            <div className="content__right_humidity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16.346"
                viewBox="0 0 17 16.346"
              >
                <path
                  d="M12.135,3A4.244,4.244,0,0,0,8.462,5.117a2.89,2.89,0,0,0-3.816,2.49A2.932,2.932,0,0,0,2,10.519a2.992,2.992,0,0,0,.033.327h4a1.984,1.984,0,0,1-.111-.654A1.961,1.961,0,0,1,7.885,8.231h.654A3.273,3.273,0,0,1,11.808,11.5a3.235,3.235,0,0,1-.67,1.962h4.92a2.934,2.934,0,0,0,.309-5.853c.01-.118.018-.238.018-.359A4.25,4.25,0,0,0,12.135,3ZM7.885,9.538a.654.654,0,1,0,0,1.308h.654a.654.654,0,1,1,0,1.308H2.654a.654.654,0,1,0,0,1.308H8.538a1.962,1.962,0,0,0,0-3.923ZM3.961,14.769a.654.654,0,1,0,.654.654A.654.654,0,0,0,3.961,14.769Zm2.615,0a.654.654,0,1,0,0,1.308h6.865a.981.981,0,1,1,0,1.962h-.981a.654.654,0,1,0,0,1.308h.981a2.288,2.288,0,0,0,0-4.577Z"
                  transform="translate(-2 -3)"
                />
              </svg>
              <span>Wind</span>
              <span>
                {" "}
                {tempDegree ? (
                  <span> {parseFloat(imperial).toFixed(2)}mph</span>
                ) : (
                  <span>{parseFloat(wind).toFixed(2)}kph </span>
                )}
              </span>
            </div>
            <div className="content__right_humidity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.889"
                height="16.92"
                viewBox="0 0 16.889 16.92"
              >
                <path
                  d="M12.444,4A8.46,8.46,0,1,1,4,12.46,8.463,8.463,0,0,1,12.444,4ZM13.5,7.173l1.352,1.355-1.88,1.884a2.008,2.008,0,0,0-.528-.066,2.112,2.112,0,0,0-2.111,2.115,2.019,2.019,0,0,0,.066.529L8.948,14.476a2.652,2.652,0,0,0-2.837.595L7.6,16.558a.537.537,0,0,1,.759.76l1.484,1.487a2.663,2.663,0,0,0,.594-2.842l1.484-1.454a2.008,2.008,0,0,0,.528.066,2.112,2.112,0,0,0,2.111-2.115,2.019,2.019,0,0,0-.066-.529l1.88-1.884L17.722,11.4V7.173Z"
                  transform="translate(-4 -4)"
                />
              </svg>
              <span>Pressure</span>
              <span> {pressure}hPa </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Current_weather;
