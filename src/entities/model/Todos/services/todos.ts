import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/api";
import { ITodos } from "entities/api/todos/TodosTypes";

export const getTodos = createAsyncThunk(
  "todos/todosState",
  async (_, thunkAPI) => {
    try {
      const res = await api.todosApi.getTodos();

      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getTodo = createAsyncThunk(
  "todo/todosState",
  async (id: string, thunkAPI) => {
    try {
      const res = await api.todosApi.getTodo(id);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "updateTodo/todosState",
  async (data: Omit<ITodos, "createdAt" | "updatedAt">, thunkAPI) => {
    try {
      await api.todosApi.updateTodo(data);

      return "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createTodo = createAsyncThunk(
  "createTodo/todosState",
  async (data: Omit<ITodos, "id" | "createdAt" | "updatedAt">, thunkAPI) => {
    try {
      await api.todosApi.createTodo(data);

      return "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
