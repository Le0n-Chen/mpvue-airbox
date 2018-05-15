<template>
  <div class="container" @click="clickHandle('test click', $event)">

    <div class="terminal">
        <p class="module_p">终端</p>
        <div class="terminal_area">

        </div>
    </div>
    <div class="device">
        <p class="module_p">设备</p>
        <div class="device_area">

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

<style lang="scss">
.container {
    margin-top: 20px;
    width: 100%;
    }
.module_p {
    text-align: left;
    width: 100%;
    }
.terminal_area{
    height: 100px;
    background-color: #fff;
    box-shadow:0px 4px 9px 0px rgba(0,0,0,0.11);
}
</style>
