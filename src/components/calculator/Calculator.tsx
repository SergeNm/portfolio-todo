import React from "react";
import { useAppSelector } from "../../redux/hooks";
import classNames from "../../utils/classNames";
import HomeButton from "../app/HomeButton";

import Buttons from "./Buttons";
import Header from "./Header";
import Input from "./Input";

const Calculator = () => {
  const { themeName } = useAppSelector((state) => state.theme.theme);
  return (
    <div className={"h-screen flex justify-center items-center p-4 "+ classNames(
      themeName === "light"
        ? "bg-gray-600"
        : themeName === "dark"
        ? "bg-gray-100"
        : ""
    ) }>
      <HomeButton />
      <div>
        <Header />
        <div className="w-72">
          <Input />
          <div
            className={
              "rounded " +
              classNames(
                themeName === "light"
                  ? "bg-gray-700"
                  : themeName === "dark"
                  ? "bg-gray-300"
                  : ""
              )
            }
          >
            <Buttons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
