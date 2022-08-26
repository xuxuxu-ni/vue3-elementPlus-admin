/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/4/11
 * Description: 文件描述
 */
import {defineStore} from 'pinia'
import {reactive} from 'vue'
import {Router} from 'vue-router'

export interface tab {
  path: string
  title: string
}

interface layoutData {
  isCollapse: boolean
  isActive: string
  logoShow: boolean
  uniquerouter: boolean
  rightNav: tab
  tabnavBox: Array<tab>
}

export interface removeTab {
  router: Router
  tabItem: tab
  all?: boolean
}

export const layoutStore = defineStore('layout', () => {
  const layoutData = reactive<layoutData>({
    isCollapse: false,
    isActive: '',
    logoShow: false,
    uniquerouter: true,
    rightNav: {
      title: '',
      path: ''
    },
    tabnavBox: sessionStorage.getItem('addTab') ? JSON.parse(sessionStorage.getItem('addTab')!) : [{
      title: 'home',
      path: '/index'
    }]
  })

  function addTab(navItem: tab){
    layoutData.isActive = navItem.path
    if (layoutData.tabnavBox[0]?.title !== 'home') {
      layoutData.tabnavBox.unshift({
        title: 'home',
        path: '/index'
      })
    }

    for (let i = 0; i < layoutData.tabnavBox.length; i++) {
      if (layoutData.tabnavBox[i].path === navItem.path) {
        return false
      }
    }
    layoutData.tabnavBox.push({
      title: navItem.title,
      path: navItem.path
    })

    sessionStorage.setItem('addTab', JSON.stringify(layoutData.tabnavBox))
  }

  function openMenu(navItem: tab) {
    layoutData.rightNav = navItem
  }

  function removeTab(removeTabDara: removeTab) {
    const index = layoutData.tabnavBox.findIndex(function (value) {
      return value.path === removeTabDara.tabItem.path
    })

    layoutData.tabnavBox.splice(index, 1)
    if (removeTabDara.tabItem.path === removeTabDara.router.currentRoute.value.fullPath) {
      const tabActive = layoutData.tabnavBox[index] || layoutData.tabnavBox[index - 1]

      removeTabDara.router.push(tabActive.path)
    }
    sessionStorage.setItem('addTab', JSON.stringify(layoutData.tabnavBox))
  }

  function removeOtherTab(removeTabDara: removeTab) {
    layoutData.tabnavBox = [{
      title: 'home',
      path: '/index'
    }]
    if (removeTabDara.all) {
      removeTabDara.router.push('/index')
      return false
    }
    layoutData.tabnavBox.push(removeTabDara.tabItem)
    removeTabDara.router.push(removeTabDara.tabItem.path)
    sessionStorage.setItem('addTab', JSON.stringify(layoutData.tabnavBox))
  }

  function collapse () {
    layoutData.isCollapse = !layoutData.isCollapse
    if (layoutData.logoShow) {
      setTimeout(function () {
        layoutData.logoShow = false
      }, 300)
    } else {
      layoutData.logoShow = true
    }
  }

  return {layoutData, addTab, openMenu, removeTab, removeOtherTab, collapse}
})
