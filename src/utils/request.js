// 对axios进行二次封装
import axios from 'axios'

const request = axios.create({
// 基地址
  baseURL: 'http://ttapi.research.itcast.cn'
})

export default request
