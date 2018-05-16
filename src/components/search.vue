<template>
    <div class="search_area">
       <input class="search_input" v-model="i" placeholder-class="search_placeholder" :placeholder="subtitle" />
    </div>
</template>
<script>
export default {
  data () {
    return {
      i: '',
      subtitle: '搜索'
    }
  }
}
</script>

<style lang="scss">
    .search_area{
        padding-top: 20rpx;
        padding-bottom: 20rpx;
        width: 100%;
        .search_input{
            height: 50rpx;
            width: 90%;
            margin: 0 auto;
            padding-left: 20rpx;
            background-color: #fff;
            border:1rpx solid #E6E6EA;
            border-radius: 10rpx;
        }
        .search_placeholder{
            height: 100%;
            color: #B2B2B2;
            font-size: 26rpx;
            margin-left: 40%;
            padding-left: 10%;
            background: url("../../static/images/search.png") no-repeat;
            background-size: 36rpx 36rpx;
            background-repeat: no-repeat;
            background-position: 2% center;

        }
    }
</style>
