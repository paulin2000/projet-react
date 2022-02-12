import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import Card from './Card';

const Countries = () => {

  const [data, setData] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [rangeValue, setRangeValue] = useState(30)
  const [selectedRadio, setSelectedRadio] = useState("")
  const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  useEffect(() => {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
      }
    };
    axios
    .get("https://restcountries.com/v2/all?fields=name,capital,population,flag", config)
    .then(res => setData(res.data))
    .catch(err => console.log(err))


  },[])

  useEffect(() => {
    const sortedCountry = () => {
        if (data !== []) {
          const countryObj = Object.keys(data).map( i  => data[i])
          const sortedArrayByName = countryObj.sort((a, b) => {return b.population - a.population})
          sortedArrayByName.length = rangeValue
          return sortedArrayByName
        }     
    }
    setSortedData(sortedCountry())
  },[data, rangeValue])
      
   
  return (
    <div className='countries'>
      <div className="sort-container">
        <input type="range" min="1" max="250" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
        <ul>
          {radios.map(radio => {
            return(
              <li key={radio}>
                <input type="radio" value={radio} id={radio} />
                <label htmlFor={radio}>{radio}</label>
              </li>
            )
          })}
        </ul>
      </div>
      <ul className="countries-list">
        { (sortedData!==[]) && sortedData.map(country => {
          return(<Card country={country} key={country.name}/>)
        })}
      </ul>
    </div>
  );
};

export default Countries;