import Vue from "vue";
import Router from "vue-router";
import HomeA from "./views/homeA.vue";

Vue.use(Router);

const constantRoutes = [
  {
    path: "/home",
    component: () => import("@/views/homeA"),

    name: "首页",
    // meta: { title: "首页", icon: "el-icon-s-help" }
  },
]; // 常用路由表

const addRoute = [
  {
    path: "/page9",
    name: "page9",
    component: () => import("@/views/page9/page9.vue"),
  },
  {
    path: "/page10",
    name: "page10",
    component: () => import("@/views/page10/index.vue"),
  },
  {
    path: "/page11",
    name: "page11",
    component: () => import("@/views/page11/index.vue"),
  },
  {
    path: "/page12",
    name: "page12",
    component: () => import("@/views/page12/index.vue"),
  },
];

const createRouter = () =>
  new Router({
    routes: constantRoutes, // 这里只有常用路由
  });

const router = createRouter();

let currentRoutes = router.options.routes;

let newList = currentRoutes.concat(addRoute);

router.matcher = new Router().matcher;

router.addRoutes(newList);

// console.log(1111, newList);
export default router; // 导出路由对象
