import React, { useEffect, useState } from 'react';
import Country from './components/country/Country';

const App = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);
  return (
    <div className="App">
      {country.map((countryDetails) => (
        <Country
          country={countryDetails}
          key={countryDetails.alpha3Code}
        ></Country>
      ))}
    </div>
  );
};

export default App;
