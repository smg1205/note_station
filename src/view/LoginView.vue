<script setup>
import { ref } from 'vue';
import { ElNotification } from 'element-plus';
import { ReqCodeMap } from '@/enums/ReqCodeMap.js';
import routers from '@/router/routers.js';
import { sleep_s } from '@/module/SleepModule.js';
import {getLoginStatus, Login, Logout} from "@/module/LoginStatusCookie.js";

const LoginOrRegister = ref(false);
const formData = ref({
  userName: '',
  pass: '',
  checkPass: '',
  email: '',
});

function actionPot(val) {
  ElNotification({
    title: 'Info',
    message: ReqCodeMap[`${val}`],
    type: 'info',
  });
}

function validateName(userName) {
  return /^[a-zA-Z]/.test(userName)
      && !/[^a-zA-Z0-9\u4e00-\u9fa5]/.test(userName)
      && userName.length > 4
      && userName.length < 10;
}

function validatePassword(password, checkPass) {
  return password === checkPass;
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

async function submitForm() {
  if (LoginOrRegister.value) {
    if (!validateName(formData.value.userName)) {
      actionPot('80001');
      return;
    }
    if (!validatePassword(formData.value.pass, formData.value.checkPass)) {
      actionPot('80002');
      return;
    }
    if (!validateEmail(formData.value.email)) {
      actionPot('80003');
      return;
    }
  }

  const count = 20001;
  Login();
  console.log(getLoginStatus());
  actionPot(count);

  if (count % 10 === 1) {
    await sleep_s(1).then(() => {
      routers.push('/main/upload');
    });
  }
}

function resetForm() {
  console.log(getLoginStatus())
  formData.value.userName = '';
  formData.value.pass = '';
  formData.value.checkPass = '';
  formData.value.email = '';
}

function toggleForm() {
  LoginOrRegister.value = !LoginOrRegister.value;
}
</script>

<template>
  <div class="login-view">
    <div class="lr-container">
      <transition name="fade" mode="out-in">
        <div :key="LoginOrRegister" class="lr-module">
          <div v-if="LoginOrRegister">
            <h2>注册</h2>
            <el-form
                style="max-width: 25vw; min-width: 300px; margin-left: 10px;"
                label-width="auto"
            >
              <el-form-item label="UserName" prop="userName">
                <el-input placeholder="昵称长度大于五位" v-model="formData.userName" type="text" autocomplete="off" />
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

          <div v-if="!LoginOrRegister">
            <h2>登录</h2>
            <el-form
                style="max-width: 25vw; min-width: 300px; margin-left: 10px;"
                status-icon
                label-width="auto"
            >
              <el-form-item label="UserName" prop="userName" :style="{paddingTop: '20px'}">
                <el-input v-model="formData.userName" type="text" autocomplete="off" />
              </el-form-item>
              <el-form-item label="Password" prop="pass" :style="{paddingTop: '20px'}">
                <el-input v-model="formData.pass" type="password" autocomplete="off" />
              </el-form-item>
              <el-form-item class="--item-center" :style="{paddingTop: '20px'}">
                <el-button type="primary" @click="submitForm()">Submit</el-button>
                <el-button @click="resetForm()">Reset</el-button>
              </el-form-item>
            </el-form>
            <p>还没有账号？<a href="#" @click="toggleForm">注册</a></p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
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
  transition: opacity 1s ease;
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

