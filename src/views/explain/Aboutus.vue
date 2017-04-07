<template>
  <div class="contentus">
    <div class="content-padded">
      <div class="headImg"><img src="../../assets/images/ic_about_us.png" alt="logo"></div>
      <div class="version">1.2.3.25</div>
      <p class="content-padded des">
        荔枝直播是广东网络广播电视台推出的基于互联网的互动直播平台，也是国内主流广电媒体第一家推出的多屏互动直播平台。荔枝直播依托先进的视频互动技术,利用广东广电强大的媒体与社会资源,为用户提供多方位的信息服务与互动。
      </p>
    </div>
    <div class="copyright">
      <p>Copyright©2017</p>
      <p>广东网络广播电视台</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'about_us',
    data () {
      return {
        title: '关于我们'
      }
    }
  }
</script>
<style>
@fontcolor:#fe405a;
.contentus {
  padding-top: 1rem;
}
.headImg {
  text-align: center;
}
img {
  width: 40%;
}
.version {
  text-align: center;
  color: @fontcolor;
  font-size: 1rem;
  line-height: 3rem;
}

.des {
  color: #333333;
  margin: 0 auto;
  text-indent: 2em;
  line-height: 1.6rem;
  font-size: 1rem;
  padding: 0 0.5rem;
}
.copyright {
  position: fixed;
  text-align: center;
  color: #b8b8b8;
  font-size: 0.5rem;
  bottom: 1rem;
  width: 100%;
  p {
    width: 100%;
    text-align: center;
    line-height: 1.2rem;
  }
}
</style>
