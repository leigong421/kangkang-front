import Vue from 'vue'
import Router from 'vue-router'
import HomeA from './views/homeA.vue'

Vue.use(Router)


const constantRoutes = [
    {
        path: "/home",
        component: () => import("@/views/homeA"),

        name: "首页",
        // meta: { title: "首页", icon: "el-icon-s-help" }
    }
]; // 常用路由表




const addRoute = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login")
    },
    {
        path: "/page1",
        name: "page1",
        component: () => import("@/views/page1")
    },
    {
        path: "/page2",
        name: "page2",
        component: () => import("@/views/page2")
    },
    {
        path: "/page3",
        name: "page3",
        component: () => import("@/views/page3")
    },
    {
        path: "/page4",
        name: "page4",
        component: () => import("@/views/page4")
    },
    {
        path: "/page5",
        name: "page5",
        component: () => import("@/views/page5")
    },
    {
        path: "/page6",
        name: "page6",
        component: () => import("@/views/page6/page6.vue")
    },
    {
        path: "/page7",
        name: "page7",
        component: () => import("@/views/page7/page7.vue")
    },
    {
        path: "/page7-copy",
        name: "page7Copy",
        component: () => import("@/views/page7/page7 copy.vue")
    },
    {
        path: "/page8",
        name: "page8",
        component: () => import("@/views/page8/page8.vue")
    },
    {
        path: "/page9",
        name: "page9",
        component: () => import("@/views/page9/page9.vue")
    },
    {
        path: "/page10",
        name: "page10",
        component: () => import("@/views/page10/index.vue")
    },
    {
        path: "/page11",
        name: "page11",
        component: () => import("@/views/page11/index.vue")
    },
]




const createRouter = () =>
    new Router({
        routes: constantRoutes // 这里只有常用路由
    });

const router = createRouter()

let currentRoutes = router.options.routes

let newList=currentRoutes.concat(addRoute)

router.matcher = new Router().matcher 

router.addRoutes(newList);

// console.log(1111, newList);
export default router // 导出路由对象