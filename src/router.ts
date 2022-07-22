import { createWebHashHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'sbomPackages'
  },
  {
    path: "/sbomDashboard",
    name: "sbomDashboard",
    component: () => import("./components/SbomDashboard.vue"),
  },
  {
    path: "/sbomPackages",
    name: "sbomPackages",
    component: () => import("./components/SbomPackagesList.vue"),
  },
  {
    path: "/sbomTraceChain",
    name: "sbomTraceChain",
    component: () => import("./components/SbomTraceChain.vue"),
  },
  {
    path: "/packageDetails/:id",
    name: "package-details",
    component: () => import("./components/PackagesDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
