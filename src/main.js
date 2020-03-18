import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'// 引入vant组件库
import 'vant/lib/index.css'// 引入vant组件的样式
import 'amfe-flexible' // 引入移动端适配插件
import './libs/rem.js' // 引入 rem适配
import '@/styles/index.less' // 引入自定义的全局样式 覆盖vant样式
Vue.use(Vant)// 注册Vant的所有组件 一旦注册  任意位置都可以使用  相当于调用了vant的install的方法
// 以上做法完整导入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
