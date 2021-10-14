import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarBrands from "../views/CarBrands.vue";
import AddCarBrand from "../views/AddCarBrand.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/car-brands",
    name: "CarBrands",
    component: CarBrands,
  },
  {
    path: "/add-car-brand",
    name: "AddCarBrand",
    component: AddCarBrand,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
