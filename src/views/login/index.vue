<template>
  <div class='login-container'>
    <van-nav-bar title="登录"/>
    <van-cell-group>
      <van-field  label="手机号" placeholder="请输入手机号" required clearable/>
      <van-field type="password" label="密码" placeholder="请输入密码" required clearable/>
    </van-cell-group>
    <div class="btn-wrap">
      <van-button type="primary" class="btn">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='less'>
.btn-wrap {
  padding: 20px;
  .btn {
    width: 100%;
    background-color: #3196fa;
    color: #fff;
    border-radius: 20px;
  }
}
</style>
