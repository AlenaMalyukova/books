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

  const getBookById = async (id) => {
    return await axios({
      method: "GET",
      url: "/" + id,
      params: {
        country: "RU",
        langRestrict: "ru",
      },
    });
  };

  return {
    loadBooks,
    getBookById,
  };
};
