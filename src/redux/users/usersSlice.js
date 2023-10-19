import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk, loginThunk, logoutThunk, registerThunk } from "./usersThunk";
import { fetchStatus } from "../../constants/fetchStatus";

const initialState = {
  status: fetchStatus.IDLE,
  token: "",
  data: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.status = fetchStatus.LOADING;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        state.token = payload.token;
        state.data = {
          email: payload.email,
          _id: payload._id,
          name: payload.name,
        };
      })
      .addCase(registerThunk.rejected, (state) => {
        state.status = fetchStatus.ERROR;
      })
      .addCase(loginThunk.pending, (state) => {
        state.status = fetchStatus.LOADING;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        state.token = payload.token;
        state.data = {
          email: payload.email,
          id: payload._id,
          name: payload.name,
        };
      })
      .addCase(loginThunk.rejected, (state) => {
        state.status = fetchStatus.ERROR;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        state.data = payload;
      })
      .addCase(getUserThunk.rejected, () => initialState)
      .addCase(logoutThunk.fulfilled, () => initialState)
  },
});

export const usersReducer = usersSlice.reducer;
