import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home/HomeView.vue';
import LoginView from '../views/Login/LoginView.vue';
import RegisterView from '../views/Register/RegisterView.vue';
import TransactionsView from '../views/Transactions/TransactionsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: TransactionsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});
export default router
