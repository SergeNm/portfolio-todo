import React from "react";
import { ButtonCalc } from "../../models/models";
import { useAppDispatch } from "../../redux/hooks";
import { setValue, operate } from "../../redux/slices/calcSlice";
import classNames from "../../utils/classNames";

const SingleButton = (button: ButtonCalc) => {
  const dispatch = useAppDispatch();
  return (
    <div className="p-2 inline-block">
      <button
        className={
          "px-3 py-1 rounded text-gray-700 bg-gray-300 font-bold w-14 hover:bg-gray-400 " +
          classNames(
            button.label === "=" || button.label === "Reset"
              ? "w-32"
              : ""
          )
        }
        onClick={() =>{
          if(!Number.isNaN(parseInt(button.label))){
            dispatch(setValue(parseInt(button.label)))
          }
          else if(button.label === '-' ) {
            dispatch(operate({
              operator: '-'
            }));
          }
          else if(button.label === '+' ) {
            dispatch(operate({
              operator: '+'
            }));
          }
          else if(button.label === '=' ) {
            dispatch(operate({
              operator: '='
            }));
          }
          else if(button.label === 'Reset' ) {
            dispatch(operate({
              operator: 'reset'
            }));
          }
        }
        }
      >
        {button.label}
      </button>
    </div>
  );
};

export default SingleButton;
