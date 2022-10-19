import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about",webpackPrefetch: true */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding/string",
    name: "DataBindingStringVue",
    component: () => import(/* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingStringView.vue"),
  },
  {
    path: "/databinding/html",
    name: "DataBindingHtmlVue",
    component: () => import(/* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingHtmlView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
