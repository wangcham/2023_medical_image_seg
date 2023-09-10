<template>
  <div class="container">
    <el-dialog
      v-model="showModal"
      :width="dialogWidth"
      :height="dialogHeight"
      :before-close="handleClose"
      class="myDialog"
    >
      <!-- 右上角的按钮 -->
      <template v-slot:header>
        <span>案例详情</span>
        <el-button
          type="link"
          icon="el-icon-minus"
          @click="minimize"
          class="icon-button"
          ><el-icon class="el-icon-zoom-in"><ZoomOut /></el-icon
        ></el-button>
        <el-button
          type="link"
          icon="el-icon-zoom-in"
          @click="maximize"
          class="icon-button"
          ><el-icon class="el-icon-zoom-in"><ZoomIn /></el-icon
        ></el-button>
        <!-- <el-button type="link" icon="el-icon-close" @click="close"></el-button> -->
      </template>

      <!-- 弹窗内容放在这里 -->
      <div class="mySlot" :style="dialogStyle">
        <slot>
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="dialogImg"
          />
          <div class="dialpgInfo">
            <span>{{ selectedCardData.name }}</span>
            <span>{{ selectedCardData.sex }}</span>
            <span>{{ selectedCardData.age }}岁</span>
            <p>{{ selectedCardData.situation }}</p>
          </div>
        </slot>
      </div>
    </el-dialog>
    <el-scrollbar class="myScrollbar" style="height: 100vh">
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
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
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
import { ref } from "vue";
export default {
  components: { ContactUs },
  name: "ClassicalCase",
  setup() {
    const currentDate = ref(new Date());
    const patients = [
      {
        name: "Celine Ryan",
        sex: "女",
        age: "40",
        situation:
          "检测从Celine的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
      {
        name: "Alex Smith",
        sex: "男",
        age: "50",
        situation:
          "检测从Alex的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
      {
        name: "Jenny Daneil",
        sex: "女",
        age: "30",
        situation:
          "检测从Jenny的肿瘤组织中提取出来的肿瘤浸润淋巴细胞，通过图像分割技术，医生完成手术，9个月后恢复健康",
      },
    ];
    const selectedCardData = ref({name:'',sex:'',age:'',situation:''});
    const handleImageClick = (index: number) => {
      showModal.value = true;
      selectedCardData.value = patients[index];
      console.log(patients[index] === selectedCardData.value);
    };
    //控制dialog
    const showModal = ref(false);
    const dialogWidth = ref("40%"); // 初始宽度
    const dialogHeight = ref("60%"); // 初始高度
    const minimize = () => {
      // 实现最小化逻辑
      dialogWidth.value = "20%";
      dialogHeight.value = "30%";
    };
    const maximize = () => {
      // 实现最大化逻辑
      dialogWidth.value = "100%";
      dialogHeight.value = "100%";
    };
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
      minimize,
      maximize,
      close,
      handleClose,
      selectedCardData,
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
  .icon-button {
    width: 20px; /* 宽度 */
    height: 20px; /* 高度 */
    border: none;
    border-radius: 10%; /* 圆角 */
    background-color: #fff; /* 背景色 */
    cursor: pointer; /* 鼠标移入指针变成小手 */
    margin-right: 10px;
  }

  .icon-button i {
    font-size: 18px; /* 调整图标大小 */
    color: #333; /* 调整图标颜色 */
  }
  .dialogImg {
    max-width: 100%;
    max-height: 100%;
    width: auto; /* 宽度自适应 */
    height: auto; /* 高度自适应 */
  }
  span {
    font-size: 20px;
    font-weight: bold;
    margin-right: 20px;
  }
  .mySlot {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .cutBtn {
      width: 200px;
      height: 50px;
      background-color: #9a9a9a;
      border: none;
      border-radius: 15px;
      color: black;
      font-size: 16px;
      cursor: pointer;
      margin-top: 20px;
    }
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