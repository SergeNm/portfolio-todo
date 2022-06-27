import React from "react";
import { ButtonCalc } from "../../models/models";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setValue, operate } from "../../redux/slices/calcSlice";
import classNames from "../../utils/classNames";

const SingleButton = (button: ButtonCalc) => {
  const dispatch = useAppDispatch();
  const { themeName } = useAppSelector((state) => state.theme.theme);
  return (
    <div className="p-2 inline-block">
      <button
        className={
          "px-3 py-1 rounded font-bold border-b-2 w-14 hover:bg-gray-400 " +
          classNames(
            themeName === "light"
              ? "text-gray-700 bg-gray-300 border-gray-500 "
              : themeName === "dark"
              ? "text-gray-300 bg-gray-700 "
              : ""
          ) +
          classNames(
            button.label === "="
              ? "w-32 bg-pink-800"
              : button.label === "Reset"
              ? "w-32"
              : ""
          ) +
          classNames(
            button.label === "Del" || button.label === "Reset"
              ? " bg-gray-500"
              : ""
          )
        }
        onClick={() => {
          if (!Number.isNaN(parseInt(button.label))) {
            dispatch(setValue(parseInt(button.label)));
          } else if (button.label === "-") {
            dispatch(
              operate({
                operator: "-",
              })
            );
          } else if (button.label === "+") {
            dispatch(
              operate({
                operator: "+",
              })
            );
          } else if (button.label === "x") {
            dispatch(
              operate({
                operator: "*",
              })
            );
          } else if (button.label === "/") {
            dispatch(
              operate({
                operator: "/",
              })
            );
          } else if (button.label === "=") {
            dispatch(
              operate({
                operator: "=",
              })
            );
          } else if (button.label === "Reset") {
            dispatch(
              operate({
                operator: "reset",
              })
            );
          } else if (button.label === "Del") {
            dispatch(
              operate({
                operator: "del",
              })
            );
          } else if (button.label === ".") {
            dispatch(
              operate({
                operator: ".",
              })
            );
          }
        }}
      >
        <span
          className={
            "" +
            classNames(
              button.label === "=" ||
                button.label === "Reset" ||
                button.label === "Del"
                ? "text-gray-200"
                : ""
            )
          }
        >
          {button.label}
        </span>
      </button>
    </div>
  );
};

export default SingleButton;
