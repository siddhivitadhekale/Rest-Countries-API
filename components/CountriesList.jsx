import React, { useEffect, useState } from "react";
// import Countrydata from '../Countrydata';
import CountryCard from "../components/CountryCard";
import CountriesListShimmer from "./CountryListShimmer";

export default function CountriesList({ query }) {
  const [Countrydata, setCountrydata] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountrydata(data);
      });
  }, []);

  if (!Countrydata.length) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className="countries-container">
        {Countrydata.filter(
          (country) =>
            country.name.common.toLowerCase().includes(query) ||
            country.region.toLowerCase().includes(query)
        ).map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital}
            />
          );
        })}
      </div>
    </>
  );
}
