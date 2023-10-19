import { publicApi, privateApi } from "./http";

export const getCommentsService = async (articleId) => {
  const { data } = await publicApi.get("comments/" + articleId.toString());
  return data;
};

export const createCommentService = async (body) => {
  const { data } = await privateApi.post("comments", body);
  return data;
};

export const deleteCommentsService = async (articleId) => {
  const { data } = await privateApi.delete("comments/" + articleId.toString());
  return data;
};