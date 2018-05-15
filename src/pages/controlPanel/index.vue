<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="terminal">
        <p class="terminal_p">终端</p>
        <div class="terminal-area">

        </div>
    </div>
    <div>
        <p>设备</p>
        <div>

        </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.terminal{
    width: 100%;
}
.terminal_p{
    text-align: left;
}
</style>
