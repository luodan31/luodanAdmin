import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import login from "@/pages/login";
import MainLayout from "@/layout/MainLayout";

const routes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: login
  // },
  {
    path: "/",
    redirect: "/home",
    component: MainLayout,
    children: [
      {
        path: "/home",
        component: MainLayout,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
