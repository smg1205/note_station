<script setup>
import SmgTable from "@/components/smg-table.vue";

const tableRowClassName = ({ row, rowIndex }) => {
  if (rowIndex === 1) {
    return 'warning-row';
  } else if (rowIndex === 3) {
    return 'success-row';
  }
  return '';
};

const tableData = [
  {
    title: 'aaa',
    name: '9.10',
    address: 'aaa',
  },
  {
    title: 'bbb',
    name: '10.20',
    address: 'bbb',
  },
  {
    title: 'ccc',
    name: '1.11',
    address: 'ccc',
  },
  {
    title: 'ddd',
    name: '3.13',
    address: 'ddd',
  },
  {
    title: 'aaa',
    name: '9.10',
    address: 'aaa',
  },
  {
    title: 'bbb',
    name: '10.20',
    address: 'bbb',
  },
  {
    title: 'ccc',
    name: '1.11',
    address: 'ccc',
  },
  {
    title: 'ddd',
    name: '3.13',
    address: 'ddd',
  },
  {
    title: 'ccc',
    name: '1.11',
    address: 'ccc',
  },
  {
    title: 'ddd',
    name: '3.13',
    address: 'ddd',
  },
];
// TODO 分页数据筛选
const showTable = computed(()=>{

})
</script>

<template>
  <smg-table :data="tableData"></smg-table>

</template>

<style>

</style>
