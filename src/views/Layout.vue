<template>
  <div class='container'>
    <van-nav-bar
  title="黑马头条"
  right-text="搜索"
  left-arrow
  @click-right="hReach"
  fixed
/>
    <router-view></router-view>
    <van-tabbar  route>
      <van-tabbar-item icon="home-o" to="/">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
    </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {

    }
  },
  methods: {
    hReach () {}
  }
}
</script>

<style scoped lang='less'></style>
