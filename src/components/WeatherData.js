import React from 'react';
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTempeture from "./WeatherTempeture";

const WeatherData = () => (
  <div>
    <WeatherTempeture />
    <WeatherExtraInfo />
  </div>
)

export default WeatherData;