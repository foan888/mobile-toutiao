/*******
 * request 负责请求管理模式
 *
 *  */
import axios from 'axios'
import JSONBig from 'json-bigint' // 引入大数字插件'
import store from '@/store' // 引入vuex中的store实例对象 相当于 组件中的 this.$store
// axios.defaults 是对原有默认值进行修改
// axios.create()  创建一个axios的新实例
const instance = axios.create({
  // 构造参数 传入一些配置 和defaults一样
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0', // 基础请求地址
  // 此函数是后台响应回来  但没有进入axios的响应拦截器时执行 数组里可以写多个处理函数
  transformResponse: [function (data) {
    // data就是后端响应回来的字符串
    // JSON.parse()
    return data ? JSONBig.parse(data) : {}
  }]
}) // 创建一个axios的新实例

// token注入  在请求之前 也就是请求拦截器
// instance是一个新的axios实例
axios.interceptors.request.use(function (config) {
  // 成功的时候如何处理
  // 读取配置信息 给配置信息注入token
  if (store.state.user.token) {
    config.headers.Authorization = '{store.state.user.token}' // 将token 统一注入到header中
  }
  // 不用if else的用法
  //   config.headers.Authorization && (config.headers.Authorization = `Bearer ${store.state.user.token}`)// 将token 统一注入到header中
  return config// 返回配置
}, function (error) {
  // 直接返回promise的错误
  return Promise.reject(error)// 返回错误 这样的话会直接进入到axios的catch中
})
// 用响应拦截器 处理 返回结果的数据 将多嵌套的结构 解构出来
instance.interceptors.response.use(function (response) {
  try {
    return response.data.data // 如果成功则返回
  } catch (error) {
    // 如果失败 说明 response.data不存在   如果两层解不开 就返回一层
    return response.data
  }
}, function (error) {
  // 直接返回失败
  return Promise.reject(error) // 返回执行链的catch
})
export default instance
