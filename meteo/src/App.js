import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'
import axios from 'axios'
import Weather from './Weather'
import Search from './Search'
import './App.css'

// Inserisci la tua chiave API qui
const API_KEY = 'bd63f01d075160b282f55a32f3a5de87'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [city, setCity] = useState('')

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )
      setWeatherData(response.data)
    } catch (error) {
      console.error('Errore nella richiesta dei dati meteo:', error)
      setWeatherData(null)
    }
  }

  return (
    <div className="App">
      <h1>App Meteo</h1>
      <Search setCity={setCity} fetchWeather={fetchWeather} />
      {weatherData && <Weather data={weatherData} />}
    </div>
  )
}

export default App
