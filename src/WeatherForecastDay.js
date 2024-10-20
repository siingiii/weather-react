import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let dailyForecast = props.data;

  function maxTemperature() {
    let temperature = Math.round(dailyForecast.temperature.maximum);
    return temperature;
  }

  function minTemperature() {
    let temperature = Math.round(dailyForecast.temperature.minimum);
    return temperature;
  }

  function day() {
    let date = new Date(dailyForecast.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  console.log(props.data);
  console.log(dailyForecast);
  return (
    <div className="col" key={props.index}>
      <div className="WeatherForecast-day">{day()}</div>

      <WeatherIcon
        code={dailyForecast.condition.icon}
        iconUrl={dailyForecast.condition.icon_url}
        className="forecast-icon"
        size={36}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-Temperature-max">
          {maxTemperature()}°{" "}
        </span>
        <span className="WeatherForecast-Temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
