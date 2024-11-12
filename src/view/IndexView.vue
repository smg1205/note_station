<script setup>
import routers from "@/router/routers.js";
import "@/style/center-style.css"
import "@/style/font-pen.css"
import {getLoginStatus} from "@/module/LoginStatusCookie.js";

function goToLogin() {
  console.log(getLoginStatus())
  if(getLoginStatus()){
    routers.push("/main/upload")
  }else{
    routers.push('/login');
  }
}
</script>

<template>
  <div class="center-view">
    <div class="div-h1">欢迎来到<span class="marker-evy">Share</span></div>
    <h1 @click="goToLogin" class="marker-evy">开始旅程</h1>

  </div>
</template>

<style scoped>
.div-h1{
  font-size: 40px;
}
h2 {
  cursor: pointer;
  color: #ad8989;
}
</style>
