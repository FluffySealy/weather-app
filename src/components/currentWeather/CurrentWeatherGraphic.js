import React from "react";
import { ReactComponent as Sun } from '../../assets/weathergraphicsun.svg';
import { ReactComponent as Rain } from '../../assets/weathergraphicrain.svg';
import { ReactComponent as Clouds } from '../../assets/weathergraphiccloud.svg';

function CurrentWeatherGraphic({data}) {
const weatherDescription = data.weatherResponse.weather[0].description;

  const renderWeatherDescription = () => {
    switch (weatherDescription) {
      case "broken clouds" :   return <Clouds />;
      case "overcast clouds" :   return <Clouds />;
      case "few clouds":   return <><Clouds /><Sun /></>;
      case "light rain": return <><Clouds /><Sun /><Rain /></>;
      case "shower rain":   return <><Clouds /><Rain /></>;
      case "rain":   return <><Clouds /><Rain /></>;
      case "clear sky": return <Sun />;
    default:
      return <><Clouds /><Sun /><Rain /></>;
    }
};


    return (
      <svg xmlns="http://www.w3.org/2000/svg" id="weather-graphic">
        {renderWeatherDescription()}
        </svg>
    );
  }
  export default CurrentWeatherGraphic;