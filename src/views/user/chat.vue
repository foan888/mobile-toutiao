<template>
   <div class="container">
    <!-- 导航 显示返回箭头 -->
    <!-- click-left 点击左侧事件 -->
    <!-- $router.go(-1) 和 $router.back()  都是返回上一页 -->
    <van-nav-bar title="小智同学" left-arrow @click-left="$router.back()"></van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
