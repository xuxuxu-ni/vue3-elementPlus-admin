/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/4/11
 * Description: 文件描述
 */
import { reactive } from 'vue'
import { defineStore } from 'pinia'
import router from '@/router'
import {routerDataStore} from '@/store/modules/routerDataStore'


interface info {
  permissions: string
  role: string
}

export const roleStore = defineStore('roleStore', () => {
  const info = reactive<info>({
    permissions: '',
    role: ''
  }) // 每次刷新都要通过token请求个人信息来筛选动态路由
  const routerDataState = routerDataStore()

  function getInfo(infoData: object) {
    Object.assign(info, infoData)
    localStorage.setItem('info', JSON.stringify(info))
  }

  function setRole(info: info) { // 切换角色，测试权限管理
    Object.assign(info,info)
    localStorage.setItem('info', JSON.stringify(info))
    routerDataState.newRoutes(info.role)

    // @ts-ignore
    router.addRoute( '', routerDataState.addRouters)
  }

  return { info, getInfo, setRole }

})
