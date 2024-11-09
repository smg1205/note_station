<script setup>
import "@/style/out-in.css"
import {ArrowLeft, UserFilled} from "@element-plus/icons-vue";
import { ElAvatar } from 'element-plus';
import routers from "@/router/routers.js";  // 确保引入 el-avatar 组件

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <div class="header">
          <el-icon :size="36" class="back-button" @click="()=>{routers.go(-1)}">
            <ArrowLeft />
          </el-icon>
          <span class="user-avatar" @click="()=>{routers.push('/main/user')}">
            <el-avatar :icon="UserFilled" />
          </span>
        </div>
        <hr class="slow-in">
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
@keyframes slowOutAnimation {
  from{width: 0;}
  to{width: 100%;}
}

.slow-in {
  animation: slowOutAnimation 0.6s ease-out forwards;
}

.header {
  height: 5vh;  /* 头部高度 */
  min-height: 50px;  /* 最小高度 */
  display: flex;  /* 使用 Flexbox 布局 */
  justify-content: space-between;  /* 将内容分布在左右两端 */
  align-items: center;  /* 垂直居中 */
  padding: 0 16px;  /* 给左右两边添加一些内边距，防止元素贴边 */
}

.back-button {
  cursor: pointer;
}

.user-avatar {
  cursor: pointer;
  display: flex;
  justify-content: flex-end;  /* 确保头像位于最右侧 */
}
</style>
