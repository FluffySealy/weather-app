import React from "react";
import { format } from 'date-fns'
import PropTypes from 'prop-types';

function CurrentWeather({data}) {
    return (
        <div className="weather-info">
        <time id="current-datetime" dateTime={format(new Date(), 'MM d').toLocaleString() + ""} title="Current date">{format(new Date(), 'EEE MMM d').toLocaleString() + ""}</time>
        {data.weatherResponse.weather ? <span id="current-weather" data-value={data.weatherResponse.weather[0].main} title="Current weather type">{data.weatherResponse.weather[0].main}</span> : null }
        {data.weatherResponse.main ? <span id="current-temp" data-value={data.weatherResponse.main.temp.toFixed()} title="Current temperature"> {data.weatherResponse.main.temp.toFixed()}°C</span> : null } 
      </div>
    );
  }
  export default CurrentWeather;

  CurrentWeather.propTypes = {
    data: PropTypes.object.isRequired,
  };