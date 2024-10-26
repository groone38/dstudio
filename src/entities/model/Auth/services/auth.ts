import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "entities/api/api";
import { IAuthState } from "../types/authTypes";

export const internalLogin = createAsyncThunk(
  "auth/authState",
  async (data: IAuthState, thunkAPI) => {
    try {
      const res = await api.internalLoginApi.internalLogin(
        data.email,
        data.password
      );
      localStorage.setItem("token", res.data.accessToken);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
