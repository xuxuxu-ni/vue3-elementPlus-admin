<template>
  <div class="wrap">
    <el-form ref="formRef" :model="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="indexName"
        label="首页"
        :rules="{
      required: true, message: '分类不能为空', trigger: 'blur'
    }"
      >
        <el-input v-model="dynamicValidateForm.indexName" placeholder="导航名称"></el-input>
        <el-input v-model="dynamicValidateForm.indexHref" placeholder="path路径" disabled></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="'导航' + (index+1)"
        :prop="'domains.' + index + '.value'"
      >
        <el-input v-model="domain.name" placeholder="导航名称"></el-input>
        <el-input v-model="domain.href" placeholder="path路径"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('formRef')">提交</el-button>
        <el-button @click="addDomain">新增分类</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">

import {reactive, ref} from 'vue'
import {FormInstance} from 'element-plus'
const formRef = ref<FormInstance>()

  interface DomainItem {
    name: string
    href: string
    key: number
  }

const dynamicValidateForm = reactive<{
    domains: DomainItem[]
    indexName: string
    indexHref: string
    key?: number
  }>({
    domains: [],
    indexName: '首页',
    indexHref: '/index'
  })

let oneData = {
  name: dynamicValidateForm.indexName,
  href: dynamicValidateForm.indexHref,
  key: Date.now()
}

const coppyArray = (arr: DomainItem[]) => {
  return arr.map((e) => {
    if (typeof e === 'object') {
      return Object.assign({}, e)
    }
    return e

  })
}

let arrdata = coppyArray(dynamicValidateForm.domains)

arrdata.unshift(oneData)

const removeDomain = (item: DomainItem) => {
  let index = dynamicValidateForm.domains.indexOf(item)

  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}
const addDomain = () => {
  dynamicValidateForm.domains.push({
    name: '',
    href: '',
    key: Date.now()
  })
}
const submitForm = () => {
  console.log('提交')
}

</script>

<style scoped>

.el-input {
  margin-right: 10px;
  width: 270px;
  vertical-align: top;
}
</style>
