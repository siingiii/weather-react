import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Search Engine</h1>
        <footer>
          This project was coded by Singita Innocentia and is{" "}
          <a
            href="https://github.com/siingiii/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source code on Github
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

export default App;
