import RoutesPage from "../components/RoutesPage.vue"
import HomePage from "../components/HomePage.vue";
import CartPage from "../components/CartPage.vue";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: RoutesPage,
    children: [
      { 
        path: 'home', 
        component: HomePage },
      {
        path: 'cart',
        component: CartPage,
      },
    ],
  },
];

export default routes;
