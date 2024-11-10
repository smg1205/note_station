<script setup>
import routers from "@/router/routers.js";

defineProps({
  data: { type: Array },
})
function jump(item){
  routers.push(`/main/preview/${item.address}`)
}
</script>

<template>
   <el-row>
      <el-col class="--el-row-header" :span="12">文档名称</el-col>
      <el-col class="--el-row-header" :span="6">创建日期</el-col>
      <el-col class="--el-row-header" :span="6">预览</el-col>
    </el-row>
    <el-row v-for="item in data" :key="item.title" :class="['--el-row-context', item.index % 2 ? 'jishu' : '']" >
      <el-col :span="12">
        <div class="box"><span>|{{item.title}}</span></div>
      </el-col>
      <el-col :span="6">
        <div class="box"><span>|{{item.name}}</span></div>
      </el-col>
      <el-col :span="6">
        <div class="box" @click="jump(item)"><a>|{{item.address}}</a></div>
      </el-col>
    </el-row>
</template>

<style scoped>
.--el-row-header{
  font-size: 20px;
}
.--el-row-context{
  padding-top: 10px;
  font-size: 25px;
}
.box {
  width: 100%;
  position: relative;
}
.jishu{
  background-color: #546E7A;
}
a:hover {
  cursor: pointer;
}
</style>