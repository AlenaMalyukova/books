import { getAgent } from "@/api";

const books = {
  state: {
    allBooks: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async loadAllBooks(context) {
      try {
        const agent = getAgent();
        const response = await agent.loadBooks();

        context.commit("setAllBooks", response.items);
      } catch (err) {
        console.log(err);
      }
    },
  },
};

export default books;
