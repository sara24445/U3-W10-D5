
import React from 'react';

function Search({ setCity, fetchWeather }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const cityInput = event.target.elements.city.value;
    if (cityInput) {
      setCity(cityInput);
      fetchWeather(cityInput);
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