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
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form id="search-form" class="mb-3">
              <div class="row">
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary w 100"
                  />
                </div>
              </div>
            </form>
            <div class="overview">
              <h1 id="city">{weatherInfo.city}</h1>
              <ul>
                <li>
                  Last updated: <span>{weatherInfo.date}</span>
                </li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="d-flex weather-temperature">
                  <img
                    src="http://openweathermap.org/img/wn/03n@2x.png"
                    alt="Partly Cloudy"
                    id="icon"
                  />
                  <div>
                    <strong id="temperature">{weatherInfo.temperature}</strong>
                    <span class="units">°C°F</span>
                  </div>
                </div>
              </div>
              <div class="col-6">
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
        </div>
      </div>
    </div>
  );
}
