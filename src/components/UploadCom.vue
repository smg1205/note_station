<script setup>
import {UploadFilled} from "@element-plus/icons-vue";
</script>

<template>
  <el-row>
    <el-col :span="11"><div/></el-col>
    <el-col :span="3"><h1>分享您的文件</h1></el-col>
    <el-col :span="10"><div/></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div/></el-col>
    <el-col :span="12">
      <span class="upload-container">
        <el-icon class="el-icon--upload" :size="208"><upload-filled /></el-icon>
        <br>
          <span class="upload-content">
            拖拽文件或<span class="upload-content-click">点击到此处上传</span>
          </span>
      </span>
    </el-col>
    <el-col :span="6"><div/></el-col>
  </el-row>
</template>

<style scoped>


.upload-content{
  font-size: 20px;
}
.upload-content-click{
  cursor: pointer;
  color: #1bbecb;
}
@keyframes scale-in-top {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transform-origin: 50% 0%;
    transform-origin: 50% 0%;
    opacity: 1;
  }
}


.upload-container {
  display: flex;
  border-radius: 10px;
  width: 50vw;
  height: 30vw;
  min-width: 500px;
  min-height: 300px;
  background-color: #cdcdcd;
  justify-content: center;
  align-items: center;
  animation: scale-in-top 0.5s linear;
}
</style>
