import { useState } from "react";
import Navbar from "./Navbar";
import data from "./assets/data.json";
import { Link } from "react-router-dom";

function Home({ darkMode, setDarkMode }) {
  const [selectedOption, setSelectedOption] = useState("");

  const filteredByRegionData = data.filter((item) => {
    return item.region.includes(selectedOption);
  });

  console.log(selectedOption);
  console.log(filteredByRegionData);

  const [filterValue, setFilterValue] = useState("");

  const filteredData = filteredByRegionData.filter((item) => {
    // Customize the filtering logic based on your requirements
    return item.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const Data = filteredData.map((item) => (
    <>
      <div className="col-span-1 flex flex-col items-start justify-start shadow-xl rounded-lg text-black dark:text-white w-72 h-80 pb-44 dark:bg-gray-700 bg-white hover:scale-105 duration-300">
        <Link
          to={`/${item.name.toLowerCase()}`}
          className="relative top-0 min-w-[100%] rounded-lg"
        >
          <img
            className="max-h-[150px] min-w-full rounded-lg"
            src={item.flags.png}
            alt=""
          />
        </Link>
        <Link
          to={`/${item.name.toLowerCase()}`}
          className="text-2xl my-4 ml-6 h-8 overflow-clip"
        >
          {item.name}
        </Link>
        <p className="text-md my-1 ml-6">Population: {item.population}</p>
        <p className="text-md my-1 ml-6">Region: {item.region}</p>
        <p className="text-md my-1 ml-6">Capital: {item.capital}</p>
      </div>
    </>
  ));

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 w-full min-h-auto">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex md:flex-row flex-col justify-between">
          <div className="flex flex-row items-center justify-start relative mt-10 sm:left-20 left-4 sm:w-[480px] w-[440px] h-[55px] rounded-md shadow-xl bg-white dark:bg-gray-700 ">
            <div className="ml-6 w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={darkMode ? "white" : "gray-700"}
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              onChange={handleFilterChange}
              placeholder="Search for a country ..."
              className="text-gray-700 dark:text-white indent-4 mx-4 w-full h-8 rounded-md bg-inherit"
            ></input>
          </div>

          <div className="w-[200px] h-[56px] mr-20 mt-10 md:ml-0 ml-20 rounded-xl dark:text-white bg-white dark:bg-gray-700 shadow-lg">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full h-full px-4 bg-inherit rounded-md"
            >
              <option value="">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row flex-wrap relative justify-center gap-y-12 gap-x-12 mt-10 w-[90%] left-[5%]">
          {Data}
        </div>
      </div>
    </>
  );
}

export default Home;
