<script lang="ts">
import {reactive, ref, defineComponent, h, onMounted} from 'vue'
import {ElMessage, ElNotification} from 'element-plus/es'
import {store} from '@/store'
import router from '@/router'
// import api from '@/api'

export default defineComponent({
  name: 'LOGIN',
  setup() {
    let storeData = store()
    let smdl = ref(true)
    let loginForm = reactive({
      username: 'admin',
      password: '123456'
    })

    let submitForm = () => {
      if (loginForm.username === '' || loginForm.password === '') {
        ElMessage({
          showClose: true,
          message: '账号或密码不能为空',
          type: 'error'
        })
        return false
      }
      // 真实请求参考案例
      // api.login.fetchLogin({
      //   username: loginForm.username,
      //   password: loginForm.password
      // }).then((res: { data: { access_token: any } }) => {
      //   storeData.setToken(res.data.access_token).then(() => {
      //     router.push({path: '/'})
      //   }).catch(res => {
      //     ElMessage({
      //       showClose: true,
      //       message: res,
      //       type: 'error'
      //     })
      // }).catch((err: any) => {
      //   console.log(err)
      // })

      // 将 username 设置为 token 存储在 store，仅为测试效果，实际存储的 token 以后台返回为准
      storeData.setToken(loginForm.username).then(() => {
        router.push({path: '/'})
      }).catch(res => {
        ElMessage({
          showClose: true,
          message: res,
          type: 'error'
        })
      })

    }
    let message = () => {
      ElNotification({
        title: '账号密码',
        message: h('i', {style: 'color: teal'}, '账号密码可以随意填写，为了测试效果填写的账号将会被存储为临时假 token'),
        duration: 6000
      })
    }

    onMounted(() => {
      message()
    })

    return {
      smdl,
      loginForm,
      submitForm
    }
  }
})


</script>

<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
        <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">vue-xuadmin权限管理后台模板</p>
          <p class="title">前台: vue + element-ui</p>
          <el-card v-if="smdl" shadow="always" class="login-module">
            <template #header>
              <div class="card-header clearfix formTitlt">
                <span>密码登录</span>
                  <span class="titIconbox">
                  <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
                  <i class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
                </span>
              </div>
            </template>
            <el-form :model="loginForm" status-icon class="demo-ruleForm">
              <el-form-item>
                <el-input v-model="loginForm.username" type="text" size="large" auto-complete="off" placeholder="请输入登录账号"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
v-model="loginForm.password" type="password" size="large" auto-complete="off"
                          placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" size="large" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>

          <el-card v-else shadow="always" class="login-module">
            <div class="clearfix formTitlt">
              <span>扫码登录</span>
              <span class="titIconbox">
              <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
              <i class="iconfont xu-imagevector el-icon--right fa-lg pointer" @click="smdl = !smdl"></i>
            </span>
            </div>
            <div class="ewmbox">
              <div class="ewm">
                <img src="https://img.alicdn.com/tfscom/TB1ivYYyHvpK1RjSZFqwu3XUVXa.png">
              </div>
              <div class="ewmicon">
                <i class="iconfont xu-saomadenglu fa-2x iconcolor"></i>
                <p>打开 微信 扫一扫登录</p>
              </div>
              <p class="smalltxt">
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .loginConbox{
    background: #2d3a4b;
  }
  .header {
    height: 60px;
    position: relative;
    background: #2d3a4b;
    /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
    .logo{
      margin-left: 30px;
      width: 500px;
      float: left;
      height: 40px;
      padding-top: 10px;
      img{
        height: 100%;
      }
    }
  }

  .loginBox {
    .iconcolor {
      color: #409EFF;
    }

    padding: 74px 0 118px;

    .loginCon {
      width: 990px;
      margin: auto;
      position: relative;
      height: 388px;

      .el-card__header {
        border-bottom: 0px;
      }
      .title{
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        width: 500px;
        float: left;
        margin-top: 0px;
        &:first-child{
          font-size: 34px;
          margin-top: 50px;
          margin-bottom: 30px;
        }
      }
      .login-module {
        width: 380px;
        height: 325px;
        margin-top: 60px;
        border: none;
        position: absolute;
        right: 0;

        .formTitlt {
          font-size: 18px;
          font-weight: 400;

          .titIconbox {
            float: right;

            .pointer {
              cursor: pointer;
            }
          }
        }

        .smalltxt {
          text-align: right;

          .a {
            text-decoration: none;
            color: #999999;
            font-size: 12px;
            margin-left: 8px;
          }
        }
      }

      .el-form-item {
        margin-bottom: 22px !important;
      }

      .el-form-item__content {
        margin-left: 0px !important;

        .subBtn {
          width: 100%;
        }
      }
    }

    .el-input__inner, .el-button, .el-card, .el-message {
      border-radius: 0px !important;
    }

    .el-form-item__content .ico {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      width: 40px;
      height: 39px;
      text-align: center;
      border-right: 1px solid #ccc;
    }

    .ewmbox {
      width: 100%;
      height: 240px;
      .ewm {
        width: 140px;
        height: 140px;
        margin: 20px auto;

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }

      .ewmicon {
        width: 140px;
        margin: 29px auto 0;

        .iconfont {
          float: left;
        }

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }
    }
  }
}
</style>
