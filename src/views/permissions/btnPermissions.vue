<template>
  <div style="margin-top: 50px">
    <h3>下面按钮根据当前用户的权限来显示隐藏：</h3>
    <p>当前用户角色： "{{roleState.info.permissions}}"</p>
    <p>没权限按钮：<el-button type="primary" plain size="medium">查看</el-button></p>
    <p>需要 ["管理员"]：<el-button v-role-btn="['admin']" type="primary" plain size="medium">添加</el-button></p>
    <p>需要 ["超级管理员"]：<el-button v-role-btn="['superAdmin']" type="danger" plain size="medium">删除</el-button></p>
    <p>需要 ["超级管理员", "管理员"]：<el-button v-role-btn="['superAdmin','admin']" type="primary" plain size="medium">修改</el-button></p>
  </div>
</template>

<script setup lang="ts">
import {roleStore} from '@/store/modules/roleStore'
const roleState = roleStore()

</script>

<style scoped>
  p{
    margin: 20px 0px;
  }
</style>
