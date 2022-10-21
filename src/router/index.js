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
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingStringView.vue"
      ),
  },
  {
    path: "/databinding/html",
    name: "DataBindingHtmlVue",
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingHtmlView.vue"
      ),
  },
  {
    path: "/databinding/input",
    name: "DataBindingInputVue",
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingInputView.vue"
      ),
  },
  {
    path: "/databinding/select",
    name: "DataBindingSelectVue",
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingSelectView.vue"
      ),
  },
  {
    path: "/databinding/list",
    name: "DataBindingListVue",
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingListView.vue"
      ),
  },
  {
    path: "/databinding/style",
    name: "DataBindingStyleVue",
    component: () =>
      import(
        /* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/databinding/DataBindingStyleView.vue"
      ),
  },
  {
    path: "/event",
    name: "EventVue",
    component: () => import(/* webpackChunkName: "databinding",webpackPrefetch: true */ "../views/event/EventView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
