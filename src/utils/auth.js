/****
 * auth.js 专门处理token 的读写和删除
 *  create by AIB 2020-3-15
 *  modify by XXX
 ***/
const USER_TOKEN = 'heima-toutiao-mobile-94' // 专门用来存储用户信息

// 设置用户的token信息
export function setUser (user) {
  // user应该是一个对象
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user))
}

// 获取用户的token信息
export function getUser () {
  // 将字符串转化成对象再返回
  return JSON.parse(window.localStorage.getItem(USER_TOKEN) || '{}')// 短路表达式
  // 如果前面为true 后面不执行
}

// 删除用户的token信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN)// 删除用户信息
}
