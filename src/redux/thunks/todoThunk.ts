import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Todo } from "../../models/models";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const fetchAllTodos = createAsyncThunk(
    "todo/all",
    async (thunkAPI, { rejectWithValue }) => {
        try {
            const res = await api.get(`/todos`, { params: { _limit: 5 } });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addTodo = createAsyncThunk(
    "todo/add",
    async (title: string, { rejectWithValue }) => {
        try {
            const res = await api.post(`/todos`, { title, completed: false, createdAt: new Date() });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateTodo = createAsyncThunk(
    "todo/update",
    async (todo: Todo, { rejectWithValue }) => {
        try {
            const res = await api.put(`/todos/${todo.id}`, { title: todo.title, completed: todo.completed });
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteTodo = createAsyncThunk(
    "todo/delete",
    async (id: number, { rejectWithValue }) => {
        try {
            const res = await api.delete(`/todos/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
) 