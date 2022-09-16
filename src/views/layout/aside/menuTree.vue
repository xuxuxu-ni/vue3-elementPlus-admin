<template>
    <div>
      <template v-for="(child) in menuData">
        <el-sub-menu v-if="child.children.length > 0" :key="child.path" :index="child.path">
          <template #title>
            <i :class="child.iconCls?child.iconCls:['fa', 'fa-file']"/>
            <span>{{ $t(`routeName.${child.name}`) }}</span>
          </template>
          <menu-tree :menu-data="child.children"/>
        </el-sub-menu>

        <el-menu-item v-else-if="!child.hidden" :key="child.path" :index="child.path">
          <i :class="child.iconCls?child.iconCls:['fa', 'fa-file']"/>
          <span>{{ $t(`routeName.${child.name}`) }}</span>
        </el-menu-item>
      </template>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'MenuTree',
  props: ['menuData']
})
</script>

<style scoped>

</style>
