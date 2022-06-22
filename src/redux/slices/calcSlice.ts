import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Operation } from "../../models/models";

export interface State {
  previousValue: number;
  operation?: Operation;
  showValue: Array<number>;
  value: number;
  sign?: string;
}

const calc = (a: number, b: number, op: string) =>
  op === "+" ? a + b : op === "-" ? a - b : b;

const slice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
    showValue: [],
    previousValue: 0,
    sign: ''
  } as State,
  reducers: {
    setValue(state: State, action: PayloadAction<number>) {
      if (state.operation?.operator ) {
        state.showValue = [];
        state.operation.operator = undefined;
      }
      state.showValue = [...state.showValue, action.payload];
    },
    operate(state: State, action: PayloadAction<Operation>) {
      const operation = action.payload;
      if (state.showValue.join("")) {
        state.value = parseInt(state.showValue.join(""));
      }
      switch (operation.operator) {
        case "-":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue - state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.sign = action.payload.operator
          break;
        case "+":
          state.operation = action.payload;
          state.previousValue = state.previousValue
            ? state.previousValue + state.value
            : state.value;
          state.showValue = [state.previousValue];
          state.value = 0;
          state.sign = action.payload.operator
          break;
        case "=":
          state.showValue = [
            calc(state.previousValue, state.value, state.sign!),
          ];
          state.previousValue = 0;
          state.value = 0;
          state.sign = ''
          break;
        case "reset":
          state.value = 0;
          state.previousValue = 0;
          state.showValue = [];
          break;
      }
    },
    // add(state: State, action: PayloadAction<Operation>) {
    //   state.operation = action.payload;
    //   state.value = state.previousValue ?  state.value + state.previousValue : state.value;
    // },
  },
});

export const reducer = slice.reducer;
export const { setValue, operate } = slice.actions;
