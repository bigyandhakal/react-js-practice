import React, { useState } from "react";

const countries = [
  {
    name: "Nepal",
    value: "NP",
    cities: ["Kathmandu", "Bhaktapur", "Lalitpur"],
  },
  {
    name: "India",
    value: "IN",
    cities: ["New Delhi", "Mumbai", "Bangalore"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Islamabad", "Karachi", "Lahore"],
  },
];

export default function DropdownSelector() {
  const [selectCountry, setSelectCountry] = useState("");

  const handleCountry = (e) => {
    const selCountryValue = e.target.value;
    setSelectCountry(selCountryValue);
  };
  return (
    <>
      <select onChange={handleCountry} value={selectCountry}>
        <option>Select a country</option>
        {countries.map((country, index) => {
          return <option key={index} value={country.value}>{country.name}</option>;
        })}
      </select>
      {selectCountry && (
        <select>
          <option>Select City</option>
          {countries
            .find((country) => country.value === selectCountry)
            .cities?.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
        </select>
      )}
    </>
  );
}
