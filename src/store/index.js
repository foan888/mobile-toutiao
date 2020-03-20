/********
 * store 下的index.js  专门处理 vuex 中的模块
 *
 */

import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth'

Vue.use(Vuex)

// // 引入默认对象，平常 对象
// // 相当于 把默认对象和平常对象合成了一个对象  默认对象属于该对象中的default属性
// import * as Obj from '@/test'
// console.log(Obj)

export default new Vuex.Store({
  state: {
    // 专门放置需要共享的状态
    user: auth.getUser // 就是我们token信息的对象  做前端持久化 如果缓存有token 读取缓存的token
  },
  // 要改token 只能通过 mutations
  mutations: {
    // 修改token
    updateUser (state, payload) {
      state.user = payload.user // 定义载荷中的user数据给state
      // 更新vuex的时候 也应该 将最新的数据 存入本地缓存
      auth.setUser(payload.user) // 保持 vuex 和本地存储的同步
    },
    // 删除token
    delUser (state) {
      state.user = {} // 将vuex 中 token设置为空
    }
  },
  actions: {
  },
  modules: {
  }
})
