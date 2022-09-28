<template>
  <div>
    <el-aside id="asideNav">
      <div class="logo-name">
        <p v-if="layoutState.layoutData.logoShow">XU</p>
        <p v-else>vue-xuAdmin后台模板</p>
      </div>
      <el-menu
          :default-active="$route.path" class="el-menu-vertical"
          :collapse="layoutState.layoutData.isCollapse"
          background-color="#03152A"
          text-color="rgba(255,255,255,.7)"
          active-text-color="#ffffff"
          :router="layoutState.layoutData.uniquerouter"
          :unique-opened="layoutState.layoutData.uniquerouter"
          :collapse-transition="true"
          @select="selectMenu"
      >
        <template v-for="(item,index) in routerDataState.routers">
          <template v-if="!item.hidden">
            <el-sub-menu v-if="!item.alone && item.children.length>0" :key="index" :index="index+''">
              <template #title>
                <i :class="item.iconCls?item.iconCls:['fa', 'fa-server']"></i>
                <span>{{ $t(`routeName.${item.name}`) }}</span>
              </template>

              <menu-tree :menu-data="item.children"></menu-tree>

            </el-sub-menu>
            <el-menu-item v-else :key="item.path" :index="item.path">
              <i :class="item.iconCls?item.iconCls:['fa', 'fa-file']"/>
              <span>{{ $t(`routeName.${item.name}`) }}</span>
            </el-menu-item>
          </template>
        </template>

      </el-menu>
    </el-aside>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import menuTree from './menuTree.vue'

import {defineComponent, watch} from 'vue'
import {layoutStore} from '@/store/modules/layoutStore'
import { routerDataStore } from '@/store/modules/routerDataStore'
const route = useRoute()

const layoutState = layoutStore()
const routerDataState = routerDataStore()
// 监听浏览器直接输入路由，将此路由添加到tabnavBox
watch(() => route.path, (newval) => {
  selectMenu(newval)
})

function selectMenu(key: string, indexpath?: string) {
  // 如果不使用 elemenUI 菜单的 vue-router 的模式将用以下方式进行页面跳转 el-menu的router设置为false
  // router.push(indexpath.join("/"))
  console.log(indexpath)

  let router = routerDataState.routers
  let name = ''
  let navTitle = function (path: string, routerARR: any) {
    for (let i = 0; i < routerARR.length; i++) {
      if (routerARR[i]?.children.length > 0 || routerARR[i].path === path) {
        if (routerARR[i].path === path && routerARR[i].children.length < 1) {
          name = routerARR[i].name
          break
        }
        navTitle(path, routerARR[i].children)
      }
    }
    return name
  }

  layoutState.addTab({
    title: navTitle(key, router),
    path: key
  })

}
</script>

<style lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  %w100 {
    width: 100%;
  }

  %h100 {
    height: 100%;
  }

  %cursor {
    cursor: pointer;
  }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #asideNav {
    width: auto !important;
    display: flex;
    flex-direction: column;
    border-right: solid 1px #e6e6e6;
    .logo-name {
      background-color: #03152A !important;
      @extend %w100;
      font-weight: 300;
      z-index: 999;
      p {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        color: #5e6d82;
      }
    }
    .el-menu-vertical:not(.el-menu--collapse) {
      width: 200px;
      @extend %h100;
      overflow-y: scroll;
      overflow-x: hidden;
    }
    .el-menu {
      flex: 1;
      overflow: inherit;
      border-right: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .fa {
        vertical-align: middle;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
      }
      .el-menu-item {
        background-color: #020f1d !important;
        border-bottom: 1px solid #020f1d;
        &:hover {
          color: #ffffff !important;
          background-color: #375573 !important;
        }
      }
      .el-menu-item.is-active {
        background-color: #56a9ff !important
      }
      .is-opened > .el-submenu__title > .el-icon-arrow-down {
        color: #ffffff;
        font-weight: 500;
        font-size: 18px;
      }
    }

  }
</style>
