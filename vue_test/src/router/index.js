// 专门用于创建所有的路由器
import VueRouter from "vue-router";

// 引入组件
import Home from '../pages/Home';
import About from '../pages/About';

// 创建并暴露一个路由器
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path:'/home',
      component:Home
    }
  ]
})