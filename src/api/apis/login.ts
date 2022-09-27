/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'

export default {
  // 账号密码登陆
  fetchLogin (data: {username: string,
    password: string}) {
    return axios.post('/admin/user/login', data)
  }
}
