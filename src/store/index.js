import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";
import books from "./modules/books";

const store = createStore({
  modules: {
    books,
  },
  plugins: [
    new VuexPersistence({
      key: "my-books",
      modules: ["books"],
    }).plugin,
  ],
});

export default store;
