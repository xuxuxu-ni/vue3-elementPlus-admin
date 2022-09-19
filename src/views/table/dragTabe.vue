<template>
  <el-table :data="tableData" border row-key="id" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import Sortable from 'sortablejs'
import {onMounted} from 'vue'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

onMounted(() => {
  let el = document.querySelectorAll('.el-table__body-wrapper table tbody')[0]

  Sortable.create(el, {
    onEnd: (evt: { oldIndex: any; newIndex: any; }) => { //监听拖动结束事件
      console.log(evt.oldIndex) //当前行的被拖拽前的顺序
      console.log(evt.newIndex) //当前行的被拖拽后的顺序
    }
  })

})

</script>

<style>
  .sortable-ghost{
    opacity: .9;
  }
  .sortable-ghost td{
    border-top: 1px dashed #666666 !important;
    border-bottom: 1px dashed #666666 !important;
    color: #fff!important;
  }
  .sortable-ghost td:first-child{
    border-left: 1px dashed #666666 !important;
  }
  .sortable-ghost td:last-child{
    border-right: 1px dashed #666666 !important;
    border-bottom: 1px dashed #666666 !important;
  }
</style>
<style lang="scss">
p.dragtabe{
  margin-top: 30px;
}
</style>
