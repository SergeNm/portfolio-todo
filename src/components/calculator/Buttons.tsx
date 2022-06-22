import React from "react";
import { ButtonCalc } from "../../models/models";
import Button from "./Button";

const Buttons = () => {
  const buttons: ButtonCalc[][] = [
    [
      {
        label: "7",
        operation: {
          value: 7,
        },
       
      },
      {
        label: "8",
        operation: {
          value: 8,
        },
       
      },
      {
        label: "9",
        operation: {
          value: 9,
        },
       
      },
      {
        label: "Del",
        operation: {
          operator: "del",
        },
       
      },
    ],
    [
      {
        label: "4",
        operation: {
          value: 4,
        },
       
      },
      {
        label: "5",
        operation: {
          value: 5,
        },
       
      },
      {
        label: "6",
        operation: {
          value: 6,
        },
       
      },
      {
        label: "+",
        operation: {
          operator: "+",
        },
       
      },
    ],
    [
      {
        label: "1",
        operation: {
          value: 1,
        },
       
      },
      {
        label: "2",
        operation: {
          value: 2,
        },
       
      },
      {
        label: "3",
        operation: {
          value: 3,
        },
       
      },
      {
        label: "-",
        operation: {
          operator: "-",
        },
       
      },
    ],
    [
      {
        label: ".",
        operation: {
          operator: ".",
        },
       
      },
      {
        label: "0",
        operation: {
          value: 0,
        },
       
      },
      {
        label: "/",
        operation: {
          value: "/",
        },
       
      },
      {
        label: "x",
        operation: {
          operator: "*",
        },
       
      },
    ],
    [
      {
        label: "Reset",
        operation: {
          operator: "reset",
        },
       
      },
      {
        label: "=",
        operation: {
          operator: "=",
        },
       
      },
    ],
  ];
  return (
    <div>
      {buttons.map((row, rowIndex) => (
        <div key={rowIndex} >
          {row.map((button, colIndex) => (
            <Button key={colIndex} label={button.label} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Buttons;
