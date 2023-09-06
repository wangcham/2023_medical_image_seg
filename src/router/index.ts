import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUs from '../components/ContactUs.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,ContactUs
  },
  {
    path: '/PatientInfo',
    name: 'PatientInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/PatientInfo.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
