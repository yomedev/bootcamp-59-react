import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getUserService,
  loginService,
  logoutService,
  registerService,
} from "../../services/usersServices";
import { token } from "../../services/http";
import { selectUserToken } from "./usersSelectors";

export const registerThunk = createAsyncThunk(
  "users/register",
  async (body, { rejectWithValue }) => {
    try {
      const data = await registerService(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);
export const loginThunk = createAsyncThunk(
  "users/login",
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginService(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "users/getUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const tokenValue = selectUserToken(getState());
      if (!tokenValue) {
        return rejectWithValue();
      }
      token.set(tokenValue);
      const data = await getUserService();
      return data;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "users/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logoutService();
      token.unset();
    } catch (error) {
      return rejectWithValue();
    }
  }
);
