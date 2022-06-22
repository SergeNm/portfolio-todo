import React from "react";
import { Country } from "../../models/models";

const SingleCountry = ({image, name, area, capital, region}: Country) => {
  return (
    <div>
      <div className="p-4 max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-72 max-h-40" src={image} alt="" />
        <div className="px-4 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-base">
           <span className="font-bold">Area: </span> <span>{area}</span><br/>
           <span className="font-bold"> Capital: </span> <span>{capital}</span><br/>
           <span className="font-bold">Region: </span> <span>{region}</span><br/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
