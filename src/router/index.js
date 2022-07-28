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
    path: "/about-us",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/our-menu",
    name: "OurMenu",
    component: OurMenu,
  },
  {
    path: "/book-a-table",
    name: "BookATable",
    component: BookATable,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});
export default router;
