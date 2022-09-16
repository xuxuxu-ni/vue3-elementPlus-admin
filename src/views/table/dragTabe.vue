<template>
  <div>
    <template>
      <el-table
        :data="tableData"
        style="width: 100%;padding-bottom: 3px">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template #default="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <template #reference>
                <div class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template #default="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
// import Sortable from 'sortablejs'
import {defineComponent, onMounted, reactive} from 'vue'
export default defineComponent({
  name: 'DragTabe',
  setup() {
    let tableData = reactive([{
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      tag: '家'
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      tag: '公司'
    }, {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      tag: '家'
    }, {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333,
      tag: '公司'
    }])

    function handleEdit(index, row) {
      console.log(index, row)
    }

    function handleDelete(index, row) {
      console.log(index, row)
    }

    function filterTag(value, row) {
      return row.tag === value
    }

    onMounted(() => {
      let el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]

      // Sortable.create(el)
    })

    return {
      tableData,
      handleEdit,
      handleDelete,
      filterTag
    }
  }
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
