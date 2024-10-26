import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { StateSchema } from "../api/types";
import { authReducer } from "entities/model/Auth";
import { todosReducer } from "entities/model/Todos";

export const store = configureStore<StateSchema>({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
