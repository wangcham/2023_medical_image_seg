<template>
  <el-row :gutter="20" class="navbar">
    <el-col :span="4">
      <div class="ep-bg-purple title">
        <text class="titleText">智医科技</text>
      </div>
      <div class="ep-bg-purple eng">Medical Intelligence</div>
    </el-col>
    <el-col :span="11">
      <div class="grid-content ep-bg-purple"/>
    </el-col>
    <el-col :span="1.5">
      <div class="grid-content ep-bg-purple nav" @click="navigateToHome">首页</div>
    </el-col>
    <el-col :span="1.5">
      <div class="grid-content ep-bg-purple nav" @click="navigateToPatientInfo">病人信息</div>
    </el-col>
    <el-col :span="1.5">
      <div class="grid-content ep-bg-purple nav" @click="navigateToClassicalCase">经典案例</div>
    </el-col>
    <el-col :span="1.5">
      <div class="grid-content ep-bg-purple nav" @click="navigateToImageCut">图像分割</div>
    </el-col>
    <el-col :span="1.5">
      <div class="grid-content ep-bg-purple nav" @click="navigateToAboutView">关于我们</div>
    </el-col>
  </el-row>
  <div class="success" v-if="loginStatus">

  </div>
  <div class="failure" v-else>
    <div class="image">
      <img src="../assets/noPower.png" alt="" class="failureImage">
    </div>
    <div class="text">
      <text>当前无权限，请登陆查看病人信息</text>
    </div>
    <button class="login" @click="navigateToLogin">去登陆</button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

  name: "PatientInfo",
  data() {
    return {
      loginStatus: false
    }
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login')
    },
    navigateToPatientInfo() {
      this.$router.push("/patientInfo");
    },
    navigateToClassicalCase() {
      this.$router.push("/classicalCase");
    },
    navigateToImageCut() {
      this.$router.push("/imageCut");
    },
    navigateToAboutView() {
      this.$router.push("/aboutView");
    },
    navigateToHome() {
      this.$router.push("/");
    },
  }
})
</script>

<style lang="less" scoped>
*, body, html{
  margin: 0;
  padding: 0;
}
.navbar {
  width: 100%;
  height: 100px;
  background-color: #2b86f1;

  .nav:hover {
    color: #1246a0;
    cursor: pointer;
  }

  .title {
    font-size: 30px;
    color: #fff;
    margin-top: 20px;
    margin-left: 20px;

    .titleText {
      font-weight: bold;
      text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black;
    }
  }

  .eng {
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
  }

  .nav {
    font-size: 20px;
    color: #fff;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    height: 100%;
    display: flex; /* 添加Flex布局 */
    align-items: center; /* 让文字垂直居中 */
    margin-top: 0;
  }
}

.failure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 25px;
    color: #7b736c;
    margin-bottom: 20px;
  }

  .image {
    width: 350px;
    height: 293px;
    margin-top: 80px;
    margin-bottom: 10px;

    .failureImage {
      width: 100%;
      height: 100%;
    }
  }
  .login{
    width: 200px;
    height: 50px;
    background-color: #2b86f1;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .login:hover {
    color: #1246a0;
    cursor: pointer;
  }
}
</style>