<script setup>
import "@/style/out-in.css"
import {ArrowLeft, UserFilled} from "@element-plus/icons-vue";
import {ElAvatar, ElNotification} from 'element-plus';
import routers from "@/router/routers.js";
import {Logout} from "@/module/LoginStatusCookie.js";

function message(){
  ElNotification({
    title: 'Info',
    message: "退出登录",
    type: 'info',
  });
  Logout();
  routers.push('/');
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <div class="header">
          <el-icon :size="36" class="back-button" @click="()=>{routers.go(-1)}">
            <ArrowLeft />
          </el-icon>

          <el-popover
              placement="bottom"
              trigger="hover"
          >
            <template #reference>
              <span class="user-avatar">
                <el-avatar :icon="UserFilled" />
              </span>
            </template>
            <div  @click="()=>{routers.push('/main/user')}" class="--uu-click">
              进入个人空间 click
            </div>
            <div @click="message" class="--uu-click">
              退出当前登录 click
            </div>
          </el-popover>

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
.--uu-click{
  cursor: pointer;
}
.--uu-click:hover{
  color: #90CAF9;
}
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
