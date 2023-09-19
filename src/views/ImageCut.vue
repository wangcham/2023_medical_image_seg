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
        <span>脑部图像信息</span>
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
      </template>

      <!-- 弹窗内容放在这里 -->
      <div class="mySlot" :style="dialogStyle">
        <slot>
          <img src="../assets/mind.jpg" class="dialogImg" />
          <button @click="cut" class="cutBtn">进行分割</button>
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
          <div class="bigTitle">图像分割</div>
          <div class="bigTranslate">
            对不同类型的医学影像数据进行高质量的分割，确定目标之间的关系
          </div>
        </div>
      </el-row>
      <div class="algorithm">
        <div class="left">
          <img src="../assets/algorithmImg.jpg" class="leftImg" />
        </div>
        <div class="right">
          <h2>算法特色</h2>
          <p>
            使用人工智能算法，平台将采用深度学习和Transformer模型和神
            经网络等先进的人工智能算法，用于医学图像分割。这些中引入
            了自注意力机制，该算法经过训练和优化，能够对不同类型的医学影像数据进行高质量的分割。
          </p>
          <div class="advantage">
            <span
              ><el-icon color="#15b7fd"><SuccessFilled /></el-icon
              >本产品算法将利用transformer算法中的自注意力机制，使其不同于传统的神经网络，可
              以更好的采取和利用对于全局信息的利用。
            </span>
            <span
              ><el-icon color="#15b7fd"><SuccessFilled /></el-icon
              >本产品所提出的算法可以更好的应对在不稳定状态下的医学图像分制问题，充分考虑到不
              稳定状态对于医学图像分割的影响，可以在准确程度上进行-定进步，
              实现更精确的准确率。
            </span>
            <span
              ><el-icon color="#15b7fd"><SuccessFilled /></el-icon
              >该算法具有较强的解释性，可以通过一系列可视化方法，直观、明确的看到该算法展示的
              分割效果，该算法在可以与之前算法进行相应比较，更好的展示它在设计上的优越性。
            </span>
          </div>
        </div>
      </div>
      <div class="show">
        <div class="left">
          <span class="demonstration">分割前</span>
          <img class="showImg" src="../assets/behindCut.jpg" />
        </div>
        <div class="right">
          <span class="demonstration">分割后</span>
          <img class="showImg" src="../assets/afterCut.jpg" />
        </div>
      </div>
      <div class="describe">
        <div class="left">
          <h2>Transform算法</h2>
          <p>
            Transformer算法是一种用于自然语言处理(NLP) 和其他序
            列数据处理任务的深度学习模型。
          </p>
          <div class="advantage">
            <span
              ><el-icon color="#15b7fd"><SuccessFilled /></el-icon
              >Transformer算法的核心思想是利用自注意力(Self
              Attention)机制来处理输入
              序列中的不同位置之间的关系，而不是传统的循环神经网络(RNN)
              或卷积神经网络 (CNN)。
            </span>
            <span
              ><el-icon color="#15b7fd"><SuccessFilled /></el-icon
              >自注意力机制允许模型在处理输入时，对输入序列中的所有位置进行加权处理，
              从而能够同时考虑全局和局部的上下文信息。
            </span>
          </div>
        </div>
        <div class="right">
          <img src="../assets/algorithm.png" alt="" />
        </div>
      </div>
      <div class="upLoad">
        <div class="scan" @click="openFileInput">
          <el-icon size="80"><Plus /></el-icon>
          <input
            ref="fileInput"
            type="file"
            class="go-upload-input"
            style="display: none"
            @change="handleFileChange"
          />
        </div>
        <div class="load" @click="upLoad" :disabled="!selectedFile">
          <h1>上传图像</h1>
        </div>
        <p v-if="selectedFile">已选择文件: {{ selectedFile.name }}</p>
        <div v-if="uploadProgress !== null">
          <progress :value="uploadProgress" max="100">
            {{ uploadProgress }}%
          </progress>
        </div>
        <div v-if="uploadError">{{ uploadError }}</div>
        <div v-if="uploadSuccess">{{ uploadSuccess }}</div>
      </div>
      <contact-us></contact-us>
    </el-scrollbar>
  </div>
</template>

<script>
import ContactUs from "@/components/ContactUs.vue";
import CaseInfo from "@/components/CaseInfo.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { post } from "@/utils";
export default {
  name: "ImageCut",
  components: { ContactUs, CaseInfo },
  props: {
    name: { type: String, default: "file" },
    action: {
      type: String,
      required: true,
    },
  },
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
    const selectedFile = ref(null);
    const uploadProgress = ref(null);
    const uploadError = ref(null);
    const uploadSuccess = ref(null);
    const showModal = ref(false);
    const dialogWidth = ref("60%"); // 初始宽度
    const dialogHeight = ref("80%"); // 初始高度

    const openFileInput = () => {
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.click();
      }
    };
    const handleFileChange = (event) => {
      selectedFile.value = event.target.files[0];
    };
    
    const apiUrl = "";
    const requestData = "";
    const upLoad = () => {
      if (selectedFile.value) {
        console.log("selectedFile.value", selectedFile.value.name);
        const formData = new FormData();
        formData.append("file", selectedFile.value);
        post(apiUrl, requestData)
          .then((res) => {
            console.log("成功响应", res);
            uploadSuccess.value = "上传成功！";
            showModal.value = true;
            // 实际应该是再次请求上传的图片，然后返回分割后的图片
          })
          .catch((err) => {
            console.log("响应失败", err);
            uploadError.value = "上传失败，请重试！";
          });
      }
    };
        const minimize = () => {
      // 实现最小化逻辑
      dialogWidth.value = "30%";
      dialogHeight.value = "30%";
    };
    const maximize = () => {
      // 实现最大化逻辑
      dialogWidth.value = "100%";
      dialogHeight.value = "100%";
    };
    const close = () => {
      showModal.value = false;
      dialogWidth.value = "50%"; // 关闭时恢复默认宽度
      dialogHeight.value = "80%"; // 关闭时恢复默认高度
    };

    return {
      navigateToLogin,
      navigateToPatientInfo,
      navigateToClassicalCase,
      navigateToImageCut,
      navigateToAboutView,
      navigateToHome,
      handleFileChange,
      upLoad,
      openFileInput,
      minimize,
      maximize,
      close,
      showModal,
      dialogWidth,
      dialogHeight,
      selectedFile,
      uploadProgress,
      uploadError,
      uploadSuccess,
    };
  },
};
</script>

<style lang='less' scoped>
*,
html,
body {
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
.navbar {
  width: 100%;
  height: 400px;
  background-image: url("../assets/bgcCut.jpg");
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
    width: 500px;
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
  .algorithm {
    padding-top: 50px;
    display: flex;
    width: 1200px;
    height: auto;
    margin: 0 auto;
    text-align: left;

    .leftImg {
      width: 629px;
      height: 403px;
      margin-right: 30px;
    }
    p {
      margin: 22px 0 8px 0;
      color: #71798d;
      font-size: 16px;
      line-height: 24px;
    }
    .advantage {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      color: #9ba0b7;
      font-size: 14px;
      span {
        margin-top: 30px;
      }
    }
  }
  .show {
    display: flex;
    background-color: #efefef;
    justify-content: center;
    align-items: center;
    span {
      font-size: 20px;
      color: black;
      margin-bottom: 20px;
    }
    .left,
    .right {
      display: flex;
      flex-direction: column;
      padding: 10px 20px 10px 40px;
    }
    .left {
      margin-left: 90px;
    }
    .showImg {
      width: 629px;
    }
  }
  .describe {
    display: flex;
    background-color: #fbfbfb;
    position: relative;
    overflow: hidden; /* 隐藏溢出的内容 */
    margin-bottom: 10px;
    .left {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      height: auto;
      text-align: left;
      z-index: 2;
      margin-left: 160px;
      width: 619px;
    }
    .right {
      padding-top: 50px;
      z-index: 2;
      margin-left: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      margin: 22px 0 8px 0;
      color: #71798d;
      font-size: 16px;
      line-height: 24px;
    }
    .advantage {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      color: #9ba0b7;
      font-size: 14px;
      span {
        margin-top: 30px;
      }
    }
  }
  .describe::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#efefef 1px, transparent 1px),
      linear-gradient(90deg, #efefef 1px, transparent 1px); /* 交替设置田字格格子颜色和透明间隔 */
    background-size: 20px 20px; /* 调整格子大小 */
  }
  .upLoad {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #efefef;
    height: 600px;
    .scan {
      width: 500px;
      height: 200px;
      border: 3px dashed #333333;
      display: flex;
      justify-content: center;
      align-items: center;
      .iconPlus {
        width: 80px;
        height: 80px;
      }
    }
    .load {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 20px;
      color: #333333;
    }
  }
}
</style>