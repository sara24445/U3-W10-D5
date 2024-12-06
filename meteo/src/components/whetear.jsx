// src/Weather.js
import React from 'react';

function Weather({ data }) {
  const { main, weather, wind, name } = data;

  return (
    <div>
      <h2>Meteo a {name}</h2>
      <p>Temperatura: {main.temp}°C</p>
      <p>Condizioni: {weather[0].description}</p>
      <p>Umidità: {main.humidity}%</p>
      <p>Vento: {wind.speed} m/s</p>
    </div>
  );
}

export default Weather;