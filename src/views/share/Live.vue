<template>
  <div class="sharecontent" v-title="title">
    <div class="playcontent" style="height:663px">
      <video src="movie.ogg" width="100%" height="100%" poster="" controls="controls"></video>
      <div class="giftcontent">
        <div class="row sendgift">
          <div class="bggift"></div>
            <div class="col-10 headimg">
              <img src="../../assets/images/test1.jpg">
            </div>
            <div class="col-50 headname">
              <div>微笑HE哭泣</div>
              <div>赠送玫瑰</div>
            </div>
            <div class="col-20 giftimg">
              <img src="/static/test_cb.png">
            </div>
        </div>
        <span class="giftnum giftnummuve">×<span id="changegiftnum">1</span></span>
      </div>
      <div class="chatcontent"></div>
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
    data () {
      return {
        title: '***的直播',
        playStyle: '直播',
        attract: '关注'
      }
    },
    ready: {
      scroll: (function () {
      })()
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$http.get('static/mock-data.json', {}, {
          headers: {

          },
          emulateJSON: true
        })
        .then((response) => {
          var numtop = 1
          var nametop = 2
          var i = 1
          var chatI = 0
          var giftmovefirst, giftmovesecond
          var headmove
          var scrollbottom
          var usercolor, msgcolor
          this.gift = response.body.gift
          this.chat = response.body.chat
          $('.giftcontent').css('animationDelay', Number(this.gift[0].num) + 1 + 's')
          headmove = setInterval(() => {
            numtop += 3
            nametop += 3
            $('.giftcontent').append(`<div class="row sendgift" style="top:${nametop}rem;">
                                        <div class="bggift"></div>
                                          <div class="col-10 headimg">
                                            <img src="/static/test_cb.png">
                                          </div>
                                          <div class="col-50 headname">
                                            <div>${this.gift[1].name}</div>
                                            <div>赠送玫瑰</div>
                                          </div>
                                          <div class="col-20 giftimg">'
                                            <img src="/static/test_cb.png">
                                          </div>
                                      </div>
                                      <span class="giftnum giftnummuve" style="top:${numtop}rem;">×<span id="changegiftnum">1</span></span>`)
            if (numtop === 4) {
              clearInterval(headmove)
            }
          }, 1000)
          setTimeout(() => {
            giftmovefirst = setInterval(() => {
              i++
              if (i + 1 > this.gift[0].num) {
                clearInterval(giftmovefirst)
                clearInterval(giftmovesecond)
              }
              $('#changegiftnum').text(i)
              $('.playcontent .giftnummuve').css('font-size', '5rem')
              giftmovesecond = setInterval(function () {
                $('.playcontent .giftnummuve').css('font-size', '3rem')
              }, 500)
            }, 1000)
          }, 1000)
          scrollbottom = setInterval(() => {
            if (chatI + 2 > this.chat.length) {
              clearInterval(scrollbottom)
            }
            $('.chatcontent').scrollTop($('.chatcontent').height())
            switch (this.chat[chatI].type) {
              case 'star':
                usercolor = 'syscolor'
                msgcolor = 'starcolor'
                break
              case 'focus':
                usercolor = 'usercolor'
                msgcolor = 'focuscolor'
                break
              case 'send':
                usercolor = 'usercolor'
                msgcolor = 'sendcolor'
                break
              case 'msg':
                usercolor = 'usercolor'
                msgcolor = 'messagecolor'
                break
              default:
                usercolor = 'usercolor'
                msgcolor = 'messagecolor'
                break
            }
            $('.chatcontent').append(`<div><span class="${usercolor}">${this.chat[chatI].name}</span><span class="${msgcolor}">${this.chat[chatI].dec}</span></div>`)
            chatI++
          }, 1000)
        })
      })
    }
  }
</script>
<style scoped lang="less">
@import "../../assets/less/share.less";
</style>
