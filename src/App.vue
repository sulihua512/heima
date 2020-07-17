<template>
  <div id="app">
    项目的主文件
    <van-button type="warning">警告按钮</van-button>
    <router-view/>
  </div>
</template>
<script>
import request from './utils/request'
export default {
  created () {
    request.get('/app/v1_0/user/channels').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="less">
</style>
