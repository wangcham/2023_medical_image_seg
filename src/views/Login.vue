<template>
  <div class="container">
    <div class="infoBox">
      <h1>登录</h1>
      <div class="form">
        <el-form :inline="false" :model="formInline" class="myForm">
          <el-form-item>
            <el-input
              placeholder="请输入手机号码"
              v-model="formInline.phonenummber"
              :style="{ width: '400px' }"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              placeholder="请输入密码"
              v-model="formInline.password"
              :style="{ width: '400px' }"
              clearable
            ></el-input>
          </el-form-item>
          <!-- <el-form-item>
            <el-input
              placeholder="请输入短信验证码"
              v-model="formInline.check"
              :style="{ width: '270px', marginRight: '30px' }"
              clearable
            ></el-input>
            <el-button type="primary" @click="onSent">发送验证码</el-button>
          </el-form-item> -->
          <el-form-item>
            <el-button class="myBtn" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="footer">
        <div class="register">注册</div>
        <div class="gun">|</div>
        <div class="forget">忘记密码</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from "@/router";
import axiosInstance from "@/utils";
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "Login",
  setup() {
    const formInline = reactive({
      phonenummber: "",
      password: "",
      // check: "",
    });
    const onSubmit = async () => {
      try {
        // 发送请求
        const res = await axiosInstance.post("/doctor_login",formInline);
        // 请求处理成功后
        if(res.data.status == 'success'){
          // 保存token
          localStorage.setItem("token",res.data.token);
          // 保存用户名
          localStorage.setItem("username",res.data.username);
          console.log("接收到的user是"+res.data.username)
           
          const user = localStorage.getItem("username")
          console.log('本地存储的username是'+user)
          // 跳转到首页
          router.push("/");
        }
        if(res.data.status == 'fail'){
          console.log(res.data.message)
          localStorage.removeItem("token")
        }
      } catch (error) {
        console.log(error);
      }
      console.log("submit!");
    };
    const onSent = async () => {
      console.log("sent!" + formInline.phonenummber);
    };
    return {
      formInline,
      onSubmit,
      onSent,
    };
  },
});
</script>
<style lang="less" scoped>
html,
body {
  height: 100%;
}
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .infoBox {
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    h1 {
      font-size: 40px;
      font-weight: 700;
      margin: 40px auto 50px auto;
    }
    .myForm {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .el-form-item {
        margin-bottom: 20px;
        .el-input {
          width: 300px;
        }
      }
      .myBtn {
        width: 400px;
        color: whitesmoke;
        background-color: #409eff;
        border-radius: 20px;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      align-items: center;
      .register {
        font-size: 15px;
        color: #409eff;
        cursor: pointer;
      }
      .gun {
        font-size: 15px;
        color: #409eff;
        margin: 0 10px;
      }
      .forget {
        font-size: 15px;
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
</style>
