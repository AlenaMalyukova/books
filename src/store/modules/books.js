import { getAgent } from "@/api";

const books = {
  state: {
    allBooks: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async loadAllBooks() {
      try {
        const agent = getAgent();
        const res = await agent.loadBooks();

        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default books;
