<template>
  <div class="container">
    <!-- 导航组件 vant组件的导航 fixed 固定在顶端-->
    <!-- 页面地址为 /user 应该隐藏掉导航行  否则不隐藏 -->
    <!-- @事件名="逻辑" -->
    <van-nav-bar @click-right="$router.push('/search')" fixed title="头条" right-text="搜索" v-if="$route.path!== '/user'"></van-nav-bar>
    <!-- 二级路由容器 -->
    <!-- 判断当前地址 是 /user  给一个noTop Class -->
    <div class="my-wrapper" :class="{noTop: $route.path === '/user'}">
      <router-view></router-view>
    </div>
    <!-- 标签栏组件 -->
    <!-- 开启路由模式 -->
    <van-tabbar route>
      <!-- 应该点击导航的标签跳转路由 -->
      <!-- 一旦启用路由模式 van-tabbar-item 就可以当router-link使用 -->
      <van-tabbar-item icon="wap-home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  // 控制二级路由容器的宽高
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
