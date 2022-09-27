/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/9/27
 * Description: 文件描述
 */
import axios from '../axios'

export default {
  // 获取权限列表
  fetchGetRoleList () {
    return axios.post('/permissions/getRoleList')
  },
  // 增加角色
  fetchAddRole (data: {name: string,
    describe: string,
    status: boolean,
    permission: Array<number>}) {
    return axios.post('/permissions/addRole', data)
  },
  // 删除角色
  fetchDelRole (data: {
    id: string
  }) {
    return axios.post('/permissions/delRole', data)
  },
  // 分配角色权限
  fetchRolePermissions (data: {
    selectPermission: Array<number>,
    rid: string
  }) {
    return axios.post('/permissions/rolePermissions', data)
  }
}

