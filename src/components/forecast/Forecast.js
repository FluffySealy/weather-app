import React from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";

function Forecast({ data }) {
  
  const closeForecast = data.forecastResponse.list.slice(0, 4);
  closeForecast.splice();
  console.log(closeForecast);

  return (
    <div className="row">
      {closeForecast.map((item, idx) => (
      <ForecastItem data={item} key={item.dt} index={idx}/>
      ))}
      
    </div>
  );
}
export default Forecast;

Forecast.propTypes = {
  data: PropTypes.object.isRequired,
};
