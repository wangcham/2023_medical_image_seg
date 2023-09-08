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
        <div class="searchBar">
          <el-form
              ref="ruleFormRef"
              :model="ruleForm"
              :rules="rules"
              label-width="120px"
              class="block"
          >
            <el-form-item label="创建时间" prop="date" required>
              <el-date-picker
                  v-model="ruleForm.date"
                  type="date"
                  placeholder="请选择时间"
                  style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="病人电话" prop="phoneNum">
              <el-input v-model="ruleForm.phoneNum" placeholder="请输入病人电话" clearable/>
            </el-form-item>
            <el-form-item label="病人姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入病人姓名" clearable/>
            </el-form-item>
          </el-form>
        </div>
        <div class="patientBox">

        </div>
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
      <div class="bottomComponent">
        <contactUs :style="bottomComponentStyle"/>
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import {computed, watchEffect, ref, defineComponent, reactive, watch} from "vue";
import contactUs from "@/components/ContactUs.vue";
import type {FormInstance, FormRules} from 'element-plus'

interface RuleForm {
  name: string
  date: string
  phoneNum: string
}

export default defineComponent({

  name: "PatientInfo",
  components: {
    contactUs
  },
  created() {
    // this.loginStatus = localStorage.getItem("isLogin") === "true"
    console.log("created");
  },
  setup() {
    const loginStatus = ref(true);
    const bottomComponentStyle = computed(() => ({
      position: loginStatus.value ? "fixed" : "relative",
      bottom: loginStatus.value ? "0" : "auto",
      width: "100%",
    }));
    const ruleFormRef = ref<FormInstance>()
    const ruleForm = reactive<RuleForm>({
      name: '',
      date: '',
      phoneNum: '',
    })
    const shortcuts = ref([
      {
        text: "今天",
        value: new Date(),
      },
      {
        text: "昨天",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        },
      },
      {
        text: "一周前",
        value: () => {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          return date;
        },
      },
    ]);
    const rules = reactive<FormRules<RuleForm>>({
      name: [
        {required: true, message: '请输入姓名', trigger: 'blur'},
        {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur'}
      ],
      phoneNum: [
        {required: true, message: '请输入手机号', trigger: 'blur'},
        {min: 11, max: 11, message: '长度为 11 个字符', trigger: 'blur'}
      ],
      date: [
        {required: true, message: '请选择日期', trigger: 'blur'},
      ]
    });
    const handleSearch = (newData: { name: string; date: string; phoneNum: string; }) => {
          console.log(newData);
          console.log('我被调用啦');
          // /*递归判断改变的数据，使用name进行查询*/

        };

    watch(() => ruleForm, (newData, oldData) => {
      console.log(newData, oldData)
      handleSearch(newData);
    }, {deep: true});


    return {
      loginStatus,
      bottomComponentStyle,
      ruleForm,
      shortcuts,
      rules,
      ruleFormRef,
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push('/login')
    },
    navigateToPatientInfo
    () {
      this.$router.push("/patientInfo");
    }
    ,
    navigateToClassicalCase() {
      this.$router.push("/classicalCase");
    }
    ,
    navigateToImageCut() {
      this.$router.push("/imageCut");
    }
    ,
    navigateToAboutView() {
      this.$router.push("/aboutView");
    }
    ,
    navigateToHome() {
      this.$router.push("/");
    }
    ,
  },

})
</script>

<style lang="less" scoped>
*, body, html {
  margin: 0;
  padding: 0;
}

.container {
  position: relative;
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
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
    height: 100%;
    display: flex; /* 添加Flex布局 */
    align-items: center; /* 让文字垂直居中 */
    margin-top: 0;
  }
}

.success {
  margin-bottom: 80px;

  .searchBar {
    margin-top: 20px;

    .block {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 10px;
      }
    }
  }
}

.failure {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;

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

  .login {
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