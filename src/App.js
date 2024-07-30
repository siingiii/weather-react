import React, { useState } from "react";
import axios from "axios";
import "./App.css";
//import "./styles.css//

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const apiKey = "5da7b2dc058f07286fea39c4cee516a3";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = response.data;
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind: (data.wind.speed * 3.6).toFixed(2),
        icon: data.weather[0].icon,
      });
    } catch (error) {
      console.error("Error fetching the weather data", error);
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weather && (
        <>
          <ul>
            <li>Temperature: {weather.temperature}°C</li>
            <li>Description: {weather.description}</li>
            <li>Humidity: {weather.humidity}%</li>
            <li>Wind: {weather.wind} km/h</li>
            <li>
              <img
                src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
                alt="weather icon"
              />
            </li>
          </ul>
          <footer>
            Open
            <a
              href="https://github.com/siingiii/weather-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              source code
            </a>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
