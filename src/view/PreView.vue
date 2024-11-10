<script setup>
import { ref, computed } from 'vue'

const str = ref('# aaaa\n## bbbb\n*ccc*')
const showContext = computed(() => str.value)
defineProps({
  uuid: String
})
</script>

<template>
  <div class="center-cont">
    <h1>正在预览{{uuid}}</h1>
  </div>
  <div>

  </div>
  <v-md-preview :text="String(showContext)"></v-md-preview>
</template>

<style scoped>
.center-cont {
  align-items: center;
  text-align: center;
}
</style>