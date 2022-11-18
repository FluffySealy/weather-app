import React from "react";
import { format } from "date-fns";
import { ReactComponent as Cloudy } from '../../assets/cloudy.svg';
import { ReactComponent as CloudySunny } from '../../assets/cloudysunny.svg';
import { ReactComponent as CloudySunnyRainy } from '../../assets/cloudysunnyrainy.svg';
import { ReactComponent as Raining } from '../../assets/raining.svg';
import { ReactComponent as Sunny } from '../../assets/sunny.svg';

function ForecastItem({ data, index }) {

  const weatherTimeDate = new Date(data.dt_txt);
  const weatherTime = format(weatherTimeDate, "haaa").toLocaleString() + "";
  const forecastDescription = data.weather[0].description;

  const renderForecastDescription = () => {
    switch (forecastDescription) {
      case "broken clouds" :   return <Cloudy />;
      case "overcast clouds" :   return <Cloudy />;
      case "few clouds":   return <CloudySunny />;
      case "light rain": return <CloudySunnyRainy />;
      case "shower rain":   return <Raining />;
      case "rain":   return <Raining />;
      case "clear sky": return <Sunny />;
    default:
      return <CloudySunnyRainy />;
    }
};

  return (
    <div className="col">
       {renderForecastDescription()}
     <time
        className={`forecast-datetime-${weatherTime}`}
        dateTime={{weatherTime}}
      >
        {weatherTime}
      </time>
    </div>
  );
}
export default ForecastItem;
