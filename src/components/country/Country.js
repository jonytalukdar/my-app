import React from 'react';
import './country.css';

const Country = (props) => {
  const { name, flag, population, languages } = props.country;
  const handleClick = props.handleClick;
  return (
    <div className="container">
      <div className="countryDetails">
        <img src={flag} alt="" />
        <div className="name-population">
          <p>{name}</p>
          <p>{languages[0].name}</p>
          <p>{population}</p>
        </div>
        <button onClick={() => handleClick(props.country)} className="btn">
          See More
        </button>
      </div>
    </div>
  );
};

export default Country;
