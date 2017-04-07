<template>
  <div id="recharge" v-title="title">
    <div class="page-group">
        <div class="content">
          <div class="content-block-title">充值账号（请输入充值手机号码）<span><router-link to="/login?type=1" class="logout">退出登录</router-link></span></div>
            <div class="bar bar-header-secondary userphone">
              <div class="searchbar">
                <a class="searchbar-cancel fontsize">取消</a>
                <div class="search-input">
                  <input type="number" id='search' placeholder='' v-model="inputPhone"/>
                </div>
              </div>
          </div>

          <div class="content-block-title">充值金额</div>
          <div class="list-block">
            <ul>
              <li class="item-content" v-bind:class="{'focus':focusNum==pay.num}" v-for="pay in pays" @click="focusPay(pay.num,pay.name)">
                <div class="item-media"><i class="icon icon-f7"></i></div>
                <div class="item-inner marginL0">
                  <div class="item-title fontsize" >{{ pay.name }}</div>
                  <div class="item-after"><span class="button button-round button-dark" >{{ pay.num }}</span></div>
                </div>
              </li>
            </ul>
          </div>

          <div class="content-block-title">支付方式</div>
            <div class="list-block">
              <ul>
                <li class="item-content" @click="focusStyle('zhifubao')" >
                  <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner marginL0">
                    <div class="item-title">
                      <div><img class="paystyle left" src="../../assets/images/ic_zhifubao.png"><span class="payfont left">&nbsp;&nbsp;支付宝支付</span></div>
                    </div>
                    <div class="payicon"><img :src="focusSrc=='zhifubao'?'/static/ic_chongzhi_ok_pre.png' : '/static/ic_chongzhi_ok.png'"></div>
                  </div>
                </li>
                <li class="item-content" @click="focusStyle('wx')" >
                  <div class="item-media"><i class="icon icon-f7"></i></div>
                  <div class="item-inner marginL0">
                    <div class="item-title">
                      <div><img class="paystyle left" src="../../assets/images/ic_wechat.png"><span class="payfont left">&nbsp;&nbsp;微信支付</span></div>
                    </div>
                    <div class="payicon"><img :src="focusSrc=='wx'?'/static/ic_chongzhi_ok_pre.png' : '/static/ic_chongzhi_ok.png'"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="content-block">
              <div class="row">
                <div class="col-100">
                  <a href="javascript:;" @click="submit(user)" class="button button-big button-fill button-round button-danger confirm-ok">确认充值</a>
                </div>
              </div>
            </div>
          </div>

      </div>
      </div>
  </div>
</template>
<script>
  import $ from 'n-zepto'
  export default {
    data () {
      return {
        title: '充值',
        user: sessionStorage.getItem('username'),
        payNum: '',
        focusNum: '',
        focusName: '',
        focusSrc: 'zhifubao',
        pays: [{}],
        inputPhone: ''
      }
    },
    methods: {
      submit: function (user) {
        $.confirm('确定给 <span style="color:#fe405a">' + this.inputPhone +
        '(' + user + ')</span>充值<br/><span style="color:#fe405a">' +
        this.focusName + '(价值' + this.focusNum + '元)</span>?', function () {
          $.modal({
            text: '<div class="row">' +
            '<div class="col-40" style="text-align:right">' +
            '<img src="static/ic_zhifushibai.png" style="width:30%">' +
            '</div>' +
            '<div class="col-60" style="text-align:left">支付失败</div>' +
            '</div>',
            buttons: [
              {
                text: '取消'
              },
              {
                text: '再次支付',
                bold: true,
                onClick: function () {
                  /!--重新发送支付请求--/
                }
              }
            ]
          })
        })
      },
      focusPay: function (num, name) {
        this.focusNum = num
        this.focusName = name
      },
      focusStyle: function (s) {
        this.focusSrc = s
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$http.get('static/mock-data.json', {}, {
          headers: {

          },
          emulateJSON: true
        })
        .then((response) => {
          this.pays = response.body.pays
          this.focusNum = response.body.pays[0].num
        })
      })
    }
  }
</script>
<style scoped lang="less">
@import "../../assets/less/recharge.less";
</style>
