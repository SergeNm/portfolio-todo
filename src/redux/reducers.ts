import {reducer as calcReducer} from "./slices/calcSlice";
import { countriesReducer } from "./slices/countriesSlice";
import { themeReducer } from "./slices/theme";

const reducers = {
  calculator: calcReducer,
  theme: themeReducer,
  countries: countriesReducer
};

export default reducers;
