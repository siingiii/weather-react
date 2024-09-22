import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Protea Glen" />

        <footer>
          This project was coded by Singita Innocentia and is{" "}
          <a
            href="https://github.com/siingiii/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://sprinkle-weather-react.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
