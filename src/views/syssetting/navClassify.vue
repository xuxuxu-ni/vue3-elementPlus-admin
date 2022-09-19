<template>
  <div class="wrap">
    <el-form :model="dynamicValidateForm" ref="formRef" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="indexName"
        label="首页"
        :rules="{
      required: true, message: '分类不能为空', trigger: 'blur'
    }"
      >
        <el-input placeholder="导航名称" v-model="dynamicValidateForm.indexName"></el-input>
        <el-input placeholder="path路径" disabled v-model="dynamicValidateForm.indexHref"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'导航' + (index+1)"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
      >
        <el-input placeholder="导航名称" v-model="domain.name"></el-input>
        <el-input placeholder="path路径" v-model="domain.href"></el-input>
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

import {onMounted, reactive, ref} from 'vue'
import {FormInstance} from 'element-plus'
  const formRef = ref<FormInstance>()

interface DomainItem {
  name: string
  href: string
}

  const dynamicValidateForm = reactive<{
    domains: DomainItem[]
    indexName: string
    indexHref: string
  }>({
    domains: [],
    indexName: "首页",
    indexHref: "/index"
  })

  let oneData = {
    name: dynamicValidateForm.indexName,
    href: dynamicValidateForm.indexHref
  }
      function coppyArray (arr: DomainItem[]) {
        return arr.map((e) => {
          if (typeof e === "object") {
            return Object.assign({}, e)
          } else {
            return e
          }
        })
      }
      let arrdata = coppyArray(dynamicValidateForm.domains)
      arrdata.unshift(oneData)
      let formData = arrdata


    const resetForm = (formName: FormInstance | undefined) =>{
      if (!formName) return
      formName.resetFields()
    }
    const removeDomain = (item: DomainItem) => {
      var index = dynamicValidateForm.domains.indexOf(item)
      if (index !== -1) {
        dynamicValidateForm.domains.splice(index, 1)
      }
    }
    const addDomain = () => {
      dynamicValidateForm.domains.push({
        name: "",
        href: ""
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
