<script setup>
import { ref, computed } from 'vue';
import SmgTable from "@/components/smg-table.vue";
import { CaretLeft, CaretRight } from "@element-plus/icons-vue";

const tableData = ref([
  { title: 'aaa', name: '9.10', address: 'textExampleFile'},
  { title: 'bbb', name: '10.20', address: 'text' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
  { title: 'ddd', name: '3.13', address: 'ddd' },
  { title: 'aaa', name: '9.10', address: 'aaa' },
  { title: 'bbb', name: '10.20', address: 'bbb' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
  { title: 'ddd', name: '3.13', address: 'ddd' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
  { title: 'ddd', name: '3.13', address: 'ddd' },
  { title: 'aaa', name: '9.10', address: 'aaa'},
  { title: 'bbb', name: '10.20', address: 'bbb' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
  { title: 'ddd', name: '3.13', address: 'ddd' },
  { title: 'aaa', name: '9.10', address: 'aaa' },
  { title: 'bbb', name: '10.20', address: 'bbb' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
  { title: 'ddd', name: '3.13', address: 'ddd' },
  { title: 'ccc', name: '1.11', address: 'ccc' },
]);

const itemsPerPage = 13;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(tableData.value.length / itemsPerPage));

const currentPageData = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const ans = tableData.value.slice(startIndex, endIndex);

  return ans.map((item, index) => ({
    ...item,
    index: index + 1
  }));
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value -= 1;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value += 1;
  }
};
</script>

<template>
  <div>
    <smg-table :data="currentPageData" :key="currentPage"></smg-table>
    <div class="pagination">
      <el-icon :size="36" @click="prevPage" :disabled="currentPage === 1"><CaretLeft /></el-icon>
      <span class="pages-count">Page {{ currentPage }} of {{ totalPages }}</span>
      <el-icon :size="36" @click="nextPage" :disabled="currentPage === totalPages"><CaretRight /></el-icon>
    </div>
  </div>
</template>


<style scoped>
.pages-count {
  font-size: 16px;
  padding-top: 10px;
}
.pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 0;
}
</style>
