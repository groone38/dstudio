import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodos } from "entities/api/todos/TodosTypes";
import { createTodo, getTodo, getTodos, updateTodo } from "../services/todos";
import { TodosSchema } from "../types/todosTypes";

const initialState: TodosSchema = {
  isLoading: false,
  todos: [],
  todo: null,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // Get todos
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getTodos.fulfilled,
      (state, action: PayloadAction<ITodos[]>) => {
        state.isLoading = false;
        state.todos = action.payload;
      }
    );
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });
    // Get todo
    builder.addCase(getTodo.pending, (state) => {
      state.isLoading = true;
      state.todo = null;
    });
    builder.addCase(
      getTodo.fulfilled,
      (state, action: PayloadAction<ITodos>) => {
        state.isLoading = false;
        state.todo = action.payload;
      }
    );
    builder.addCase(getTodo.rejected, (state) => {
      state.isLoading = false;
    });
    // Update todo
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.isLoading = false;
    });
    // Create todo
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: todosAction, reducer: todosReducer } = todosSlice;
