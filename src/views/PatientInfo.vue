<template>
  <div class="container">
    <el-dialog
      v-model="showModal"
      :width="dialogWidth"
      :height="dialogHeight"
      :before-close="handleClose"
      class="myDialog"
      destroy-on-close="true"
      title="查看图像"
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
        <!-- <el-button type="link" icon="el-icon-close" @click="close"></el-button> -->
      </template>

      <!-- 弹窗内容放在这里 -->
      <div class="mySlot" :style="dialogStyle" >
        <slot>
          <div style="display:flex;flex-direction:row">
            <img class="dialogImg" :src="oriimage" style="margin-right:10px"/>
            <img class="dialogImg" v-if="checkifseg" :src="switchseg()" />         
          </div>
          <button @click="cut" class="cutBtn" v-if="!checkifseg">进行分割</button>
        </slot>
        <div style="display: flex; align-items: center;margin-top:20px" v-if="!checkifsend">
            <el-input text="textarea" v-model="text" placeholder="欢迎点评" style="margin-right: 10px;" />
            <el-button @click="submittext" type="primary" plain size="medium">  发送点评  </el-button>
        </div>
        <div v-if="checkifsend">
          <p>{{des}}</p>
        </div>
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
          <div
            class="grid-content ep-bg-purple nav"
            @click="navigateToChat"
          >
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
              <el-input
                v-model="ruleForm.phoneNum"
                placeholder="请输入病人电话"
                clearable
              />
            </el-form-item>
            <el-form-item label="病人姓名" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入病人姓名"
                clearable
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="fake()" class="searchBtn"
                >查询</el-button
              >
            </el-form-item>
          </el-form>
        </div>
        <div class="patientBox" v-loading="loading">
          <el-table
            :data="tableData"
            height="400"
            style="width: 100%"
            class="patientTable"
          >
            <el-table-column prop="num" label="序号" width="100" />
            <el-table-column prop="name" label="姓名" width="150" />
            <el-table-column prop="sex" label="性别" width="100" />
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="doctor" label="主治医师" width="150" />
            <el-table-column prop="situation" label="病情" width="180" />
            <el-table-column prop="img" label="脑部图像" width="100">
              <template v-slot="scope">
                <a @click="handleImageClick(scope.row)">查看</a>
              </template>
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="150" />
            <el-table-column prop="status" label="手术情况" width="100" />
          </el-table>
          <el-pagination layout="prev, pager, next" :total="100" />
        </div>
      </div>
      <div class="failure" v-else>
        <div class="image">
          <img src="../assets/noPower.png" alt="" class="failureImage" />
        </div>
        <div class="text">
          <text>当前无权限，请登陆查看病人信息</text>
        </div>
        <button class="login" @click="navigateToLogin">去登陆</button>
      </div>
      <div class="bottomComponent">
        <contactUs :style="bottomComponentStyle" />
      </div>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">

import axios from 'axios';
import {
  computed,
  watchEffect,
  ref,
  defineComponent,
  reactive,
  watch,
  onMounted,
} from "vue";
import contactUs from "@/components/ContactUs.vue";
import { FormInstance, FormRules, ElMessageBox, ElMessage } from "element-plus";
import { TreeOptionsEnum } from 'element-plus/es/components/tree-v2/src/virtual-tree';

interface RuleForm {
  name: string;
  date: string;
  phoneNum: string;
}
interface TableRow {
  num: string;
  name: string;
  sex: string;
  age: string;
  doctor: string;
  situation: string;
  img:string;
  phone: string;
  status: string;
}

export default defineComponent({
  name: "PatientInfo",
  components: {
    contactUs,
  },
  created() {
    

    console.log("created");
  },
  setup() {
    //getpatient info
    onMounted(
      () =>{
        getdata();
        checkiflogin();
      }
    );
    //登陆状态
    const loginStatus = ref(false)
    const checkiflogin = () =>{
      const username = localStorage.getItem("username");
      if(username){
        loginStatus.value = true
      }else{
        loginStatus.value = false
      }
    }

    //send desc
    const checkifsend = ref(false)
    const text = ref('')
    const des = ref('')
    const submittext = async() =>{
      const res = await axios.post(backend_prefix+'/senddesc',{desc:text.value,id:nowid.value})
      if(res.data.status == 'exists'){
        des.value = res.data.desc
      }
      if(res.data.status == 'success'){
        ElMessage.success("成功发送描述")
        checkifsend.value = true
      }else{
        ElMessage.error(res.data.message)
        checkifsend.value = true
      }
    }
    const tableData = ref([])
    const backend_prefix = 'http://localhost:5000'
    const loading = ref(false)
    const fake = () =>{
      ElMessage.error("未查询到结果")
    }
    const oriimage = ref('')
    const segimage = ref('')
    const seg = ref('')
    const getdata = async() =>{
      console.log('调用getdata')
      try{
        loading.value  = true
        const res = await axios.post(backend_prefix+"/getinfo")
        if(res.data.status == 'fail'){
          ElMessage.error(res.data.message)
          loading.value = false
        }else{
          console.log('接收成功')
          const rawData = res.data;
          console.log(rawData)
          const tabledata = rawData.map( (item:any) => (
              {
                num:item.id,
                name:item.name,
                sex:item.sex,
                age:item.age,
                doctor:item.doctor,
                situation:item.status,
                phone:item.telephone,
                img:item.id,
                status:item.surgery,
              }
            )
          );
          tableData.value = tabledata;
          loading.value = false;
        }
      }catch(error){
        console.log(error)
        loading.value = false;
      }finally{
        console.log("finally")
      }

    };

    //结束

    // 控制不同情况下，底部ConcatUs组件的样式
    const bottomComponentStyle = computed(() => ({
      position: loginStatus.value ? "sticky" : "relative",
      top: loginStatus.value ? "0" : "auto",
      width: "100%",
    }));
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive<RuleForm>({
      name: "",
      date: "",
      phoneNum: "",
    });
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
        { required: true, message: "请输入姓名", trigger: "blur" },
        { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" },
      ],
      phoneNum: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        { min: 11, max: 11, message: "长度为 11 个字符", trigger: "blur" },
      ],
      date: [{ required: true, message: "请选择日期", trigger: "blur" }],
    });

    //搜索
    const handleSearch = (newData: {
      name: string;
      date: string;
      phoneNum: string;
    }) => {
      console.log(newData);
      console.log("我被调用啦");
    };
    const showModal = ref(false);
    const dialogWidth = ref("60%"); // 初始宽度
    const dialogHeight = ref("80%"); // 初始高度
    //

    //本质上nowid和imgid都是str类型的后端传来的id值，然后发送时作为username的键值对发送
    
    //查看图片
    const checkifseg = ref(false)
    const nowid = ref('')
    const handleImageClick = async(row: TableRow) => {
      console.log(row);
      nowid.value = row.num
      console.log('nowid:'+nowid.value)
      checkifseg.value = false
      //在这里发axios请求获得图片
      try{
            const formData = new FormData()
            formData.append("username",nowid.value)
            const res = await axios.post(backend_prefix+"/get_info_image",formData,{responseType:'blob'})            
            if(res.data.status == 'fail'){
              ElMessage.error(res.data.message)
            }else{
              let blob  = new Blob([res.data],{type:res.data.type})
              // const reader = new FileReader()
              //  reader.onloadend = () => {
              //   console.log('Reader loaded:', reader.result);
              //   base64image.value = reader.result ? reader.result.toString() : '';
              // };
              // reader.readAsDataURL(blob);
              const url = URL.createObjectURL(blob);
              oriimage.value = url;
              console.log("结果",oriimage.value);
              
              showModal.value = true
            }
          }catch(error){
            console.log(error)
          }finally{
            console.log("finally")
          }
      };

    //分割图片
    const cut = async() =>{
      try{
            ElMessage.warning('图像分割中')
            const res = await axios.post(backend_prefix+"/getseg",{username:nowid.value},{responseType:'blob'})            
            if(res.data.status == 'fail'){
              ElMessage.error(res.data.message)
            }else{
              let blob  = new Blob([res.data],{type:res.data.type})
              const url = URL.createObjectURL(blob)
              console.log("segimage:",url)
              segimage.value = url;
              console.log("获得图片")
              checkifseg.value = true
            }
          }catch(error){
            console.log(error)
          }finally{
            console.log("finally")
          }

    };
      const switchseg = () =>{
        const url = segimage.value
        return url
      }
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
    const handleClose = (done: () => void) => {
      // 点击右上角关闭按钮时触发
      dialogWidth.value = "50%"; // 关闭时恢复默认宽度
      dialogHeight.value = "80%"; // 关闭时恢复默认高度
      done();
    };
    
    watch(
      () => ruleForm,
      (newData, oldData) => {
        console.log(newData, oldData);
        handleSearch(newData);
      },
      { deep: true }
    );

    return {
      loginStatus,
      bottomComponentStyle,
      ruleForm,
      shortcuts,
      rules,
      ruleFormRef,
      tableData,
      handleImageClick,
      showModal,
      dialogWidth,
      dialogHeight,
      minimize,
      maximize,
      close,
      handleClose,
      loading,
      checkifseg,
      nowid,
      segimage,
      oriimage,
      cut,
      seg,
      switchseg,
      fake,
      text,
      submittext,
      checkifsend,
      des,
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
    navigateToChat(){
      this.$router.push("/chatView")
    },
    onSearch() {
      console.log("我被查询啦");
      console.log(this.ruleForm);
      
    },
  },
});
</script>

<style lang="less" scoped>
*,
body,
html {
  margin: 0;
  padding: 0;
}

.container {
  position: relative;
  background-color: #f8f8f8;
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

.success {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .searchBar {
    margin-top: 20px;
    height: 100px;
    width: 1400px;
    background-color: #ffffff;
    border-radius: 20px;
    .block {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 10px;
      }
      .searchBtn {
        background-color: #757575;
        margin-top: 50px;
        width: 100px;
        border-radius: 10px;
        margin-right: 10px;
      }
    }
  }
  .patientBox {
    width: 1400px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .patientTable {
      display: flex;
      align-items: center;
      flex-direction: column;
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