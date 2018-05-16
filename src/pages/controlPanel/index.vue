<template>
  <div class="container">

    <div class="terminal">
        <p class="module_p">终端</p>
        <div class="terminal_area">
            <swiper class="swiper_mo" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
                <swiper-item v-for="(id, index) in movies" :key="index">
                  <view class="swiper_mo_view" ></view>
                </swiper-item>
            </swiper>
        </div>
    </div>
    <div class="device">
        <p class="module_p">设备</p>
        <div class="device_area">
            <ul>
                <li>
                    <div class="device_div"><p>在线AC   </p><span>2</span></div>
                    <div class="device_div"><p>离线AC   </p><span>0</span></div>
                </li>
                <li>
                    <div class="device_div"><p>在线AP    </p><span>134</span></div>
                    <div class="device_div"><p>离线AP    </p><span>2</span></div>
                </li>
                <li>
                    <div class="device_div"><p>交换机    </p><span>29</span></div>
                    <div class="device_div"><p>网关      </p><span>1</span></div>
                </li>
            </ul>
        </div>
    </div>
    <div class="index">
        <p class="module_p">指标</p>
        <div class="index_area">

        </div>
    </div>
    <div class="app_protocol">
        <p class="module_p">应用分析</p>
        <div class="app_protocol_area">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: [
          {id: 1},
          {id: 2}
      ]
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
@mixin area{
    background-color: #fff;
    box-shadow: 0px 4rpx 9rpx 0rpx rgba(0,0,0,0.11);
}
@mixin allFill{
    width: 100%;
    height: 100%;
}
.container {
    width: 100%;
    .terminal{
        width: 100%;
    }
    .device{
        width: 100%;}
    .module_p {
        text-align: left;
        width: 100%;
        padding-left: 26rpx;
        color: #B8B8B8;
        font-size: 26rpx;
        margin-top: 20rpx;
    }
    .index{
        width: 100%;

    }
    .app_protocol{
        width: 100%;
    }
    .terminal_area{
        height: 300rpx;
        @include area;
        .swiper{
            @include allFill;

        }
        .swiper_mo_view{
            @include allFill;
        }
        .swiper_mo{
            @include allFill;
        }
    }
    .device_area{
        @include area;
        height: 120rpx;
        ul{
            height: 100%;
            display: flex;
            justify-content: center;
        }
        li{
            height: 100%;
            flex-grow: 1;
            border-left: 1rpx solid #E8E8E8;
            &:first-child{
                border-left: none;
            }
        }
        .device_div{
            width: 70%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #6B6B6B;
            font-size: 24rpx;
            margin:0 auto 0 auto;
            &:first-child{
                padding-top: 10%;
            }

        }
    }
    .index_area{
        height: 100rpx;
        @include area;
    }
    .app_protocol_area{
        height: 250rpx;
        @include area;
    }

}


</style>
