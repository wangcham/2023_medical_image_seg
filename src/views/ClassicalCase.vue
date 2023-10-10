<template>
  <div class="container">
    <div class="myDialog" v-if="showModal">
      <div class="mySlot" :style="dialogStyle">
        <case-info :selectedCardData="selectedCardData"></case-info>
      </div>
    </div>
    <el-scrollbar class="myScrollbar" style="height: 100vh" v-if="!showModal">
      <el-row :gutter="20" class="navbar">
        <el-col :span="4">
          <div class="ep-bg-purple title">
            <text class="titleText">智医科技</text>
          </div>
          <div class="ep-bg-purple eng">Medical Intelligence</div>
        </el-col>
        <el-col :span="11">
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
        <div class="middleTitle">
          <div class="bigTitle">经典案例</div>
          <div class="bigTranslate">已通过图像分割技术，成功实现多数方案</div>
        </div>
      </el-row>
      <div class="infoBox">
        <el-row :gutter="20">
          <!-- 用于布局 -->
          <el-col :span="3"></el-col>
          <el-col
            v-for="(patient, index) in patients"
            :key="patient"
            :span="6"
            :offset="index > 0 ? 2 : 0"
            class="son"
          >
            <el-card :body-style="{ padding: '20px' }" shadow="hover">
              <img
                src="../assets/124.png"
                class="image"
              />
              <div style="padding: 14px">
                <span class="spanInfo">{{ patient.name }}</span>
                <span class="spanInfo">{{ patient.sex }}</span>
                <span class="spanInfo">{{ patient.age }}岁</span>
                <div class="bottom">
                  <div class="info">
                    {{ patient.situation }}
                  </div>
                  <el-button
                    text
                    class="infoButton"
                    @click="handleImageClick(index)"
                    >查看详细</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <contact-us></contact-us>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import ContactUs from "@/components/ContactUs.vue";
import CaseInfo from "@/components/CaseInfo.vue";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
export default {
  components: { ContactUs, CaseInfo },
  name: "ClassicalCase",
  setup() {
    const route = useRoute(); // 使用 useRoute 获取当前路由对象
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
    const currentDate = ref(new Date());
    const patients = [
      {
        name: "李梅",
        sex: "女",
        age: "40",
        title: "免疫细胞让直肠癌跟自己说再见",
        infoDetail:
          "2013年9月，她去做结肠镜被诊断为患有三(C)期结直,肠癌。在经历了一段时间的化疗后，她决定尝试免疫疗法。美国国立卫生研究院的科学家们在检测从她的肿瘤组织中提取出来的肿瘤浸润淋巴细胞(TILs) 时，鉴定出了能够识别并攻",
        situation:
          "检测从她的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
      {
        name: "叶和泰",
        sex: "男",
        age: "50",
        title: "免疫细胞让直肠癌跟自己说再见",
        infoDetail:
          "2013年9月，叶和泰去做结肠镜被诊断为患有三(C)期结直,肠癌。在经历了一段时间的化疗后，他决定尝试免疫疗法。国立卫生研究院的科学家们在检测从叶和泰的肿瘤组织中提取出来的肿瘤浸润淋巴细胞(TILs) 时，鉴定出了能够识别并攻",
        situation:
          "检测从Alex的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
      {
        name: "李琴",
        sex: "女",
        age: "30",
        title: "免疫细胞让直肠癌跟自己说再见",
        infoDetail:
          "2013年9月，李琴去做结肠镜被诊断为患有三(C)期结直,肠癌。在经历了一段时间的化疗后，她决定尝试免疫疗法。美国国立卫生研究院的科学家们在检测从的肿瘤组织中提取出来的肿瘤浸润淋巴细胞(TILs) 时，鉴定出了能够识别并攻",
        situation:
          "检测从的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
    ];
    const selectedCardData = ref({
      name: "",
      sex: "",
      age: "",
      situation: "",
      title: "",
      infoDetail: "",
    });
    const handleImageClick = (index: number) => {
      showModal.value = true;
      selectedCardData.value = patients[index];

      console.log(patients[index] === selectedCardData.value);
    };
    //控制dialog
    const showModal = ref(false);
    const dialogWidth = ref("100%"); // 初始宽度
    const dialogHeight = ref("100%"); // 初始高度
    const close = () => {
      showModal.value = false;
      dialogWidth.value = "40%"; // 关闭时恢复默认宽度
      dialogHeight.value = "60%"; // 关闭时恢复默认高度
    };
    const handleClose = (done: () => void) => {
      // 点击右上角关闭按钮时触发
      dialogWidth.value = "40%"; // 关闭时恢复默认宽度
      dialogHeight.value = "60%"; // 关闭时恢复默认高度
      done();
    };
    return {
      currentDate,
      patients,
      handleImageClick,
      showModal,
      dialogWidth,
      dialogHeight,
      close,
      handleClose,
      selectedCardData,
      navigateToLogin,
      navigateToPatientInfo,
      navigateToClassicalCase,
      navigateToImageCut,
      navigateToAboutView,
      navigateToHome,
    };
  },
};
</script>

<style lang= 'less' scoped>
*,
body,
html {
  margin: 0;
  padding: 0;
}
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
.myDialog {
  z-index: 9999 !important;

  .mySlot {
    min-height: 800px;
    min-width: 1000px;
    height: auto;
    width: auto;
  }
}
.navbar {
  width: 100%;
  height: 400px;
  /*背景图片使用D:\CS learning code\Vue项目\medical_image_cutting\src\assets\bgcClasscial.jpg*/
  background-image: url("../assets/bgcClasscial.jpg");
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
.infoBox {
  margin: 50px 80px 50px 80px;
  /* width: 1200px; */
  .spanInfo {
    margin-right: 5px;
  }
  .time {
    font-size: 12px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    .info {
      font-size: 15px;
      /*上下间距5px */
      line-height: 20px;
    }
    .infoButton {
      margin-top: 10px;
      font-size: 15px;
      color: black;
      background-color: #cecece;
      border-radius: 5px;
      padding: 5px 10px;
    }
  }

  .button {
    padding: 0;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
}
</style>