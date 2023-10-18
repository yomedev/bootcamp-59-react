import { privateApi, publicApi } from "./http";

export const registerService = async (body) => {
  const { data } = await publicApi.post("users/register", body);
  return data;
};

export const loginService = async (body) => {
  const { data } = await publicApi.post("users/login", body);
  return data;
};

export const logoutService = async () => {
  const { data } = await privateApi.post("users/logout");
  return data;
};

export const getUserService = async () => {
  const { data } = await privateApi.get("users/me");
  return data;
};
