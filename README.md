<h1 align="center">Welcome to vue3-elementplus-admin 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2012.0.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-%3E%3D%206.0.0-blue.svg" />
  <a href="https://github.com/xuxuxu-ni/vue3-elementPlus-admin/blob/master/README.md">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/xuxuxu-ni/vue3-elementplus-admin/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> vite + vue3 + Pinia + elementUi-plus 无限级菜单 权限管理 后台模板

### 🏠 [Homepage](https://xuxuxu-ni.github.io/vue3-elementPlus-admin/#/index)
## Author

👤 **xuxuxu-ni**

* Github: [@xuxuxu-ni](https://github.com/xuxuxu-ni)
* QQ: 595485548
* QQ群: 157216616
* email: 595485548@qq.com


## Prerequisites

- node >= 12.0.0
- npm >= 6.0.0

## Tips
### 当前框架技术栈: vit2 + vue3 + Pinia + typescript
### vue2版本地址: https://github.com/xuxuxu-ni/vue-xuAdmin
> 这个框架权限是由前端控制的,如果不需要这个模式,可以看我另外一个全栈CMS项目,后台使用的是node框架egg.js+mysql,那个的权限是由后台返回有权限的路由,前端拿到路由后和前端路由表做筛选,得出最终的路由表生成菜单,好处是角色和角色所拥有的权限路由是动态的后台可随时编辑配置,两种模式按需使用
![image.png](https://i.loli.net/2020/05/13/67n2YkZwxLBFDMy.png)

项目地址: https://github.com/xuxuxu-ni/nodePlatform-eggjs
## 1. vue3-elementplus-admin 后台模板简介
> 这个权限管理就是为了方便,跟系统安全真的不沾边，只是根据后台返回的角色信息来生成他可以看见的菜单和按钮，显示菜单的方法是根据权限删除掉路由表里没有权限的路由，然后再动态添加，原本包含没有访问权限的原路由表只要打开页面运行代码就已经不存在了，并且404页面除了过滤掉项目没有的路由外，同时每次的路由跳转都会鉴权。如果你知道了没有权限的路由试着强行跳转会因为没有权限直接会跳转404。
**就算通过查看代码或者其他方法获取全部路由，并且绕过404，花了这么大精力，，那你也看不到新世界的大门，因为所有数据都是通过后台请求返回来的，你没权限后台不会给你数据的，也不会让你去操作，，除非后台不验证权限，只要有人请求我就给你所有数据，，，，**

项目预览地址：
- github: https://xuxuxu-ni.github.io/vue3-elementPlus-admin/#/
- 国内gitee: http://nirongxu.gitee.io/vue3-elementplus-admin/#/

vue3-elementplus-admin是基于vite + vue3 + Pinia + elementUi-plus 开发的一个后台模板，实现了无限级菜单，页面、按钮级别的权限管理，为了减少前后端的沟通成本，页面、按钮级别的权限验证和动态路由表的存储校验，也都由前端完成，这样前端新建页面或者删除页面都不需要告诉后台去增加删除路由表

![enter description here](https://i.loli.net/2019/12/24/Ocs7n45uaMDhKef.png)
![enter description here](https://i.loli.net/2019/12/24/8dZaITtQOY7uNbF.png)
![enter description here](https://i.loli.net/2018/12/12/5c10a2f90e38a.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153f4998458.jpg)
![enter description here](https://i.loli.net/2018/12/16/5c153fe516daf.jpg)
![enter description here](https://i.loli.net/2018/12/12/5c102c115c130.jpg)
## 2. 准备工作
-开发环境
- node.js v12.0+
- vite v2
- git

-技术栈
- ES6+
- vue v3.2+
- vue-router
- Pinia
- axios
- scss
- element-ui plus

## 3. 实现功能

- 登录、退出
+ 基于token
    - 状态拦截、404页面
    - 动态加载路由
    - 页面、按钮指令权限管理
    - 无限级菜单
- 封装vue-i18n@8.x国际化组件
- 系统全屏化
- 菜单收缩
- icon 图标
+ tab标签导航
    - 右击快捷功能
- 表格拖拽排序
- 封装了 axios
- 封装了全局方法,和一些工具函数
- 编辑器
    - ckeditor
- Echarts 组件封装

```
## 4.开发使用
### 4.1开发
```
# 克隆项目
git clone https://github.com/xuxuxu-ni/vue3-elementplus-admin.git

# 设置淘宝镜像
yarn config set registry https://registry.npm.taobao.org/
or
npm config set registry https://registry.npm.taobao.org
# 安装依赖
yarn  or  yarn install
or
npm install

# 开发模式
yarn dev
or
npm run dev

# 启动编译打包 生产环境
yarn build
or
npm run build


### 4.2使用
深入了解该框架建议阅读 `vue3-elementplus-admin`的使用介绍，详细介绍了框架vue2.0版本的开发和使用教程,(下列文章也适用vue3.0版本)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（一）——简述](https://juejin.im/post/5c15332be51d4513ea6ed291)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（二）——权限管理](https://juejin.im/post/5c1552a65188250850604bb0)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（三）——页面搭建](https://juejin.im/post/5c156ae16fb9a049e660250c)
- [Vue2.0 + ElementUI 手写权限管理系统后台模板（四）——组件结尾](https://juejin.im/post/5c1605e76fb9a049b41c5cb0)


## 结语
如果这个框架对你有帮助的话，请给个星点个star


## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/xuxuxu-ni/vue3-elementplus-admin/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [xuxuxu-ni](https://github.com/xuxuxu-ni) <br/>
This project is [MIT](https://github.com/xuxuxu-ni/vue3-elementplus-admin/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
