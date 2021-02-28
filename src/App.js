import React, { useEffect, useState } from 'react';
import Country from './components/country/Country';

const App = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const handleClick = (country) => {
    console.log('hi', country);
  };

  return (
    <div className="App">
      <h1>Country added : </h1>
      {country.map((countryDetails) => (
        <Country
          country={countryDetails}
          handleClick={handleClick}
          key={countryDetails.alpha3Code}
        ></Country>
      ))}
    </div>
  );
};

export default App;
