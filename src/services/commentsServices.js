import axios from "axios";

const commentsApi = axios.create({
  baseURL: "https://dummyjson.com/comments/post/",
});

const getRandomPostId = (max) => {
  return Math.round(Math.random() * max);
};

export const getComments = async () => {
  const postId = getRandomPostId(100);
  const { data } = await commentsApi.get(postId.toString());
  return data?.comments;
};