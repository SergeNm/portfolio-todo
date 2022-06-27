import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setTheme } from "../../redux/slices/theme";
import classNames from "../../utils/classNames";

const Header = () => {
  const dispatch = useAppDispatch();
  const { themeName } = useAppSelector((state) => state.theme.theme);
  return (
    <div className="flex justify-between">
      <span
        className={
          "pt-2 font-bold text-lg " +
          classNames(
            themeName === "light"
              ? "text-gray-200 "
              : themeName === "dark"
              ? "text-gray-700 "
              : ""
          )
        }
      >
        calc
      </span>
      <div
        className={
          "flex " +
          classNames(
            themeName === "light"
              ? "text-gray-300"
              : themeName === "dark"
              ? "text-gra-600"
              : ""
          )
        }
      >
        <span className="pt-4 px-3  text-xs ">THEME</span>
        <div>
          <div className="flex justify-around text-xs font-bold">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className={"flex items-center justify-center "}>
            <div
              className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
              role="group"
            >
              <button
                type="button"
                className={
                  "rounded-l-lg inline-block py-1 px-2 font-medium text-xs leading-tight uppercase transition duration-150 ease-in-out " +
                  classNames(
                    themeName === "light"
                      ? "bg-gray-800 "
                      : themeName === "dark"
                      ? "bg-gray-400 "
                      : ""
                  )
                }
                onClick={() => dispatch(setTheme({ themeName: "light" }))}
              >
                {themeName === "light" && (
                  <span className="text-pink-600">
                    <AiFillCheckCircle />
                  </span>
                )}
              </button>
              <button
                type="button"
                className={
                  "inline-block py-1 px-2 text-white font-medium text-xs leading-tight transition duration-150 ease-in-out " +
                  classNames(
                    themeName === "light"
                      ? "bg-gray-800 "
                      : themeName === "dark"
                      ? "bg-gray-400 "
                      : ""
                  )
                }
                onClick={() => dispatch(setTheme({ themeName: "dark" }))}
              >
                {themeName === "dark" && (
                  <span className="text-pink-900">
                    <AiFillCheckCircle />
                  </span>
                )}
              </button>
              <button
                type="button"
                className={"rounded-r-lg inline-block py-1 px-2 text-white font-medium text-xs leading-tight uppercase  transition duration-150 ease-in-out "+classNames(
                  themeName === "light"
                    ? "bg-gray-800 "
                    : themeName === "dark"
                    ? "bg-gray-400 "
                    : ""
                )}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
