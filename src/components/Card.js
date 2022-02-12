import React from 'react';

const Card = ({country}) => {
  
  

  return (
    <li className='card'>
      <img src={country.flag}/>
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>{country.capital}</li>
          <li>Pop. {country.population}</li>
        </ul>
      </div>

    </li>
  );
};

export default Card;