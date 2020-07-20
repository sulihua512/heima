// 对axios进行二次封装
import axios from 'axios'
import store from '@/store/index.js'

const request = axios.create({
// 基地址
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const user = store.state.user
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
export default request
