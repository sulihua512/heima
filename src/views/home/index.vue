<template>
  <div class='index'>
      <van-tabs>
      <van-tab v-for="item in channels" :title="item.name" :key="item.id">
     {{ item.name }}
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
import { getChannels } from '@/api/channels.js'
export default {
  name: 'HomeIndex',
  data () {
    return {
      // 频道列表
      channels: []
    }
  },
  created () {
    this.getChannels()
  },
  methods: {
    async getChannels () {
      const { data: { data } } = await getChannels()
      this.channels = data.channels
      // console.log(this.channels)
    }
  }
}
</script>

<style scoped lang='less'>

</style>
