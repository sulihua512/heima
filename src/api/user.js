// 所有用户操作的功能
import request from '@/utils/request'
// 在js中使用store
// import store from '@/store/index.js'

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
/**
 * 获取用户信息
 */
export function getInfo () {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/profile'
    // Headers: {
    //   Authorization: `Bearer ${store.state.user.token}`
    // }
    // 改进: 对于每一个需要token才能访问的接口，如果都是手动去加，则会有大量重复的操作。（100个接口，就要加100次）解决方法是在调用接口时，给自动添加token (请求拦截器)

  })
}
