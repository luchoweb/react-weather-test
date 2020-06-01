import React from "react";

const WeatherExtraInfo = ( props ) => {
  const { humidity, wind } = props;
  return (
    <div>
      <p>
        Humedad: { humidity }
        <br/>
        Vientos: { wind }
      </p>
    </div>
  );
}

export default WeatherExtraInfo;