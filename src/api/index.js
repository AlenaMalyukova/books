import axios from "@/plugins/axios/index.js";

export const getAgent = () => {
  const loadBooks = async () => {
    return await axios({
      method: "GET",
      url: "/",
      params: {
        q: "harry+potter",
        maxResults: 40,
      },
    });
  };

  return {
    loadBooks,
  };
};
