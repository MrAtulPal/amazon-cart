import RoutesPage from "../components/RoutesPage.vue"
import HomePage from "../components/HomePage.vue";
import CartPage from "../components/CartPage.vue";
import SaveForLater from '../components/SaveForLater.vue';
import PageNotFound from '../components/PageNotFound.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: RoutesPage,
    children: [
      { 
        path: 'home', 
        component: HomePage },
      {
        path: 'cart',
        component: CartPage,
      },
      {
        path:'save-for-later',
        component:SaveForLater
      },
      {
        path:'*',
        component:PageNotFound
      }
    ],
  },
  {
    path:'*',
    component:PageNotFound
  }
];

export default routes;
