import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import HeroList from "../views/HeroList.vue";
import HeroItem from "../views/HeroItem.vue";
import ProductList from '../views/ProductList.vue'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/herolist",
    name: "HeroList",
    component: HeroList,
  },
  {
    path: "/heroitem",
    name: "HeroItem",
    component: HeroItem,
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/product-view",
    name: "ProductView",
    component: ProductView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
