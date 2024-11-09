<script setup>
import Count from './CountCom.vue';
import ListCom from "@/components/ListCom.vue";

const CountArray = [
  { count: 100, title: 'User Growth Rate' },
  { count: 200, title: 'Sales Growth Rate' },
  { count: 150, title: 'Revenue Growth Rate' },
  { count: 350, title: 'Revenue Growth Rate' },
];
</script>

<template>
  <div class="count-container">
    <Count v-for="item in CountArray" :key="item.title" :count="item.count" :title="item.title" />
  </div>
  <hr class="slow-in">
  <div>
    <ListCom></ListCom>
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

.count-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.count-container > Count {
  flex: 1;
  margin: 10px;
}
</style>
