import React, { useEffect, useState } from 'react';
import Cart from './components/cart/Cart';
import Country from './components/country/Country';

const App = () => {
  const [country, setCountry] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  const handleClick = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div>
      <Cart cart={cart}></Cart>
      <div className="App">
        {country.map((countryDetails) => (
          <Country
            country={countryDetails}
            handleClick={handleClick}
            key={countryDetails.alpha3Code}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default App;
