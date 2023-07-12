<template>
  <div>
    <!-- <School></School>
    <Student></Student> -->
    <!-- // 实现路由的切换 -->
    <router-link to="about">About</router-link>
    <router-link to="home">Home</router-link>
    <div>
      <!-- // 指定路由的呈现位置 -->
      <router-view></router-view>
      ?????
    </div>
  </div>
</template>

<script>
// 引入组件
  // import School from './components/School.vue'
  // import Student from './components/Student.vue'
  import Home from './pages/Home.vue';
  import About from './pages/About.vue';

  export default {
    name:'App',
    components:{
      // School,
      // Student
      About,
      Home
    }
  }
</script>

<style>

</style>