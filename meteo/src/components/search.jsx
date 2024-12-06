

import React from 'react';

function Search({ fetchWeather }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const cityInput = event.target.elements.city.value;
    if (cityInput) {
      fetchWeather(cityInput); // Chiamata alla funzione per recuperare i dati meteo
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="city" placeholder="Inserisci la città" required />
      <button type="submit">Cerca</button>
    </form>
  );
}

export default Search;