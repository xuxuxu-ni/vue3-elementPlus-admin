<template>
  <div>
    <h3 style="margin: 0 0 20px;">切换角色时,查看左侧菜单的变化</h3>
    <el-radio-group v-model="permissions">
      <el-radio label="superAdmin" border>超级管理员</el-radio>
      <el-radio label="admin" border>管理员</el-radio>
      <el-radio label="ordinary" border>普通用户</el-radio>
    </el-radio-group>
    <div style="margin: 50px 0px;">
      [权限:  "{{options.permissions}}",    角色:   "{{options.role}}"]
    </div>
    <h3>需要权限的目录：</h3>
    <p>“表格”：["超级管理员"]</p>
    <p>“上传”：["超级管理员"]</p>
    <p>“编辑器”：["超级管理员", “管理员”’]</p>
    <p>“系统设置”：["超级管理员"]</p>
  </div>
</template>


<script setup lang="ts">
import {info, roleStore} from '@/store/modules/roleStore'
import {layoutStore} from '@/store/modules/layoutStore'
import {onMounted, reactive, ref, watch} from 'vue'
import router from '@/router'

const roleState = roleStore()
const layoutState = layoutStore()
const permissions = ref(roleState.info.role)
let options = reactive<info>({
  role: roleState.info.role,
  permissions: permissions.value
})


onMounted(() => {
  roleState.setRole(options)
})

watch(permissions,(newQuestion) => {
  switch (newQuestion) {
  case 'superAdmin':
    options = Object.assign(options,{
      role: 'superAdmin',
      permissions: '超级管理员'
    })
    break
  case 'admin':
    options = Object.assign(options,{
      role: 'admin',
      permissions: '管理员'
    })
    break
  case 'ordinary':
    options = Object.assign(options,{
      role: 'ordinary',
      permissions: '普通用户'
    })
  }

  roleState.setRole(options)
  //  刷新tabnav   权限管理测试需要
  layoutState.removeOtherTab({
    tabItem: {
      title: 'pageControl',
      path: '/pagePermissions'
    },
    router: router
  })
})
</script>

<style scoped>
p{
  margin: 20px 0px;
}
</style>
