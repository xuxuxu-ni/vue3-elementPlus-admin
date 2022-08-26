/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/4/15
 * Description: 文件描述
 */
import {defineStore} from 'pinia'
import {ref} from 'vue'
import Cookies from 'js-cookie'

export const store = defineStore('store', () => {
  const token = ref<string | undefined>(Cookies.get('token'))

  function setToken(tokenData: string) {
    return new Promise((resolve) => {
      token.value = tokenData
      Cookies.set('token', token, { expires: 1 / 24 })
      resolve(token)
    })
  }

  return {
    token,
    setToken
  }

})
