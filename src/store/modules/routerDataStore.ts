/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/4/11
 * Description: 文件描述
 */
import {reactive, toRefs} from 'vue'
import { defineStore } from 'pinia'
import router, {defaultRouter, addRouter, IRouter} from '@/router'
import {RouteRecordRaw} from 'vue-router'
interface IrouterDataList {
  routers: RouteRecordRaw[]
  // addRouters: RouteRecordRaw[]
}

export const routerDataStore = defineStore('routerDataStore', () => {
  // let routers = reactive<Array<RouteRecordRaw>>([]) // 每次刷新都要通过token请求个人信息来筛选动态路由
  // let addRouters = reactive<Array<RouteRecordRaw>>([]) // 每次刷新都要通过token请求个人信息来筛选动态路由

  const routerDataList = reactive<IrouterDataList>({
    routers: [],
    // addRouters: []
  })

  function setRouters(routerArr: Array<IRouter>) {

    routerDataList.routers = defaultRouter.concat(routerArr) // 所有有权限的路由表，用来生成菜单列表
    // routerDataList.addRouters = routerArr // 保存动态路由用来addRouter
    routerArr.forEach((item) => {
      router.addRoute(item)
    })

  }


  function newRoutes(role: string) { // 切换角色，测试权限管理
    //  通过递归路由表，删除掉没有权限的路由
    function eachSelect(routers: Array<IRouter>, userRole: string) {
      for (let j = 0; j < routers.length; j++) {
        const role: any = routers[j].meta?.role

        if (role?.length && !role.includes(userRole)) {
          routers.splice(j, 1)
          j = j !== 0 ? j - 1 : j
        }
        if (routers[j].children?.length) {
          eachSelect(routers[j].children!, userRole)
        }
      }
    }
    // 仅限演示
    const newArr: Array<IRouter> = [...addRouter] // 拷贝这个数组是因为做权限测试的时候可以从低级切回到高级角色，仅限演示，正式开发时省略这步直接使用 addRouter

    eachSelect(newArr, role)
    setRouters(newArr)
    // 正式开发
    // eachSelect(addRouter, role)
    // setRouters(addRouter)
  }

  return { ...toRefs(routerDataList), newRoutes }

})
