<template>
  <div>
    <el-header id="header">
      <span class="hideAside" @click="collapse"><i class="fa fa-indent fa-lg"></i></span>
      <ul class="personal">
        <li class="fullScreen" @click="fullScreen">
          <el-tooltip class="item" effect="dark" content="全屏" placement="bottom"><i
            class="fa fa-arrows-alt fa-lg"></i></el-tooltip>
        </li>
        <li>
          <langSelect></langSelect>
        </li>
        <li>{{ $t(`role.${roleState.info.role}`) }}</li>
        <li>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              酒一壶_茶一盏<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="info">{{ $t('userDropdownMenu.basicInfor') }}</el-dropdown-item>
                <el-dropdown-item command="editPassword">{{ $t('userDropdownMenu.changePassword') }}</el-dropdown-item>
                <el-dropdown-item command="logout" divided>{{ $t('userDropdownMenu.logout') }}</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
        <li class="icon"><img :src="avatar"/></li>
      </ul>
    </el-header>
    <tabNav></tabNav>
    <user-info v-if="dialogInfoVisible" :title="title" :dialog-visible="dialogInfoVisible" :user-id="userId" @successCallback="successCallback"/>
    <edit-password v-if="dialogPassVisible" :dialog-visible="dialogPassVisible" @editPwdCallback="editPwdCallback"/>
  </div>
</template>

<script setup lang="ts">
import Cookies from 'js-cookie'
import langSelect from '@/components/lang/langSelect.vue'
import tabNav from './tabNav.vue'
import UserInfo from '@/components/userForm/userInfo.vue'
import EditPassword from '@/components/userForm/editPassword.vue'
import {ref} from 'vue'
import {layoutStore} from '@/store/modules/layoutStore'
import {roleStore} from '@/store/modules/roleStore'

const layoutState = layoutStore()
const roleState = roleStore()
let isfullScreen = ref(true)
let avatar = ref('./images/icon.jpg')
let dialogInfoVisible = ref(false)
let dialogPassVisible = ref(false)
let title = ref('')
let userId = ref('')

const collapse = () => {
  layoutState.collapse()
}
const successCallback = () => {
  dialogInfoVisible.value = false
}
const editPwdCallback = () => {
  dialogPassVisible.value = false
}
const fullScreen = () => {
  if (isfullScreen.value) {
    let docElm = document.documentElement

    if (docElm.requestFullscreen) {
      docElm.requestFullscreen()
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen()
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen()
    } else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen()
    }
    isfullScreen.value = false
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
    isfullScreen.value = true
  }
}
const handleCommand = (command: string) => {
  if (command === 'info') {
    dialogInfoVisible.value = true
    title.value = '编辑信息'
    // this.userId = this.$store.getters.info.uid
  } else if (command === 'editPassword') {
    dialogPassVisible.value = true
  } else if (command === 'logout') {
    Cookies.remove('token')
    location.reload()
  }
}

</script>

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

  html, body, #app, .el-container, #asideNav, ul.el-menu {
    @extend %h100;
  }

  @mixin set-value($side, $value) {
    @each $prop in $leftright {
      #{$side}-#{$prop}: $value;
    }
  }

  #header {
    max-height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
    display: flex;
    justify-content: space-between;
    .hideAside {
      @extend %cursor;
    }
    .personal {
      display: flex;
      flex-direction: row;
      li {
        @include set-value(margin, 13px);
        display: flex;
        align-items: center;
        font-size: 12px;
      }
      .fullScreen {
        @extend %cursor;
      }
      .el-dropdown-link {
        @extend %cursor;
      }
      .icon img {
        margin-#{$top}: 7px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        width: 40px;
        height: 40px;
      }
    }
  }
</style>
