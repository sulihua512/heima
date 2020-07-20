import Vue from 'vue'
import Vuex from 'vuex'
import { setItem, getItem } from '@/utils/storage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 保存公共数据
    user: getItem('user')
  },
  mutations: {
    // 只有mutations才能直接修改state中的数据
    setUser (state, obj) {
      state.user = obj
      // token持久化
      setItem('user', obj)
    }
  },
  actions: {
  },
  modules: {
  }
})
