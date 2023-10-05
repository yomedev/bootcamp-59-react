import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "81a8a03a925b4f9598b82021fed677f7",
  pageSize: 6,
  searchIn: "title",
};

export const getArticlesService = async (query, page) => {
  const { data } = await axios.get("everything", {
    params: {
      q: query || "bitcoin",
      page,
    },
  });
  return data;
};
