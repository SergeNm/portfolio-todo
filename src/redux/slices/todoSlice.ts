import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../../models/models";
import { fetchAllTodos } from "../thunks/todoThunk";

interface TodoState {
  todos: Array<Todo>;
  isLoading: boolean;
  hasError: boolean;
}
const initialState = {
  todos: [],
  isLoading: false,
  hasError: false,
} as TodoState;

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state: TodoState, action: PayloadAction<Todo>) {
      state.todos = [...state.todos, action.payload]
    },
    removeTodo(state: TodoState, action: PayloadAction<Todo>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    editTodo(state: TodoState, action: PayloadAction<Todo>) {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return action.payload
        }
        return todo
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllTodos.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchAllTodos.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.hasError = true;
    });
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;


