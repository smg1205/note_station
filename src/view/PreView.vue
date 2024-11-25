<script setup>
import {onMounted, ref, computed} from 'vue'
import {getFileContext} from "@/module/FileGetModule.js";

const props = defineProps({
  fileName: String,
  uuid: String,
})
const getFileData = ref(null);
onMounted(async () => {
  getFileData.value = await getFileContext(props.uuid);
})

const showContext = computed(()=>{return getFileData.value});

</script>

<template>
  <div class="center-cont"><h1>正在预览{{ fileName }}</h1></div>
  <hr/>
  <v-md-preview :text="String(showContext)"></v-md-preview>
</template>

<style scoped>
.center-cont {
  align-items: center;
  text-align: center;
}
</style>