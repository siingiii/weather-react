import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  console.log("Icon Url:", props.code);
  console.log("Icon code:", props.code);

  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "few-clouds": "PARTLY_CLOUDY",
    "few-clouds-night": "PARTLY_CLOUDY",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "FOG",
    "mist-night": "FOG",
    "thunderstorm-day": "THUNDER",
    "thunderstorm-night": "THUNDER",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
  };

  const icon = codeMapping[props.code] || "CLOUDY";

  return (
    <ReactAnimatedWeather
      icon={icon}
      color="rgb(33, 33, 33)"
      size={props.size}
      animate={true}
    />
  );
}
