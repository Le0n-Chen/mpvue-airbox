import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main', '^pages/controlPanel/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'AirBox',
      navigationBarTextStyle: 'black',
      backgroundColor: '#f9fafc',
      enablePullDownRefresh: false
    },
    tabBar: {
      color: '#666666',
      selectedColor: '#000000',
      borderStyle: 'white',
      backgroundColor: '#f8f9fb',
      list: [
        {
          text: '控制面板',
          pagePath: 'pages/controlPanel/main',
          iconPath: 'static/images/controlPanel.png',
          selectedIconPath: 'static/images/controlPanel-actived.png'
        },
        {
          text: '设备',
          pagePath: 'pages/device/main',
          iconPath: 'static/images/device.png',
          selectedIconPath: 'static/images/device-actived.png'
        },
        {
          text: '终端',
          pagePath: 'pages/terminal/main',
          iconPath: 'static/images/terminal.png',
          selectedIconPath: 'static/images/terminal-actived.png'
        },
        {
          text: '配置',
          pagePath: 'pages/setting/main',
          iconPath: 'static/images/setting.png',
          selectedIconPath: 'static/images/setting-actived.png'
        }
      ]
    }
  }
}
