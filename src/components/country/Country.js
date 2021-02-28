import React from 'react';
import './country.css';

const Country = (props) => {
  const { name, flag, population } = props.country;
  return (
    <div className="container">
      <div className="countryDetails">
        <img src={flag} alt="" />
        <p>{name}</p>
        <p>{population}</p>
      </div>
    </div>
  );
};

export default Country;
