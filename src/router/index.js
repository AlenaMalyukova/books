import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import FavoritesView from "@/views/FavoritesView.vue";
import DetailsView from "@/views/DetailsView.vue";
import MainView from "@/views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainView,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: HomeView,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
  {
    path: "/book/:id",
    name: "details",
    component: DetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
