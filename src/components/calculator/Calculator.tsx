import React from "react";

import Buttons from "./Buttons";
import Input from "./Input";

const Calculator = () => {

  return (
    <div className="bg-gray-600 flex justify-center p-4">
      <div className="w-72">
        <Input />
        <div className="bg-gray-700 rounded">
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
