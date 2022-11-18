import React from "react";

function Location({data}) {
    return (
        <div className="location">
        <span id="current-location" title="Current location">{data.weatherResponse.name}</span>
      </div>
    );
  }
  export default Location;