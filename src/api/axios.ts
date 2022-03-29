/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/3/21
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
    if (error.response.status === 404) {
      ElMessage({
        message: '请求地址出错',
        type: 'warning',
      })
    } else if (error.response.status === 401) {
      ElMessage({
        message: error.response.data.message,
        type: 'warning',
      })
      Cookies.remove('access_token')
      setTimeout(() => {
        location.reload()
      }, 3000)
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  }
)
export default axios
