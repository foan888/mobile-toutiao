import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'// 引入vant组件库
import 'vant/lib/index.css'// 引入vant组件的样式

Vue.use(Vant)// 注册Vant的所有组件 一旦注册  任意位置都可以使用
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
