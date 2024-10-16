import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  // Check if props.data and props.data.iconUrl are defined
  if (!props.data || !props.data.iconUrl) {
    return null; // Or return a placeholder or loading indicator
  }
  console.log("WeatherForecast Props:", props.data);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon
            iconUrl={`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png`}
            className="forecast-icon"
            size={36}
          />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-Temperature-max">19° </span>
            <span className="WeatherForecast-Temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
