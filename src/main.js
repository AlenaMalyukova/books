import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/modules/books";
import axios from "./plugins/axios/index.js";

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(store).use(router).mount("#app");
