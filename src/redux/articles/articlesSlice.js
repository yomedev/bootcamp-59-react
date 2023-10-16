import { createSlice } from "@reduxjs/toolkit";
import { fetchStatus } from "../../constants/fetchStatus";
import {
  createArticleThunk,
  deleteArticleThunk,
  getArticlesThunk,
} from "./articlesThunk";

const initialState = {
  data: [],
  status: fetchStatus.IDLE,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getArticlesThunk.pending, (state) => {
        state.status = fetchStatus.LOADING;
      })
      .addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        state.data = payload;
      })
      .addCase(getArticlesThunk.rejected, (state) => {
        state.status = fetchStatus.ERROR;
      })
      .addCase(deleteArticleThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        state.data = state.data.filter((article) => article.id !== payload.id);
      })
      .addCase(createArticleThunk.fulfilled, (state, { payload }) => {
        state.status = fetchStatus.SUCCESS;
        // state.data.push(payload);
      });
  },
});

export const articlesReducer = articlesSlice.reducer;
