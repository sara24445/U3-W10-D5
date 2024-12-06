import logo from './logo.svg'
import './App.css'
// src/App.js

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'
import Search from './Search'
import './App.css'

// Inserisci la tua chiave API qui
const API_KEY = 'bd63f01d075160b282f55a32f3a5de87'
// Città predefinita
const DEFAULT_CITY = 'Roma'

function App() {
  const [weatherData, setWeatherData] = useState(null)

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Errore nella richiesta dei dati meteo:', error)
      setWeatherData(null) // Resetta i dati in caso di errore
    }
  }

  // Effettua una chiamata all'avvio dell'app per la città predefinita
  useEffect(() => {
    fetchWeather(DEFAULT_CITY)
  }, [])

  return (
    <div className="App">
      <h1>App Meteo</h1>
      <Search fetchWeather={fetchWeather} />

      {/* Mostra i dati meteo se disponibili */}
      {weatherData ? (
        <Weather data={weatherData} />
      ) : (
        <p>Caricamento dei dati meteo...</p> // Messaggio di caricamento
      )}
    </div>
  )
}

export default App
