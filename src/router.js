import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("./pages/index.vue") },
  { path: "/noticia", component: () => import("./pages/noticia.vue") },
  { path: "/eventos", component: () => import("./pages/eventos.vue") }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
