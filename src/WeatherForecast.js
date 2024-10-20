import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (props.coordinates) {
      let apiKey = "bo1a2b41a0fa025404t138bab48dce85";
      let { latitude, longitude } = props.coordinates;

      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }
  }, [props.coordinates]);

  function handleResponse(response) {
    console.log("API Response:", response.data);
    if (response.data.daily) {
      setForecast(response.data.daily);
      setLoaded(true);
    }
  }

  if (!props.coordinates) {
    return <div>No coordinates available</div>;
  }

  if (loaded && forecast) {
    console.log("WeatherForecast Props:", props.data);
    if (loaded) {
      return (
        <div className="WeatherForecast">
          <div className="row">
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
    } else {
      return <div>Loading forecast...</div>;
    }
  }
}
