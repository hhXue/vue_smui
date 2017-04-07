<template>
  <div class="sharecontent" v-title="title">
    <div class="sharetop">
      <div class="videocontent"><video src="movie.ogg" width="100%" height="100%" poster="../../assets/images/test1.jpg" controls="controls"></video></div>
      <div class="playstyle live">{{playStyle}}</div>
      <div class="content-padded info">
        <div class="row">
          <div class="col-20 headimg">
            <img src="../../assets/images/test1.jpg">
          </div>
          <div class="col-60">
            <div class="broadcastname">鹿晗</div>
            <div class="looknum"><span>123456</span>人正在观看</div>
          </div>
          <div class="col-20">
            <a href="#" class="button button-danger">{{attract}}</a>
          </div>
        </div>
      </div>
    </div>
    <h4>精彩推荐</h4>
    <div class="row" style="margin:0 2% 0 -2%">
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
      <div class="col-50 recomm">
        <img src="../../assets/images/test1.jpg">
        <div>陈小艺在线直播</div>
      </div>
    </div>

  </div>
</template>
<script>
  import $ from 'n-zepto'
  export default {
    beforeCreate: function () {
      self.isdown === false ? self.openurl = '/static/ic_share_down.png' : self.openurl = '/static/ic_share_in.png'
      self.isdown === false ? self.btname = '立即下载' : self.btname = '立即打开'
      let bottom = '<footer class="row download" style="margin-left:0;padding-right:1rem;"><div class="col-75"><img src="' + self.openurl + '"></div><div class="col-25"><a href="#" class="button button-fill button-danger">' + self.btname + '</a></div></footer>'
      $(bottom).appendTo('body')
    },
    data () {
      return {
        title: '***的回放',
        playStyle: '直播',
        attract: '关注'
      }
    },
    beforeDestroy: function () {
      $('body').remove('footer')
    }
  }
</script>
<style scoped lang="less">
@import "../../assets/less/share.less";
</style>
