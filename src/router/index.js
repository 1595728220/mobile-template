import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        meta: { index: 1 }
      },
      {
        path: "/user",
        name: "User",
        component: () => import("../views/User.vue"),
        meta: { index: 4 }
      },
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
    meta: { index: 99 }
  },
  {
    path: "*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;
