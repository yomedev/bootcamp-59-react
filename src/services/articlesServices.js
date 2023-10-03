import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
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
