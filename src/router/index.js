import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import AboutUs from "../views/AboutUs/AboutUs.vue";
import OurMenu from "../views/OurMenu/OurMenu.vue";
import BookATable from "../views/BookATable/BookATable.vue";
import Contact from "../views/Contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/o-nas",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/nasze-menu",
    name: "OurMenu",
    component: OurMenu,
  },
  {
    path: "/zarezerwuj",
    name: "BookATable",
    component: BookATable,
  },
  {
    path: "/kontakt",
    name: "Contact",
    component: Contact,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
export default router;
