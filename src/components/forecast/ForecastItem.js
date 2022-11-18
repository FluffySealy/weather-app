import React from "react";
import { format, add } from "date-fns";
import { ReactComponent as Cloudy } from '../../assets/cloudy.svg';
import { ReactComponent as CloudySunny } from '../../assets/cloudysunny.svg';
import { ReactComponent as CloudySunnyRainy } from '../../assets/cloudysunnyrainy.svg';
import { ReactComponent as Raining } from '../../assets/raining.svg';
import { ReactComponent as Sunny } from '../../assets/sunny.svg';

function ForecastItem({ data, index }) {


  const addHoursToCurrentDate = (time) => {
    console.log(time);
    const date = new Date();
    console.log(date);
    const newDate = add(date, { hours: time });
    console.log(add(date, { hours: time }));
    return format(newDate, "haaa").toLocaleString() + "";
  };

  const forecastDescription = data.weather[0].description;

  const renderForecastDescription = () => {
    switch (forecastDescription) {
      case "overcast clouds":   return <Cloudy />;
      case "few clouds: 11-25%":   return <CloudySunny />;
      case "light rain": return <CloudySunnyRainy />;
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
        className={`forecast-datetime-${index}`}
        dateTime={addHoursToCurrentDate(index)}
      >
        {addHoursToCurrentDate(index)}
      </time>
    </div>
  );
}
export default ForecastItem;
