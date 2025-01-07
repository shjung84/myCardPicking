import { createWebHistory, createRouter } from "vue-router";
import Layout from "@/layout/index.vue";
import PageNotFound from "@/views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/MainPage",
    component: Layout,
    children: [
      {
        path: "/MainPage",
        meta: {
          title: "MainPage",
        },
        component: () => import("@/views/MainPage.vue"),
      },
      {
        path: "Rooms",
        component: () => import("@/views/Rooms.vue"),
        meta: {
          title: "Rooms",
        },
        props: true,
      },
      {
        path: "Devices",
        component: () => import("@/views/Devices.vue"),
        meta: {
          title: "Devices",
        },
      },
      {
        path: "Members",
        component: () => import("@/views/Members.vue"),
        meta: {
          title: "Members",
        },
      },
      {
        path: "Logout",
        component: () => import("@/views/Logout.vue"),
        meta: {
          title: "Logout",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
  {
    path: "/404",
    component: PageNotFound,
    meta: {
      title: "PageNotFound",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
