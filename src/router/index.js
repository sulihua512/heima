import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', name: 'Home', component: () => import('../views/home/index.vue') },
      { path: '/question', name: 'Question', component: () => import('../views/question/index.vue') },
      { path: '/video', name: 'Video', component: () => import('../views/video/index.vue') },
      { path: '/user', name: 'User', component: () => import('../views/user/index.vue') }
    ]
  },
  // 登录页(组件懒加载)
  { path: '/login', component: () => import('../views/login/index.vue') }
]

const router = new VueRouter({
  routes
})

export default router
