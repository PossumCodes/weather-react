import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherInfo = {
    city: "Sydney",
    temperature: 18,
    date: "Monday 10:00",
    description: "Cloudy",
    imgUrl: "http://openweathermap.org/img/wn/03n@2x.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app-wrapper">
          <div class="weather-app">
            <form id="search-form" class="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w 100"
                  />
                </div>
              </div>
            </form>
            <div className="overview">
              <h1 id="city">{weatherInfo.city}</h1>
              <ul>
                <li>
                  Last updated: <span>{weatherInfo.date}</span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/03n@2x.png"
                    alt="Partly Cloudy"
                    id="icon"
                  />
                  <div>
                    <strong id="temperature">{weatherInfo.temperature}</strong>
                    <span className="units">°C°F</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span>{weatherInfo.humidity}</span>%
                  </li>
                  <li>
                    Wind: <span id="wind">{weatherInfo.wind}</span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="github-link">
            <a
              href="https://github.com/PossumCodes/weather-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code on GitHub
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
