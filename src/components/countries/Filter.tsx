import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { filterByRegion } from "../../redux/slices/countriesSlice";

const Filter = () => {
  const dispatch = useAppDispatch();
  const { regions } = useAppSelector((state) => state.countries);
  const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterByRegion(e.target.value));
  };
  return (
    <div className="p-3">
      <select
        id="large"
        className="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        <option value={undefined} selected>Filter by Region</option>
        {regions?.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
