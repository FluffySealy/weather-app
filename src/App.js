import React, { useState } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/WeatherApi";
import UserInput from "./components/UserInput";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import CurrentWeatherGraphic from "./components/currentWeather/CurrentWeatherGraphic";
import Forecast from "./components/forecast/Forecast";
import Location from "./components/currentWeather/Location";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchLocation = (location) => {

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?q=${location}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ weatherResponse });
        setForecast({ forecastResponse });
      })
      .catch(error => {
        alert("Your search was unable to be completed. please try again.");
     });
  };

  return (
   
    <div className="app">
      <UserInput onSearch={searchLocation} />
      {currentWeather !== null &&
      <div className="weather-container">
        <CurrentWeather data={currentWeather} />
        <CurrentWeatherGraphic data={currentWeather} />
        <Forecast data={forecast} />
        <Location data={currentWeather} />
      </div>
       }
    </div>
  );
}

export default App;
