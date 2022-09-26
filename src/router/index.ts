/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/3/19
 * Description: 文件描述
 */
import {RouteRecordRaw, createRouter, createWebHashHistory} from 'vue-router'

import en from '../i18n/lang/en.js'

import CommonViews from '@/views/CommonViews.vue'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/layout.vue'
import HomeMain from '@/views/index/mainIndex.vue'

// 不是必须加载的组件使用懒加载
const Icon = () => import('@/views/icon/index.vue')
const Erji = () => import('@/views/duoji/erji.vue')
const Erji2 = () => import('@/views/duoji/erji2.vue')
const Sanji = () => import('@/views/duoji/sanji.vue')
const Sanji2 = () => import('@/views/duoji/sanji2.vue')
const Siji = () => import('@/views/duoji/siji.vue')
const Wuji = () => import('@/views/duoji/wuji.vue')
const Transfer = () => import('@/views/transfer/transfer.vue')
const DragTable = () => import('@/views/table/dragTabe.vue')
const Upload = () => import('@/views/upload/upload.vue')
const editorView = () => import('@/views/editor/editorView.vue')
const NotFound = () => import('@/views/page404.vue')
const NavClassify = () => import('@/views/syssetting/navClassify.vue')
const pagePermissions = () => import('@/views/permissions/pagePermissions.vue')
const btnPermissions = () => import('@/views/permissions/btnPermissions.vue')

const routeName = en.routeName

export type IRouter = {
  hidden?: boolean
  iconCls?: string
  alone?: boolean
  children: Array<IRouter>
} & RouteRecordRaw

const defaultRouter: Array<IRouter> = [
  { path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    children: []
  },
  {
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: routeName.home,
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  }
]

const addRouter = [
  {
    path: '/',
    iconCls: 'fa fa-paw', // 图标样式class
    name: routeName.icon,
    component: Layout,
    children: [
      {
        path: '/icon',
        iconCls: 'fa fa-life-ring', // 图标样式class
        name: routeName.builtInIcon,
        component: Icon,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-exchange', // 图标样式class
    name: routeName.shuttleBox,
    component: Layout,
    children: [
      {
        path: '/transfer',
        iconCls: 'fa fa-sign-in', // 图标样式class
        name: routeName.demoShuttle,
        component: Transfer,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-universal-access', // 图标样式class
    name: routeName.permissions,
    component: Layout,
    children: [
      {
        path: '/pagePermissions',
        iconCls: 'fa fa-expeditedssl', // 图标样式class
        name: routeName.pageControl,
        component: pagePermissions,
        children: []
      },
      {
        path: '/btnPermissions',
        iconCls: 'fa fa-toggle-on', // 图标样式class
        name: routeName.btnControl,
        component: btnPermissions,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-newspaper-o', // 图标样式class
    name: routeName.table,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/dragTabe',
        iconCls: 'fa fa-hand-stop-o', // 图标样式class
        name: routeName.dragSort,
        component: DragTable,
        children: []
      }
    ]
  },

  {
    path: '/',
    iconCls: 'fa fa-server',
    name: routeName.multiDirectory,
    component: Layout,
    children: [
      {
        path: '/erji1',
        iconCls: 'fa fa-server',
        name: routeName['menu2-1'],
        component: Erji,
        children: []
      },
      {
        path: '/erji2',
        iconCls: 'fa fa-server',
        name: routeName['menu2-2'],
        component: Erji2,
        children: []
      },
      {
        path: '/erji3',
        iconCls: 'fa fa-server',
        name: routeName['menu2-3'],
        component: CommonViews, // 无限极菜单的容器
        children: [
          {
            path: '/sanji1',
            iconCls: 'fa fa-server',
            name: routeName['menu3-1'],
            component: Sanji,
            children: []
          },
          {
            path: '/sanji2',
            iconCls: 'fa fa-server',
            name: routeName['menu3-2'],
            component: Sanji2,
            children: []
          },
          {
            path: '/sanji3',
            iconCls: 'fa fa-server',
            name: routeName['menu3-3'],
            component: CommonViews,
            children: [
              {
                path: '/siji',
                iconCls: 'fa fa-server',
                name: routeName['menu4-1'],
                component: Siji,
                children: []
              },
              {
                path: '/siji1',
                iconCls: 'fa fa-server',
                name: routeName['menu4-2'],
                component: CommonViews,
                children: [
                  {
                    path: '/wuji',
                    iconCls: 'fa fa-server',
                    name: routeName['menu5-1'],
                    component: Wuji,
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-cloud-upload', // 图标样式class
    name: routeName.upload,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/upload',
        iconCls: 'fa fa-upload', // 图标样式class
        name: routeName.fileUpload,
        component: Upload,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-pencil-square-o', // 图标样式class
    name: routeName.editor,
    component: Layout,
    meta: {role: ['superAdmin', 'admin']},
    children: [
      {
        path: '/editor',
        iconCls: 'fa fa-file-code-o', // 图标样式class
        name: routeName.editor,
        component: editorView,
        children: []
      }
    ]
  },
  {
    path: '/',
    iconCls: 'fa fa-cog', // 图标样式class
    name: routeName.systemSettings,
    component: Layout,
    meta: {role: ['superAdmin']},
    children: [
      {
        path: '/navClassifies',
        iconCls: 'fa fa-th-list', // 图标样式class
        name: routeName.navMenu,
        component: NavClassify,
        children: []
      }
    ]
  },
  { path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true,
    children: []
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouter,
})

export default router
export {defaultRouter, addRouter}
