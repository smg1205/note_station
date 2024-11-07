<script setup>
import {ref} from "vue"
import {ElNotification} from "element-plus";
import {ReqCodeMap} from "@/enums/ReqCodeMap.js";

const LoginOrRegister = ref(true);
const formData = ref({
  userName: "",
  pass: "",
  checkPass: "",
  email: "",
})

function submitForm(){
  const count = 20011;
  // TODO 完善登录逻辑
  const ans = count % 10;
  if(ans === 1){
    ElNotification({
      title: 'Success',
      message: ReqCodeMap[`${count}`],
      type: 'success',
    })
  }else{
    ElNotification({
      title: 'Error',
      message: ReqCodeMap[`${count}`],
      type: 'error',
    })
  }
}
function resetForm(){
  formData.value.userName = "";
  formData.value.pass = "";
  formData.value.checkPass = "";
  formData.value.email = "";
}
function toggleForm(){
  LoginOrRegister.value = !LoginOrRegister.value;
}
</script>


<template>
  <div class="login-view">
    <div class="lr-container">
      <transition name="fade" mode="out-in">
        <div :key="LoginOrRegister" class="lr-module">
          <div v-if="!LoginOrRegister">
            <h2>登录</h2>
            <el-form
                style="max-width: 25vw; min-width: 300px; margin-left: 10px;"
                status-icon
                label-width="auto"
            >
              <el-form-item label="UserName" prop="userName">
                <el-input v-model="formData.userName" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Password" prop="pass">
                <el-input v-model="formData.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Confirm" prop="checkPass">
                <el-input v-model="formData.checkPass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item class="--item-center">
                <el-button type="primary" @click="submitForm()">Submit</el-button>
                <el-button @click="resetForm()">Reset</el-button>
              </el-form-item>
            </el-form>
            <p>还没有账号？<a href="#" @click="toggleForm">注册</a></p>
          </div>

          <div v-if="LoginOrRegister">
            <h2>注册</h2>
            <el-form
                style="max-width: 25vw; min-width: 300px; margin-left: 10px;"
                status-icon
                label-width="auto"
            >
              <el-form-item label="UserName" prop="userName">
                <el-input v-model="formData.userName" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Password" prop="pass">
                <el-input v-model="formData.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Confirm" prop="checkPass">
                <el-input v-model="formData.checkPass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Email" prop="email">
                <el-input v-model="formData.email" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item class="--item-center">
                <el-button type="primary" @click="submitForm()">Submit</el-button>
                <el-button @click="resetForm()">Reset</el-button>
              </el-form-item>
            </el-form>
            <p>已有账号？<a href="#" @click="toggleForm">登录</a></p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>


<style scoped>
.puff-in-center {
  -webkit-animation: puff-in-center 2s cubic-bezier(.47, 0.000, .745, .715) 2s both;
  animation: puff-in-center 2s cubic-bezier(.47, 0.000, .745, .715) 2s both;
}

.puff-out-center{
  -webkit-animation:puff-out-center 1s cubic-bezier(.165,.84,.44,1.000) both;
  animation:puff-out-center 1s cubic-bezier(.165,.84,.44,1.000) both
}

.--item-center {
  align-items: center;
  padding-left: 8vw;
}

.lr-container {
  min-height: 550px;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%;
}

.lr-module {
  border-radius: 5px;
  background-color: #2b2b2b;
  min-height: 350px;
  max-height: 350px;
  border: 1px white solid;
  width: 30vw;
  height: 50vh;
  color: white;
  transition: opacity 0.3s ease;
}

.login-view {
  min-height: 300px;
  position: absolute;
  padding: 0;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

