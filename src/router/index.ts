import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactUs from '../components/ContactUs.vue'
import Login from '../views/Login.vue'
import CaseInfo from '../components/CaseInfo.vue'

const routes : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    components:{
      default: HomeView,
      contactUs: ContactUs
    }
  },
  {
    path: '/PatientInfo',
    name: 'PatientInfo',
    components:{
    default: () => import(/* webpackChunkName: "about" */ '../views/PatientInfo.vue'),
    contactUs: ContactUs
    }
  },
  {
    path: '/classicalCase',
    name: 'classicalCase',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/ClassicalCase.vue'),
      contactUs: ContactUs,
      caseInfo: CaseInfo
    }
  },
  {
    path: '/ImageCut',
    name: 'ImageCut',
    component: () => import(/* webpackChunkName: "about" */ '../views/ImageCut.vue')
  },
  {
    path: '/login',
    name: 'login',
    components:{
      default: Login,
      contactUs: ContactUs
    } 
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components:{
      default: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      contactUs: ContactUs
    } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // 检查用户是否已登录，这里假设有一个名为isAuthenticated的变量用于表示登录状态
  const isLogin = localStorage.getItem('isLogin');
  if (requiresAuth && !isLogin) {
    // 如果需要登录但用户未登录，重定向到登录页或其他页面
    next('/login') // 在这里，您可以指定登录页面的路由路径
  } else {
    // 如果不需要登录或用户已登录，允许访问
    next();
  }
})


export default router
