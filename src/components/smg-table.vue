<script setup>
defineProps({
  data: { type: Array },
})
</script>

<template>
   <el-row>
      <el-col :span="12">文档名称</el-col>
      <el-col :span="6">创建日期</el-col>
      <el-col :span="6">预览</el-col>
    </el-row>
    <el-row v-for="item in data" :key="item.title" class="--el-row-context">
      <el-col :span="12">
        <div class="box"><span>|{{item.title}}</span></div>
      </el-col>
      <el-col :span="6">
        <div class="box"><span>|{{item.name}}</span></div>
      </el-col>
      <el-col :span="6">
        <div class="box"><a>|{{item.address}}</a></div>
      </el-col>
    </el-row>
</template>

<style scoped>
.--el-row-context{
  padding-top: 10px;
  font-size: 25px;
}
.box {
  width: 100%;
  position: relative;
}

span::before {
  content: '';
  height: 4px;
  background: #b2b2b2;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  transition: width 0.36s;
}
span:hover::before {
  width: 100%;
}

a::before {
  content: '';
  height: 4px;
  background: #b2b2b2;
  display: inline-block;
  position: absolute;
  bottom: -6px;
  width: 0;
  transition: width 0.36s;
}

a:hover {
  cursor: pointer;
}
a:hover::before {
  width: 100%;
}
</style>