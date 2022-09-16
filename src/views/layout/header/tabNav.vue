<template>
  <div>
    <div class="tabnavBox">
      <transition-group name="list" tag="ul">
        <li
v-for="(item, index) in layoutState.layoutData.tabnavBox" :key="item.title"
            class="tabnav" :class="{ active: $route.path === item.path }" @contextmenu.prevent="openMenu(item,$event,index)">
          <router-link :to="item.path">{{ $t(`routeName.${item.title}`) }}</router-link>
          <el-icon v-if="index !== 0" @click="removeTab(item)"><CircleCloseFilled /></el-icon>
        </li>
      </transition-group>
    </div>
    <ul v-show="rightMenuShow" :style="{left:left+'px',top:top+'px'}" class="menuBox">
      <li @click="removeTab(layoutState.layoutData.rightNav)"><i class="fa fa-remove"></i>{{ $t('rightMenu.close') }}</li>
      <li @click="removeOtherTab(layoutState.layoutData.rightNav)">{{ $t('rightMenu.closeOther') }}</li>
      <li @click="removeAllTab(layoutState.layoutData.rightNav)">{{ $t('rightMenu.closeAll') }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import appStore from '@/store'
import { ref, watch } from 'vue'
import {tab, layoutStore} from '@/store/modules/layoutStore'
import {useRouter } from 'vue-router'

const layoutState = layoutStore()
let rightMenuShow = ref(false)
let left = ref(0)
let top = ref(0)
const router = useRouter()

const openMenu = (item: tab, e: any, index: number) => {
  if (index === 0) {
    return false
  }
  rightMenuShow.value = true
  left.value = e.clientX + 10
  top.value = e.clientY
  layoutState.openMenu(item)
}
const removeTab = (tabItem: tab) => {
  layoutState.removeTab({tabItem, router})
}
const removeOtherTab = (tabItem: tab) => {
  layoutState.removeOtherTab({tabItem, router})
}
const removeAllTab = (tabItem: tab) => {
  layoutState.removeOtherTab({tabItem, all: true, router})
}


watch(rightMenuShow, function (value){

  if (value) {
    document.body.addEventListener('click', () => {
      rightMenuShow.value = false
    })
  } else {
    document.body.removeEventListener('click', () => {
      rightMenuShow.value = false
    })
  }

})

</script>
<style>
  .tabnav {
    display: inline-block;
    transition: all 0.5s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);

  }

  .list-enter-active {
    transition: all 0.5s;
  }

  .list-leave-active {
    position: absolute;
    transition: all 1s;
  }
</style>
<style lang="scss">
  $top: top;
  $bottom: bottom;
  $left: left;
  $right: right;
  $leftright: ($left, $right);

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

  .tabnavBox {
    @extend %w100;
    height: 42px;
    min-height: 42px;
    overflow: hidden;
    border-#{$top}: 1px solid #f6f6f6;
    border-#{$bottom}: 1px solid #d8dce5;

    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    ul {
      display: flex;
      justify-content: flex-start;
      padding-#{$left}: 20px;
      flex-wrap: nowrap;
      overflow-x: auto;
      li {
        height: 30px;
        line-height: 31px;
        display: flex;
        align-items: center;
        @extend %cursor;
        margin-#{$top}: 6px;
        margin-#{$right}: 5px;

        border: 1px solid #cccccc;

        overflow: hidden;
        &:not(:first-child) {
          padding-#{$right}: 10px;
          min-width: 80px;
        }
        a {
          @include set-value(padding, 13px);
          display: inline-block;
          @extend %h100;
          font-size: 12px;
          color: #999999;
        }
        &:nth-child(n+2) {
          a {
            padding-#{$right}: 15px;
          }
        }
        i {
          @extend %cursor;
          &:hover {
            color: red;
          }
        }
      }
      li.active {
        background: #409eff;
        color: #ffffff;
        a {
          color: #ffffff;
        }
      }
    }
  }

  .menuBox {
    margin: 0;
    background: #fff;
    z-index: 999;
    position: absolute;
    padding: 5px 0;
    border: 1px solid #cccccc;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .3);
    li {
      margin: 0;
      padding: 7px 16px;
      @extend %cursor;
      &:hover {
        background: #e1e6ea;
      }
    }
  }
</style>
