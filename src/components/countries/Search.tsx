import React, { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { searchCountry, setKeyword } from "../../redux/slices/countriesSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const keywordRef = useRef<HTMLInputElement>(null);
  const keyword = useAppSelector((state) => state.countries.keyword);

  const search = () => {
    dispatch(setKeyword(String(keywordRef.current?.value)));
  };

  useEffect(()=>{
    dispatch(searchCountry())
  }, [keyword, dispatch])

  return (
    <div>
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-80 pl-10 p-2.5 "
            placeholder="Search"
            ref={keywordRef}
            onChange={search}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
