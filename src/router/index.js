import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import AboutUs from "../views/AboutUs/AboutUs.vue";
import OurMenu from "../views/OurMenu/OurMenu.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/our-menu",
    name: "OurMenu",
    component: OurMenu,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
