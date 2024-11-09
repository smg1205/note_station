<template>
  <a-statistic :title="title" :value="count" :value-from="0" animation></a-statistic>
</template>

<script setup>
defineProps({
  count: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  }
});
</script>

<style scoped>
</style>
