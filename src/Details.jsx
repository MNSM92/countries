import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import data from "./assets/data.json";
import { Link } from "react-router-dom";

function Details({ darkMode, setDarkMode }) {
  const location = useParams();

  const shortData = data.filter(
    (item) => item.name.toLowerCase() === location.country
  );

  const borderCountries = shortData[0].borders;

  const buttons = borderCountries?.map((item) => {
    const country = data.find((i) => i.alpha3Code === item);
    const countryName = country?.name;

    return (
      <Link
        key={item}
        className="px-2 dark:bg-gray-700 font-normal rounded-sm shadow-lg border-1 shadow-md"
        to={`/${countryName.toLowerCase()}`}
      >
        {countryName}
      </Link>
    );
  });

  const languages = shortData[0].languages.map((lang) => lang.name);
  const languageHold = languages.map((name, index) => (
    <span key={name}>
      {name}
      {index !== languages.length - 1 && ", "}
    </span>
  ));

  return (
    <>
      <div className="bg-red dark:bg-gray-800 w-full min-h-auto">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Link
          to="/"
          className="flex absolute pl-8 dark:bg-gray-700 bg-white items-center w-[137px] h-[41px] left-[74px] top-[120px] border-1 rounded-lg shadow-xl"
        >
          <span className="text-xl dark:text-white">&larr;</span>
          <p className="pl-2 dark:text-white">Back</p>
        </Link>

        <div className="relative w-[563px] h-[403px] bg-inherit left-[74px] md:top-[240px] top-[150px] shadow-2xl hover:scale-105 duration-300">
          <img
            className="max-h-full min-h-full min-w-full max-w-full"
            src={shortData[0].flags.svg}
            alt=""
          ></img>
        </div>

        <div className="flex flex-col justify-between relative md:w-[650px] md:h-[403px] dark:text-gray-300 text-black bg-inherit px-10 py-6 md:left-[800px] md:-top-[160px] top-[260px]">
          <div className="flex h-[25%] w-[100%] md:pl-0 pl-10 md:py-0 py-4 items-center">
            <p className="text-4xl font-bold">{shortData[0].name}</p>
          </div>

          <div className="flex md:flex-row flex-col md:pl-0 pl-10 md:py-0 py-6 h-[60%] w-[100%]">
            <div className="md:w-[50%] w-full md:space-y-4 space-y-8 md:text-lg text-2xl">
              <p>
                <span className="font-bold pr-2">Native Name: </span>
                {shortData[0].nativeName}
              </p>
              <p>
                <span className="font-bold pr-2">Population: </span>
                {shortData[0].population.toLocaleString("en-IN")}
              </p>
              <p>
                <span className="font-bold pr-2">Region: </span>
                {shortData[0].region}
              </p>
              <p>
                <span className="font-bold pr-2">Sub Region: </span>
                {shortData[0].subregion}
              </p>
              <p>
                <span className="font-bold pr-2">Capital: </span>
                {shortData[0].capital}
              </p>
            </div>
            <div className="md:w-[50%] w-full md:space-y-4 space-y-8 md:pt-0 pt-20 md:text-lg text-2xl">
              <p>
                <span className="font-bold pr-2">Top Level Domain: </span>
                {shortData[0].topLevelDomain}
              </p>
              <p>
                <span className="font-bold pr-2">Currencies: </span>
                {shortData[0].currencies[0].name}
              </p>
              <p>
                <span className="font-bold pr-2">Languages: </span>
                {languageHold}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap h-[15%] w-[100%] md:pl-0 pl-10 md:space-x-1 md:text-lg text-2xl space-x-2 space-y-1 md:py-0 py-4 font-bold items-start">
            <p className="pr-4">Border Countries: </p>
            {buttons}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
