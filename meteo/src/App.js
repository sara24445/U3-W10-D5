import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Search from './Search'
import Weather from './Weather'
import Footer from './Footer'
import './App.css'

const API_KEY = 'bd63f01d075160b282f55a32f3a5de87'
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
      setWeatherData(null)
    }
  }

  useEffect(() => {
    fetchWeather(DEFAULT_CITY)
  }, [])

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Search fetchWeather={fetchWeather} />
            {weatherData ? (
              <Weather data={weatherData} />
            ) : (
              <p>Caricamento dei dati meteo...</p>
            )}
          </Route>
          {}
          <Route path="/about">
            <h2>Informazioni sull'app</h2>
            <p>Questa è un'app per visualizzare le previsioni meteo.</p>
          </Route>
          <Route path="/contact">
            <h2>Contatti</h2>
            <p>Puoi contattarci via email a contact@mymeteoapp.com.</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
