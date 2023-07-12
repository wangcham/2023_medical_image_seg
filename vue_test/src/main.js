import Vue from 'vue'
import App from './App.vue'
// 引入路由
import VueRouter from 'vue-router';

// 引入路由器
import router from './router';

Vue.config.productionTip = false

// 使用路由
Vue.use(VueRouter);

new Vue({
  // 将App组件放入容器中
  render: h => h(App),
  router:router,
}).$mount('#app')
