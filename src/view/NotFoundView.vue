<script setup>
import {WarningFilled} from "@element-plus/icons-vue";

</script>

<template>
  <div class="not-found-view">
    <el-icon color="#64B5F6" size="64"><WarningFilled /></el-icon>
    <h1>404</h1>
    <h1>您当前访问的页面不存在</h1>
  </div>
</template>

<style scoped>
h1{
  color: #64B5F6;
}
.not-found-view {
  padding-top: 10vh;
  text-align: center;
}
</style>