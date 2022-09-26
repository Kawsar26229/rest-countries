import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, region, subregion, population, area, flags } =
    props.country;
  return (
    <div className="country bg-info">
      <h3>Name: {name.common}</h3>
      <img src={flags.png} alt="" />
      <h4>Capital: {capital}</h4>
      <h5>Region: {region}</h5>
      <h6>Subregion: {subregion}</h6>
      <p>Population: {population}</p>
      <h4>Area: {area}</h4>
    </div>
  );
};

export default Country;
