import { getAgent } from "@/api";

const books = {
  state: {
    allBooks: [],
    favoriteBooks: [],
  },
  getters: {
    allBooks: (state) => state.allBooks,
    favoriteBooks: (state) => state.favoriteBooks,
  },
  mutations: {
    setAllBooks(state, data) {
      state.allBooks = data;
    },
    addTofavorites(state, book) {
      state.favoriteBooks.push(book);
    },
    deleteFavoritesBook(state, book) {
      const index = state.favoriteBooks.findIndex((el) => el.id === book.id);
      state.favoriteBooks.splice(index, 1);
    },
  },
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
