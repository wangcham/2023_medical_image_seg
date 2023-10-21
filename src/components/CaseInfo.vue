<template>
  <div class="container">
    <el-row :gutter="20" class="navbar">
      <el-col :span="4">
        <div class="ep-bg-purple title">
          <text class="titleText">智医科技</text>
        </div>
        <div class="ep-bg-purple eng">Medical Intelligence</div>
      </el-col>
      <el-col :span="10"></el-col>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple nav" @click="navigateToHome">
          首页
        </div>
      </el-col>
      <el-col :span="2">
        <div
          class="grid-content ep-bg-purple nav"
          @click="navigateToPatientInfo"
        >
          病人信息
        </div>
      </el-col>
      <el-col :span="2">
        <div
          class="grid-content ep-bg-purple nav"
          @click="navigateToClassicalCase"
        >
          经典案例
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple nav" @click="navigateToImageCut">
          图像分割
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content ep-bg-purple nav" @click="navigateToAboutView">
          关于我们
        </div>
      </el-col>
    </el-row>
    <el-breadcrumb
      :separator-icon="ArrowRight"
      style="margin: 18px auto 10px 8px"
    >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/classicalCase' }"
        >经典案例</el-breadcrumb-item
      >
      <el-breadcrumb-item>案例详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <img
        class="image"
        src="../assets/124.png"
        alt=""
      />
    </div>
    <div class="patientText">
      <p class="mytitle">{{ selectedCardData.title }}</p>
      <p class="mydetail">{{ selectedCardData.infoDetail }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
export default defineComponent({
  props: {
    selectedCardData: Object, 
  },
  setup() {
    return {
      ArrowRight,
      
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push("/login");
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
  },
});
</script>

<style lang="less" scoped>
*,
html,
body {
  margin: 0;
  padding: 0;
}

.navbar {
  width: 100%;
  background-color: #135dd8;
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
    margin-bottom: 5px;
  }

  .nav {
    font-size: 20px;
    color: #fff;
    margin-left: 20px;
    cursor: pointer;
    /* height: 100%; */
    display: flex;
    align-items: center;
    margin-top: 35px;
  }

  .item {
    background-color: purple !important;
  }
  .middleTitle {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
    .bigTitle {
      font-size: 45px;
      color: #fff;
      font-weight: bold;
      /* 黑色阴影 */
      text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black;
    }
    .bigTranslate {
      font-size: 16px;
      color: #fff;
      margin-top: 10px;
      font-weight: bold;
    }
  }
}
.container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  .image {
    width: 400px;
    height: 400px;
    margin-top: 20px;
    
  }.patientText{
      width: 500px;
      height: 200px;
      /*和上面图片左对齐 */
      margin-left: 100px;
      text-align: left;

      .mytitle{
            font-size: 20px;
            font-weight: bold;
            margin-top: 20px;
      }
      .mydetail{
            font-size: 15px;
            margin-top: 5px;
      }
    }
}
</style>