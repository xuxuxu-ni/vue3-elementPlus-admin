/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/9/27
 * Description: 文件描述
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'

// 设置请求头和请求路径
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = process.env.API_HOST

// http request 拦截器
axios.interceptors.request.use(
  (config): AxiosRequestConfig => {
    NProgress.start()
    // @ts-ignore
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    if (Cookies.get('access_token')) {
      // @ts-ignore
      config.headers.Authorization = 'Bearer' + Cookies.get('access_token')
    }
    return config
  },
  (error) => {
    return Promise.reject(error.response)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  (response): Promise<AxiosResponse<any, any>> => {
    NProgress.done()
    if (response.data.code === 11000) {
      Cookies.set('access_token', response.data.message, { expires: 1 / 12 })
      return Promise.resolve(response)
    } else if (response.data.code === 10000) {
      // 约定报错信息
      ElMessage({
        message: response.data.message,
        type: 'warning',
      })
      return Promise.reject(response)
    }
    return Promise.resolve(response)
  },
  (error) => {
    NProgress.done()
    let errMessage = '未知错误'

    switch (error.response.status) {
    case 400:
      errMessage = '错误的请求'
      break
    case 401:
      errMessage = '未授权，请重新登录'
      ElMessage({
        message: error.response.data.message,
        type: 'warning',
      })
      Cookies.remove('access_token')
      setTimeout(() => {
        location.reload()
      }, 3000)
      break
    case 403:
      errMessage = '拒绝访问'
      break
    case 404:
      errMessage = '请求地址出错'
      break
    case 405:
      errMessage = '请求方法未允许'
      break
    case 408:
      errMessage = '请求超时'
      break
    case 500:
      errMessage = '服务器端出错'
      break
    case 501:
      errMessage = '网络未实现'
      break
    case 502:
      errMessage = '网络错误'
      break
    case 503:
      errMessage = '服务不可用'
      break
    case 504:
      errMessage = '网络超时'
      break
    case 505:
      errMessage = 'http版本不支持该请求'
      break
    default:
      errMessage = `其他连接错误 --${error.response.status}`
    }
    ElMessage({
      message: errMessage,
      type: 'warning',
    })
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)
export default axios
