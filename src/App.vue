<template>
  <div id="app">
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
