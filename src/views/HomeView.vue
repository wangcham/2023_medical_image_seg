<template>
  <el-scrollbar class="myScrollbar" style="height: 100vh">
    <div id="header">
      <el-row class="bar">
        <el-col :span="18">
          <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="1.5" v-if="true">
          <div
            class="login"
            style="display: inline-block; padding-right: 3px"
            @click="navigateToLogin"
          >
            登录
          </div>
          <!--        <div class="space" style="display: inline-block;padding-right: 3px;">|</div>-->
          <!--        <div class="register" style="display: inline-block;">注册</div>-->
        </el-col>
        <!--      /*用于当用户完成登录以后进行身份的显示*/-->
        <el-col :span="1.5" v-if="false">
          <div class="login" style="display: inline-block; padding-right: 3px">
            {{ loginName }}
          </div>
          <div class="space" style="display: inline-block; padding-right: 3px">
            ，已登录
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="navbar">
        <el-col :span="4">
          <div class="ep-bg-purple title">智医科技</div>
          <div class="ep-bg-purple eng">Medical Intelligence</div>
        </el-col>
        <el-col :span="12">
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
      </el-row>
      <el-row :gutter="20" class="bigTitle">
        <el-col :span="10">
          <div class="grid-content ep-bg-purple publicize">
            Medical Intelligence <br />Takes Better Lives
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content ep-bg-purple" />
        </el-col>
      </el-row>
      <el-row :gutter="10" class="">
        <el-col :span="2">
          <div class="grid-content ep-bg-purple" />
        </el-col>
        <el-col :span="3">
          <button class="our">
            <a href="#bottom">
              <text>联系我们</text>
              <el-icon class="ourIcon">
                <Right />
              </el-icon>
            </a>
          </button>
        </el-col>
      </el-row>
    </div>
    <div id="body">
      <div class="middleText">
        <el-text class="introText">产品介绍</el-text>
        <br />
        <div class="blue-explosion"></div>
        <el-text class="smallIntroText">缺失模态下的图像分割技术</el-text>
      </div>
      <div class="productIntro">
        <div class="first">
          <div class="leftOne">
            <img src="../assets/cut.jpg" alt="" class="productImg" />
          </div>
          <div class="rightOne">
            <h3 class="productIntroTitle">{{ FirstTitle }}</h3>
            <p class="productIntroInfo">{{ FirstInfo }}</p>
          </div>
        </div>
        <div class="second">
          <div class="lefTwo">
            <h3 class="productIntroTitle">{{ SecondTitle }}</h3>
            <p class="productIntroInfo">{{ SecondInfo }}</p>
          </div>
          <div class="rightTwo">
            <img src="../assets/challenge.jpeg" alt="" class="productImg" />
          </div>
        </div>
        <div class="third">
          <div class="leftThree">
            <img src="../assets/trend.jpg" alt="" class="productImg" />
          </div>
          <div class="rightThree">
            <h3 class="productIntroTitle">{{ ThirdTitle }}</h3>
            <p class="productIntroInfo">{{ ThirdInfo }}</p>
          </div>
        </div>
      </div>
      <div class="situation">
        <el-text class="introText">应用场景</el-text>
        <br />
        <div class="blue-explosion"></div>
        <div class="situationImage"></div>
      </div>
      <div class="advantage">
        <el-text class="introText">产品优势</el-text>
        <br />
        <div class="blue-explosion"></div>
        <div class="advantageInfo">
          <div class="advantageInfoOne infoBox">
            <div
              class="leftIco"
              style="display: flex; width: 100%; align-items: center"
            >
              <img src="../assets/memeber.png" class="leftIcon" />
              <h3>提高医疗效率</h3>
            </div>
            <div class="info">
              <p>
                智慧科技医疗应用可以大幅提高医疗保健系统的效率。通过数字化病历、在线预约、远程医疗和自动化流程，医院和医生能够更有效地管理患者信息、排队时间和资源分配。这减少了等待时间，提高了患者满意度，减轻了医疗保健专业人员的工作负担。
              </p>
            </div>
          </div>
          <div class="advantageInfoTwo infoBox">
            <div class="leftIco">
              <img src="../assets/structure.png" class="leftIcon" />
              <h3>提供个性化医疗</h3>
            </div>
            <div class="info">
              <p>
                智慧科技应用能够根据患者的特定需求和医疗历史提供个性化医疗服务。通过数据分析和机器学习，这些应用程序可以为患者制定定制的治疗方案、建议和健康管理建议，有助于提高治疗的有效性和患者的生活质量。
              </p>
            </div>
          </div>
          <div class="advantageInfoThree infoBox">
            <div class="leftIco">
              <img src="../assets/time.png" class="leftIcon" />
              <h3>增强医疗预防与检测</h3>
            </div>
            <div class="info">
              <p>
                智慧科技医疗应用能够帮助患者更好地监测他们的健康状况。从智能手表和健康跟踪器到远程医疗设备，这些应用允许患者主动参与健康管理，并实时监测生命体征。这对于早期发现健康问题、提前干预和预防疾病的爆发非常有帮助。
              </p>
            </div>
          </div>
          <div class="advantageInfoFour infoBox">
            <div class="leftIco">
              <img src="../assets/floor.png" class="leftIcon" />
              <h3>全球卫生改善</h3>
            </div>
            <div class="info">
              <p>
                智慧科技医疗应用有望改善全球卫生。通过远程医疗和在线医疗咨询，它们能够跨越地理和资源限制，为那些无法轻松访问医疗保健的地区提供服务。这有助于提高全球卫生水平，减少医疗资源的不平等分配。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a name="bottom"></a>
    <contact-u-s />
    <el-backtop :right="100" :bottom="50" />
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ContactUS from "@/components/ContactUs.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ContactUS,
  },
  setup() {
    const loginName = ref("");
    const FirstTitle = "医学图像分割特色";
    const SecondTitle = "医疗影响诊断的挑战";
    const ThirdTitle = "数据驱动医疗趋势";
    const FirstInfo =
      "本产品专注于医学图像的分割为特色功能，面向医院、医生和病人三方进行医学图像的提取、分割以及图像呈现的功能，并且为病人提供答疑解惑，为医生提供经典案例记录、学习的功能。";
    const SecondInfo =
      "医学影像诊断是医疗过程中的关键环节，然而，人工解读医学影像存在主观性和时间成本较高的问题。通过自动化的图像处理和准确的分割算法。可以提供一种快速、客观且高效的医学影像诊断辅助工具，有助于克服这些挑战。";
    const ThirdInfo =
      "随着医疗数据的不断积累和数字化转型，数据驱动的医疗趋势日益增强。智慧医疗平台能够处理和分析大规模的医学影像数据，并为医学研究和临床决策提供宝贵的数据支持。这对于医学研究人员、医生和医疗机构来说，具有重要的价值和意义。";

    const fetchData = async () => {
      try {
        const value = await localStorage.getItem("username");
        if (value) {
          loginName.value = value; // 更新 userName
        }
      } catch (err) {
        // 当出错时，此处代码运行
        console.error(err);
      }
    };
    onMounted(() => {
      // 获取数据
      fetchData();
    });

    return {
      loginName,
      FirstTitle,
      SecondTitle,
      ThirdTitle,
      FirstInfo,
      SecondInfo,
      ThirdInfo,
      fetchData,
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

.myScrollbar {
  overflow: hidden !important;

  &::-webkit-scrollbar {
    width: 6px; /* 滚动条宽度 */
    height: 6px; /* 滚动条高度 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* 滑块的背景色 */
    border-radius: 3px; /* 滑块的圆角 */
  }
}

a {
  text-decoration: none; /* 去除下划线 */
  color: inherit; /* 使用继承的颜色，保持文本与父元素的颜色一致 */
}

// Header
#header {
  width: 100%;
  height: 560px;
  border: none !important;
  box-sizing: border-box;
  /*背景图片*/
  background-image: url(../assets/homeViewBanner.jpg);
  background-size: cover;
  background-position: center;

  .login:hover,
  .nav:hover {
    color: #1246a0;
    cursor: pointer;
  }

  .el-row {
    margin: 0;
    padding: 0;
    border: none;
  }

  .bar {
    justify-content: space-between;
    color: white;
  }

  .el-row:last-child {
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .bigTitle {
    margin-top: 110px;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 10px;
    font-size: 20px;
  }

  .navbar {
    color: white;
    align-items: center;

    .title {
      text-align: center;
      font-size: 45px;
    }

    .eng {
      text-align: center;
      font-size: 16px;
    }
  }

  .bigTitle {
    color: white;

    .publicize {
      font-size: 45px;
      text-align: center;
      line-height: 1.5;
    }
  }

  .our {
    color: black;
    font-size: 20px;
    font-weight: bold;
    vertical-align: middle;
    /*背景色渐变*/
    background: linear-gradient(to right, #287bed, #35ddff);
    border: 0;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    cursor: pointer;

    .ourIcon {
      font-size: 18px;
      transform: scale(1.5);
      padding-left: 5px;
    }
  }
}

// Body
#body {
  .middleText {
    position: relative;
    margin: 70px 0 30px 0;

    .introText {
      font-size: 40px;
    }

    .smallIntroText {
      font-size: 15px;
      font-style: italic;
      color: #b8860b;
    }

    .blue-explosion {
      width: 60%;
      height: 44px; /* 蓝色扩散的高度 */
      background: radial-gradient(
        ellipse farthest-side at center,
        #2c82ed 0%,
        transparent 50%
      );
      position: absolute;
      bottom: 8px;
      left: 0;
      right: 0; /* 让蓝色扩散横向居中 */
      margin: 0 auto; /* 横向居中文本容器 */
      z-index: -1; /* 确保位于文本的下方 */
    }
  }

  .productIntro {
    .productImg {
      width: 100%;
      height: 300px;
    }

    .productIntroTitle {
      font-size: 18px;
      margin-bottom: 20px;
      margin-top: 20px;
      display: flex;
      margin-left: 5px;
    }

    .productIntroTitle::before {
      content: ""; /* 添加伪元素来创建竖线 */
      display: inline-block;
      width: 6px; /* 竖线宽度 */
      height: 18px; /* 竖线高度与标题字体大小相同 */
      background-color: #2b86f1; /* 竖线颜色 */
      margin-right: 10px; /* 竖线右边的间距 */
      font-weight: bold; /* 标题前的竖线为粗体 */
    }

    .productIntroInfo {
      text-indent: 2em; /* 设置首行缩进为2个em单位，可以根据需要调整缩进距离 */
      text-align: justify;
      font-size: 14px;
      padding: 20px 80px 0px 0px;
      line-height: 1.8;
    }

    .first {
      display: flex;
      flex-direction: row;
      padding: 60px 100px 60px 100px;
      justify-content: center;

      .leftOne {
        width: 30%;
        height: 300px;
        margin-right: 35px;
        background-color: #2c82ed;
      }

      .rightOne {
        width: 30%;
        height: 300px;
        align-items: center;
      }
    }

    .second {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0 100px 60px 100px;

      .lefTwo {
        width: 30%;
        height: 300px;
        margin-right: 35px;
      }

      .rightTwo {
        width: 30%;
        height: 300px;
        background-color: #2c82ed;
      }
    }

    .third {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0 100px 80px 100px;

      .leftThree {
        width: 30%;
        height: 300px;
        margin-right: 35px;
        background-color: #2c82ed;
      }

      .rightThree {
        width: 30%;
        height: 300px;
      }
    }
  }

  .situation {
    position: relative;
    margin: 30px 0 30px 0;

    .introText {
      font-size: 40px;
    }

    .blue-explosion {
      width: 60%;
      height: 44px; /* 蓝色扩散的高度 */
      background: radial-gradient(
        ellipse farthest-side at center,
        #2c82ed 0%,
        transparent 50%
      );
      position: absolute;
      top: 25px;
      bottom: 0;
      left: 0;
      right: 0; /* 让蓝色扩散横向居中 */
      margin: 0 auto; /* 横向居中文本容器 */
      z-index: -1; /* 确保位于文本的下方 */
    }

    .situationImage {
      width: 1340px;
      height: 626px;
      border: none !important;
      box-sizing: border-box;
      /*背景图片*/
      background-image: url(../assets/siuation.jpg);
      background-size: cover;
      background-position: center;
      margin: 0 auto;
    }
  }

  .advantage {
    position: relative;
    margin: 30px 0 30px 0;

    .introText {
      font-size: 40px;
    }

    .blue-explosion {
      width: 60%;
      height: 44px; /* 蓝色扩散的高度 */
      background: radial-gradient(
        ellipse farthest-side at center,
        #2c82ed 0%,
        transparent 50%
      );
      position: absolute;
      top: 25px;
      bottom: 0;
      left: 0;
      right: 0; /* 让蓝色扩散横向居中 */
      margin: 0 auto; /* 横向居中文本容器 */
      z-index: -1; /* 确保位于文本的下方 */
    }

    .advantageInfo {
      display: flex;
      /*上下两行显示，每行2个div盒子*/
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      width: 1340px;

      .infoBox {
        width: 500px;
        height: 180px;
        box-sizing: border-box;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 40px 20px 0 20px;
      }

      .leftIco {
        display: flex;
        width: 100%;
        align-items: center;
      }
      .leftIcon {
        width: 50px;
        height: 50px;
        padding: 10px;
      }
      .info {
        text-align: left;
        padding: 20px;
      }
    }
  }
}
</style>
