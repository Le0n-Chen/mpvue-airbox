<template>
    <div>
        <search></search>
        <div class="search_module_area" v-for="(item,index) in deviceAll" :key="item.key">
            <div class="circle_big">
                <div class="circle_small" :class="[{no_background: item.status === 0},{green_background: item.status === 1},{red_background: item.status === 2}]"></div>
            </div>
            <div class="search_module_text">
                <text class="search_module_title">{{item.name}}</text>
                <ul>
                    <li class="search_module_people" v-if="item.people">{{item.people}}</li>
                    <li class="search_module_device" v-if="item.device">{{item.device}}</li>
                </ul>
            </div>
            <div class="search_module_right">
                >
            </div>
        </div>
    </div>
</template>

<script>
import search from '@/components/search'
export default {
  data () {
    return {
      deviceAll: [
          {key: '1', name: 'RJ-19#4F-会议室', people: '15', device: 'AP320-I', status: 1}, //   未知: 0, 在线: 1, 离线: 2
          {key: '2', name: 'RJ-AC', people: '1369', device: 'WS6818', status: 1},
          {key: '3', name: '5869.6c35.1afa', people: '0', device: 'AP720-I', status: 0},
          {key: '4', name: '出口网关1', device: 'EG3000UE/XE', status: 1},
          {key: '5', name: 'RJ-19#-switch08', device: 'S8600E', status: 2}
      ],
      red_background: 'red_background'
    }
  },
  computed: {
  },

  components: {
    search
  },

  methods: {
  }
}
</script>

<style lang="scss">  //scoped会导致placeholder-class找不到
.search_module_area{
    width: 100%;
    height: 170rpx;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 6rpx 0rpx rgba(0,0,0,0.11);
    display: flex;
    align-items: center;
    padding-left: 40rpx;
    margin-bottom: 10rpx;
    .circle_big{
        width: 90rpx;
        height: 90rpx;
        border-radius: 90rpx;
        border: 1px solid #979797;
        position: relative;
    }
    .circle_small{
        height: 20rpx;
        width: 20rpx;
        position: absolute;
        border-radius: 20rpx;
        top:0;
        right:0;
    }
    .search_module_text{
        padding-left: 20rpx;
        padding-right: 80rpx;
        .search_module_title{
            color: #000000;
            font-size: 32rpx;
        }
        ul{
            margin-left: -6rpx;
        }
        ul li{
            padding-left: 32rpx;
            margin-right: 20rpx;
            margin-top: 10rpx;
            float: left;
            color: #888;
            font-size: 26rpx;
            line-height: 36rpx;
        }
        .search_module_people{
            background: url("../../../static/images/people.png") no-repeat;
            background-size: 32rpx;
        }
        .search_module_device{
            background: url("../../../static/images/fourSquare.png") no-repeat;
            background-size: 32rpx;
        }
    }
    .search_module_right{
        margin-left: auto;
        margin-right: 60rpx;
        height: 60rpx;
        color: #C7C7CC;
        font-size: 50rpx;
        line-height: 50rpx;
    }
}

.no_background{
    background: #BDBDBD;
}

.red_background{
    background: #FC4F4D;
}

.green_background{
    background: #17B586;
}

</style>
