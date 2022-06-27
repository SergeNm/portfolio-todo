import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import Filter from "./Filter";
import Header from "./Header";
import Search from "./Search";
import SingleCountry from "./SingleCountry";
import { fetchAllCountries } from "../../redux/thunks/countriesThunk";
import Spinner from "../app/Spinner";
import classNames from "../../utils/classNames";
import HomeButton from "../app/HomeButton";

const Countries = () => {
  const { themeName } = useAppSelector((state) => state.theme.theme);
  const { countries, loading } = useAppSelector((state) => state.countries);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);
  return (
    <div className={
      "py-2 h-full " +
      classNames(themeName === "dark" ? "text-gray-200 bg-gray-700" : "text-gray-700")
    }>
      <HomeButton />
      <Header themeName={themeName} />
      <div className="p-8 md:flex justify-between">
        <Search /> <Filter />
      </div>
      <div className="p-8 pt-2 md:flex flex-wrap justify-around">
        {
         countries.map(
          ({ name: { common }, flags: { svg }, capital, region, area }, i) => {
            const city = Array.isArray(capital) ? capital.join(" ") : capital;
            return (
              <SingleCountry
                key={i}
                name={common}
                image={svg}
                capital={city}
                region={region}
                area={area}
              />
            );
          }
        )}
        {loading && <Spinner />}
      </div>
    </div>
  );
};

export default Countries;
