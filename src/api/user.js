// 所有用户操作的功能
import request from '@/utils/request'
/**
 * 用户登录
 * @param {*} user
 */
export function login (user) {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: user
  })
}
/**
 * 用户退出登录
 * @param {*} user
 */
export function logout (user) {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: user
  })
}
