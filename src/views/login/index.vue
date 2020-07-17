<template>
  <div class='login-container'>
    <van-nav-bar title="登录"/>
    <van-cell-group>
      <van-field  v-model.trim="user.mobile" label="手机号" placeholder="请输入手机号" required clearable :error-message="errInfo.mobile"/>
      <van-field v-model.trim="user.code" type="password" label="密码" placeholder="请输入密码" required clearable :error-message="errInfo.code"/>
    </van-cell-group>
    <div class="btn-wrap">
      <van-button type="primary" class="btn" @click="hLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机
        code: '246810' // 密码
      },
      errInfo: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    // 对用户的信息进行验证，如果验证成功，返回true，如果不成功，返回false (代码有语义化)
    checkInfo (user) {
      if (!user.mobile) {
        this.errInfo.mobile = '手机号不能为空!'
        return false
      }
      if (!user.code) {
        this.errInfo.code = '密码不能为空!'
        return false
      }
      return true
    },
    // 登录
    async hLogin () {
      // 1. 对用户的信息进行校验
      if (!this.checkInfo(this.user)) {
        return
      }
      // 2. loading
      this.$toast.loading({
        message: '登录中...',
        duration: 0,
        mask: true
      })
      // 3. 调用接口
      try {
        const result = await login(this.user)
        console.log(result)
        // todo:跳转到首页
      } catch (err) {
        // console.log(err)
        // 错误信息
        const errMsg = err.response.data.message
        if (errMsg) {
          if (errMsg.mobile) {
            this.$toast.fail('手机号错误')
          }
          if (errMsg.code) {
            this.$toast.fail('密码错误')
          }
        } else {
          this.$$toast.fail('登录出错')
        }
      }
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
