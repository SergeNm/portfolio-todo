import React from "react";
import { useAppSelector } from "../../redux/hooks";
import classNames from "../../utils/classNames";

const Input = () => {
  const { showValue, fractionValue } = useAppSelector(
    (state) => state.calculator
  );
  const { themeName } = useAppSelector((state) => state.theme.theme);
  return (
    <div>
      <input
        type="test"
        placeholder="0"
        value={
          showValue.join("") +
          ( + fractionValue.join("")? "."+fractionValue.join(""):"")
        }
        className={
          "p-3 my-2 w-full rounded text-xl font-bold text-right " +
          classNames(
            themeName === "light"
              ? "bg-gray-800 text-gray-300"
              : themeName === "dark"
              ? "bg-gray-300 text-gray-800"
              : ""
          )
        }
        disabled
      />
    </div>
  );
};

export default Input;
