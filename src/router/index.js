import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import PurchaseView from "../views/PurchaseView.vue";
import CartView from "../views/CartView.vue"

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/purchase',
    component: PurchaseView
  },
  {
    path: '/cart',
    component: CartView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;