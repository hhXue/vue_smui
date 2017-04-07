<template>
  <div class="login" v-title="title">
    <div class="content-padded">
        <h1 class="logo">
          <img src="../../assets/images/ic_wechat_logo.png">
        </h1>
    </div>
    <div class="list-block">
          <ul>
            <!-- Text inputs -->
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-name"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="text" placeholder="请输入您的账号">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-media"><i class="icon icon-form-password"></i></div>
                <div class="item-inner">
                  <div class="item-input">
                    <input type="password" placeholder="请输入您的密码" class="">
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="content-block">
          <div class="row">
            <div class="col-100">
              <a @click="submit()" class="button button-big button-fill button-danger">登录</a>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
import $ from 'n-zepto'
export default {
  name: 'login',
  data () {
    return {
      title: '登录',
      url: '/static/mock-data.json',
      data: {username: 'a', password: 'b'}
    }
  },
  methods: {
    submit: function () {
      let pageName = ''
      let logintype = location.search.split('=')[1]
      switch (logintype) {
        case '1':
          pageName = 'recharge'
          break
        case '2':
          pageName = 'outcash'
          break
        default:
          $.toast('登录地址错误！')
          break
      }
      if (Number(logintype) === 1 || Number(logintype) === 2) {
        let self = this
        $.showPreloader('正在登录，请稍候')
        setTimeout(function () {
          $.hidePreloader()
          $.toast('登录成功！')
          self.$router.push({path: pageName})
          sessionStorage.setItem('username', 'xuetest')
          sessionStorage.setItem('password', '1')
        }, 2000)
        this.$http.post(this.url, this.data).then((response) => {
          sessionStorage.setItem('username', response.body.users.username)
          sessionStorage.setItem('password', response.body.users.password)
        })
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../assets/less/login.less";
</style>
