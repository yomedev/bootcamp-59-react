import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createArticleService,
  deleteArticleService,
  getArticlesService,
} from "../../services/articlesServices";

export const getArticlesThunk = createAsyncThunk("articles/getArticles", () =>
  getArticlesService()
);

export const deleteArticleThunk = createAsyncThunk(
  "articles/deleteArticle",
  (articleId) => deleteArticleService(articleId)
);

export const createArticleThunk = createAsyncThunk(
  "articles/createArticle",
  (body) => createArticleService(body)
);
