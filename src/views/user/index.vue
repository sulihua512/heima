<template>
  <div class='container'>
    {{$store.state.user}}
  </div>
</template>

<script>
import { getInfo } from '@/api/user.js'
export default {
  name: 'UserIndex',
  data () {
    return {

    }
  },
  async created () {
    const result = await getInfo()
    console.log(result)
  }
}
</script>

<style scoped lang='less'></style>
