<template>
  <div class="container">
    <el-scrollbar class="myScrollbar" style="height: 100vh">
      <el-row :gutter="20" class="navbar">
        <el-col :span="4">
          <div class="ep-bg-purple title">
            <text class="titleText">智医科技</text>
          </div>
          <div class="ep-bg-purple eng">Medical Intelligence</div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="1.5">
          <div class="grid-content ep-bg-purple nav" @click="navigateToHome">
            首页
          </div>
        </el-col>
        <el-col :span="1.5">
          <div
            class="grid-content ep-bg-purple nav"
            @click="navigateToPatientInfo"
          >
            病人信息
          </div>
        </el-col>
        <el-col :span="1.5">
          <div class="grid-content ep-bg-purple nav" @click="navigateToChat">
            在线答诊
          </div>
        </el-col>
        <el-col :span="1.5">
          <div
            class="grid-content ep-bg-purple nav"
            @click="navigateToClassicalCase"
          >
            经典案例
          </div>
        </el-col>
        <el-col :span="1.5">
          <div
            class="grid-content ep-bg-purple nav"
            @click="navigateToImageCut"
          >
            图像分割
          </div>
        </el-col>
        <el-col :span="1.5">
          <div
            class="grid-content ep-bg-purple nav"
            @click="navigateToAboutView"
          >
            关于我们
          </div>
        </el-col>
      </el-row>
      <div class="infoBox">
        <div class="left">
          <div class="card" v-for="(item, index) in MesList" :key="index">
            <img :src="item.headUrl" alt="" srcset="" />
            <img :src="item.headUrl" class="card-image" />
            <div class="card-content">
              <div class="mid">
                <div class="top">
                  <div class="card-title">{{ item.name }}</div>
                  <div class="card-title">{{ item.sex }}</div>
                  <div class="card-title">{{ item.age }}</div>
                </div>
                <div class="card-text">
                  {{ item.info }}
                </div>
              </div>
              <button class="card-button">
                {{ item.status }}
              </button>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <div class="des">
              <h3>病人描述:</h3>
              <text
                >天天头疼，掉头发,睡不好觉，一直持续很久了，是什么怎么回事呢?
                ?</text
              >
            </div>
            <div class="info">
              <h3>病人信息:</h3>
              <text>王白白 男 30岁</text>
            </div>
          </div>
          <div class="mid">
            <div class="doctor">
              <div class="mes">
                <text>这种症状是什么时候开始的呢? 想服用一些药物吗?</text>
              </div>
              <img
                src="../assets/patient.jpg"
                alt=""
                srcset=""
                style="width: 50px; height: 50px; border-radius: 50px"
              />
            </div>
          </div>
        </div>
      </div>
      <contact-us></contact-us>
    </el-scrollbar>
  </div>
</template>
<script lang="ts">
import Vue, { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "ChatView",
  setup() {
    const router = useRouter(); // 使用 useRouter 获取路由实例
    const navigateToLogin = () => {
      router.push("/login");
    };
    const navigateToPatientInfo = () => {
      router.push("/patientInfo");
    };
    const navigateToClassicalCase = () => {
      router.push("/classicalCase");
    };
    const navigateToImageCut = () => {
      router.push("/imageCut");
    };
    const navigateToAboutView = () => {
      router.push("/aboutView");
    };
    const navigateToHome = () => {
      router.push("/");
    };
    const navigateToChat = () => {
      router.push("/chatView");
    };
    const MesList = ref([
      {
        name: "王白白",
        sex: "男",
        age: "20",
        info: "感冒",
        status: "已回复",
        headUrl: "../assets/patient.jpg",
      },
      {
        name: "李德",
        sex: "男",
        age: "60",
        info: "发烧",
        status: "未读",
        headUrl: "../assets/patient.jpg",
      },
      {
        name: "刘东",
        sex: "男",
        age: "20",
        info: "失眠，无法入睡 ",
        status: "已回复",
        headUrl: "../assets/patient.jpg",
      },
    ]);

    return {
      MesList,
      navigateToLogin,
      navigateToPatientInfo,
      navigateToClassicalCase,
      navigateToImageCut,
      navigateToAboutView,
      navigateToHome,
      navigateToChat,
    };
  },
};
</script>
<style lang="less" scoped>
.myScrollbar {
  &::-webkit-scrollbar {
    width: 6px; /* 滚动条宽度 */
    height: 6px; /* 滚动条高度 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块的背景色 */
    border-radius: 3px; /* 滑块的圆角 */
  }
}
.navbar {
  width: 100%;
  height: 90px;
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
    margin-left: 20px;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .item {
    background-color: purple !important;
  }
}
.card {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 40vw;
}
.card-image {
  margin-right: 10px;
  width: 40px;
  height: 40px;
}
.card-content {
  display: flex;
  justify-content: space-between;
}
.mid {
  width: 400px;
}
.card-title {
  font-weight: bold;
  font-size: 18px;
  margin-right: 6px;
}
.card-subtitle {
  color: #555;
  font-size: 14px;
}
.card-text {
  margin-top: 8px;
  text-align: left;
  margin-left: 15px;
  font-size: 13px;
  color: #888;
}
.card-button {
  width: 60px;
  height: 20px;
  margin-top: 10px;
  background-color: #93d2f3;
  border: none;
  border-radius: 20px;
}
.top {
  display: flex;
  align-items: center;
  padding: 10px;
}
.infoBox {
  display: flex;
  .right {
    width: 70vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid darkgray;
    border-left: 1px solid darkgray;
    .top {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .des,
      .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: 100px;
        text{
          margin-left: 20px;
        }
      }
    }
    .mid {
      .doctor {
        display: flex;
        flex-direction: row-reverse;
        .mes {
          width: 300px;
          height: 100px;
          background-color: #fff;
          border-radius: 10px;
          margin-right: 10px;
          //灰色阴影
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          text-align: left;
          padding: 10px;
        }
      }
    }
  }
}
</style>