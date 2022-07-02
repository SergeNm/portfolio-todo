import { themeReducer } from "./slices/theme";
import { todoReducer } from "./slices/todoSlice";

const reducers = {
  theme: themeReducer,
  todos: todoReducer,
};

export default reducers;
