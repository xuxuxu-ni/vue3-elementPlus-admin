<template>
    <div>
      <h3>基础用法</h3>
      <el-transfer v-model="value" :data="data" />
      <h3>可搜索</h3>
      <p>在数据很多的情况下，可以对数据进行搜索和过滤。</p>
      <el-transfer
          v-model="value"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="State Abbreviations"
          :data="data1"
      />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled?: boolean
  initial?: string
}

const generateData = () => {
  const data: Option[] = []

  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const generateData1 = () => {
  const data: Option[] = []
  const states = [
    'California',
    'Illinois',
    'Maryland',
    'Texas',
    'Florida',
    'Colorado',
    'Connecticut ',
  ]
  const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT']

  states.forEach((city, index) => {
    data.push({
      label: city,
      key: index,
      initial: initials[index],
    })
  })
  return data
}

const data = ref<Option[]>(generateData())
const data1 = ref<Option[]>(generateData1())
const value = ref([])

const filterMethod = (query: string, item: { initial: string }) => {
  return item.initial.toLowerCase().includes(query.toLowerCase())
}

</script>

<style scoped>
h3{
  margin: 55px 0 20px;
  font-weight: 400;
  color: #1f2f3d;
  font-size: 22px;
}
p{
  font-size: 14px;
  color: #5e6d82;
  line-height: 1.5em;
}
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>
