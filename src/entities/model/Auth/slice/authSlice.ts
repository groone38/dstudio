import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/authTypes";
import { internalLogin } from "../services/auth";
import { IInternalLoginResponse } from "entities/api/auth/InternalLoginTypes";

const initialState: AuthSchema = {
  isLoading: false,
  token: null,
};

export const authSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(internalLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      internalLogin.fulfilled,
      (state, action: PayloadAction<IInternalLoginResponse>) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
      }
    );
    builder.addCase(internalLogin.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { actions: authAction, reducer: authReducer } = authSlice;
