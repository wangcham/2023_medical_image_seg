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
    <div class="info">
      <h1>公司介绍</h1>
      <div class="info1">
        {{ info1 }}
      </div>
      <div class="info2">
        {{ info2 }}
      </div>
    </div>
    <contact-us></contact-us>
  </div>
</template>
<script lang="ts">
import ContactUs from "@/components/ContactUs.vue";
import { defineComponent } from "vue";
import { ref } from "vue";

export default defineComponent({
  components: { ContactUs },
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
    onSearch() {
      console.log("我被查询啦");
      console.log(this.ruleForm);
    },
  },
  setup() {
    const info1 = ref(
      "智医科技是一家专注于智慧医疗领域的创新科技公司。我们致力于开发和提供基于智慧医疗平台的服务，通过整合医疗数据和先进的医学图像分割算法，为医生和医疗机构提供创新的解决方案。"
    );
    const info2 = ref(
      "作为一家专注于智慧医疗领域的创新科技公司，将利用先进的技术优势和强大的智慧医疗平台，为医疗行业带来创新和突破。我们将不断努力实现可持续发展,并在智慧医疗领域取得更大的影响力和市场份额。"
    );
    return {
      info1,
      info2,
    };
  },
});
</script>

<style lang="less" scoped>
.navbar {
  width: 100%;
  height: 500px;
  background-image: url("../assets/bgcAbout.jpeg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
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
.info {
  font-size: 20px;
  text-align: center;
  width: 800px;
  padding: 50px 100px 50px 100px;
  /*居中显示*/
  margin: 0 auto;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .info1, .info2{
    margin-bottom: 20px;
    text-align: left;
  }
}
</style>
