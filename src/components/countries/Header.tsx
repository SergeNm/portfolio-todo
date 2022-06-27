import React from "react";
import { Theme } from "../../models/models";
import { FiMoon } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import classNames from "../../utils/classNames";
import { useAppDispatch } from "../../redux/hooks";
import { setTheme } from "../../redux/slices/theme";

const Header = ({ themeName }: Theme) => {
  const dispatch = useAppDispatch();
  return (
    <div
      className={
        "md:p-4 shadow-sm border-b-2 " +
        classNames(themeName === "dark" ? "text-gray-200 bg-gray-700" : "")
      }
    >
      <div className="text-2xl flex justify-between">
        <h1 className="">Where in the world ?</h1>
        <button
          className="flex px-4 items-center"
          onClick={() =>
            themeName === "light"
              ? dispatch(setTheme({ themeName: "dark" }))
              : dispatch(setTheme({ themeName: "light" }))
          }
        >
          <span className="px-2">
            {themeName === "dark" ? <BsLightningCharge /> : <FiMoon />}
          </span>
          <span className={"text-xl hidden md:block "}>
            {themeName === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
